import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getBlogPosts } from 'app/work/utils'
import { baseUrl } from 'app/sitemap'
import { ArrowLeft } from 'lucide-react'
import ScrollProgressBar from 'app/components/scrollbar'
import PostOutline from 'app/components/outline'
import { MarkdownText } from 'app/components/markdown'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {

  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className="w-full p-4 md:p-20 flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:w-1/4 md:sticky md:top-0 md:h-screen md:flex md:flex-col md:gap-6 md:justify-center">
          <a 
            href="/work"
            className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors duration-250"
          >
            <ArrowLeft className="size-4" />
            <p className="font-monospace text-sm uppercase">Go Back</p>
          </a>
          <PostOutline />
        </div>
        <div className="md:1/2 md:max-w-3xl flex flex-col gap-6">
          <div className="aspect-video bg-pink-200 border border-pink-500">
            {post.metadata.image && (
              <img
                src={post.metadata.image}
                alt={`Thumbnail image for ${post.metadata.title}`}
                className="w-full h-auto"
              />
            )}
          </div>
          <h1 className="title font-display">
            {post.metadata.title}
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-5">
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-stone-400">Roles</p>
              <div>
                <MarkdownText content={post.metadata.roles || ''} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-stone-400">Timeline</p>
              <div>
                <MarkdownText content={post.metadata.timeline || ''} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="uppercase text-sm text-stone-400">Visit</p>
              <MarkdownText content={post.metadata.visit || ''} />
            </div>
          </div>
          <article className="prose">
            <CustomMDX source={post.content} />
          </article>
        </div>
      </div>
      <ScrollProgressBar />
    </section>
  )
}
