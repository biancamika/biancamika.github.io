'use client'

import { marked } from 'marked'
import { useEffect, useState } from 'react'

interface MarkdownTextProps {
    content: string
    className?: string
}

export function MarkdownText({ content, className = '' }: MarkdownTextProps) {
    const [sanitizedContent, setSanitizedContent] = useState('')

    useEffect(() => {
        const loadDOMPurify = async () => {
            const DOMPurify = (await import('dompurify')).default
            const rawMarkup = marked(content, {
                breaks: true,
                gfm: true
            }) as string

            setSanitizedContent(DOMPurify.sanitize(rawMarkup))
        }

        loadDOMPurify()
    }, [content])


    return (
        <div 
            className={`markdown ${className}`} 
            dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
        />
    )
}