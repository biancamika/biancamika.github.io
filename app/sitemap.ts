import { getBlogPosts } from 'app/work/utils'

export const baseUrl = 'https://bianca.digital'

export default async function sitemap() {
  let posts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
