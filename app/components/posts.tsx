import Card from './card'

export function BlogPosts({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
          <Card key={post.slug} post={post} />
        ))}
    </div>
  )
}
