'use client'

import { useState, useEffect } from 'react'

interface OutlineItem {
    id: string
    text: string
    level: number
}

export default function PostOutline() {
    const [outlineItems, setOutlineItems] = useState<OutlineItem[]>([])
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        // Find all heading elements
        const headingElements = document.querySelectorAll('article h5, article h3, article h4')
        const items: OutlineItem[] = Array.from(headingElements).map((heading) => {
            const level = parseInt(heading.tagName.charAt(1))
            return {
                id: heading.id,
                text: heading.textContent || '',
                level
            }
        })
        setOutlineItems(items)

        // Set up observer for active link highlighting
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-20% 0% -35% 0%',
                threshold: 0
            }
        )

        // Observe all heading elements
        headingElements.forEach((heading) => observer.observe(heading))

        return () => observer.disconnect()
    }, [])

    const getIndentationClass = (level: number) => {
        switch (level) {
            case 3:
                return 'ml-4'
            case 4:
                return 'ml-8'
            case 5:
                return ''
            default:
                return ''
        }
    }

    if (outlineItems.length === 0) return null

    return (
        <nav className="hidden md:flex md:flex-col md:gap-2">
            {outlineItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-base transition-colors duration-250 hover:text-white ${
                        activeId === item.id
                            ? 'text-pink-400'
                            : 'text-stone-300'
                    } ${getIndentationClass(item.level)}`}
                    onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(item.id)?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                >
                    {item.text}
                </a>
            ))}
        </nav>
    )
}