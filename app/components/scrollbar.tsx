'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight ) * 100
            setScrollProgress(Math.min(100, Math.max(0, progress)))
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    return (
        <div
            className="fixed bottom-0 left-0 z-20 h-2 bg-pink-500 transition-all duration-250 ease-out"
            style={{ width: `${scrollProgress}%`}}
        >
        </div>
    )
}