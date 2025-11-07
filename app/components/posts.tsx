import Card from './card'

type PostProps = {
  posts: any[]
  variant?: 'default' | 'selected'
}

export function Posts({ posts, variant = 'default' }: PostProps) {
  const postsLayout = variant === 'selected'
    ? "flex flex-col gap-8"
    : "grid grid-cols-1 sm:grid-cols-2 gap-8"

  return (
    <div className={postsLayout}>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Card key={post.slug} post={post} variant={variant} />
        ))}
    </div>
  )
}
