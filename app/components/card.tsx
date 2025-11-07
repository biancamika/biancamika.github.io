import Link from 'next/link'
import { MarkdownText } from './markdown'

type CardProps = {
  post: any
  variant?: 'default' | 'selected'
}

export default function Card({ post, variant = 'default' }: CardProps) {
    const href = post.isExternal ? post.metadata.externalUrl : `/work/${post.slug}`
    const target = post.isExternal ? '_blank' : '_self'
    const rel = post.isExternal ? 'noopener noreferrer' : undefined

    const cardLayout = variant === 'selected' 
      ? 'flex flex-col md:grid md:grid-cols-12 hover:bg-stone-900 transition-colors duration-250 rounded-sm' 
      : 'flex flex-col hover:bg-stone-900 transition-colors duration-250 rounded-sm'

    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className="flex flex-col space-y-1 mb-4"
        >
            <div className={cardLayout}>
              <div 
                className={`
                  aspect-video bg-pink-200 border border-pink-500 rounded-sm overflow-hidden
                  ${variant === 'selected' ? 'md:col-span-7' : ''}
                `}
              >
                {post.metadata.image && (
                  <img
                    src={post.metadata.image}
                    alt={`Thumbnail image for ${post.metadata.title}`}
                    className="w-full h-auto"
                  />
                )}
              </div>
              <div 
                className={`
                  flex flex-col items-start
                  ${variant === 'selected' ? 'md:col-span-5 justify-center py-5 md:py-0 md:px-8' : 'py-5'}
                `}
              >
                <div 
                  className={`
                    inline-block uppercase p-1.5 rounded-md font-monospace font-light text-pink-400 bg-stone-800
                    ${variant === 'selected' ? 'text-base mb-5' : 'text-sm mb-3'}
                  `}
                >
                  {post.metadata.category}
                </div>
                <h2 
                  className={`
                    font-display font-bold
                    ${variant === 'selected' ? 'text-2xl md:text-4xl leading-tight mb-4' : 'text-2xl mb-2'}
                  `}
                >
                  {post.metadata.title}
                </h2>
                <div 
                  className={`
                    font-sans text-stone-300
                    ${variant === 'selected' ? 'text-lg' : 'text-base'}
                  `}
                >
                  <MarkdownText content={post.metadata.summary} />
                </div>
              </div>
            </div>
        </Link>
    )
}