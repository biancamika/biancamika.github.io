import Link from 'next/link'
import { MarkdownText } from './markdown'

export default function Card({ post }: { post: any }) {
    const href = post.isExternal ? post.metadata.externalUrl : `/work/${post.slug}`
    const target = post.isExternal ? '_blank' : '_self'
    const rel = post.isExternal ? 'noopener noreferrer' : undefined

    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className="flex flex-col space-y-1 mb-4"
        >
            <div className="flex flex-col gap-5">
              <div className="aspect-video bg-pink-200 border border-pink-500">
                {post.metadata.image && (
                  <img
                    src={post.metadata.image}
                    alt={`Thumbnail image for ${post.metadata.title}`}
                    className="w-full h-auto"
                  />
                )}
              </div>
              <div className="flex flex-col items-start">
                <div className="inline-block uppercase p-[0.375rem] mb-3 rounded-md font-monospace font-light text-sm text-pink-400 bg-stone-800">
                  {post.metadata.category}
                </div>
                <h2 className="font-display font-bold text-2xl mb-2">{post.metadata.title}</h2>
                <div className="font-sans text-base text-stone-300">
                  <MarkdownText content={post.metadata.summary} />
                </div>
              </div>
            </div>
        </Link>
    )
}