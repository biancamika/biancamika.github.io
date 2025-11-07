import { getPosts } from 'app/work/utils'
import { Posts } from 'app/components/posts'
import HeroSection from './components/hero';

export default function HomePage() {
  const allPosts = getPosts()
  const selectedPosts = allPosts.filter(post => post.metadata.selected === true)

  return (
    <section>
      <HeroSection />
      <div className="flex flex-col gap-8 md:gap-10 px-4 py-8 md:px-20 md:py-16">
        <p className="font-monospace uppercase">Selected work</p>
        <Posts posts={selectedPosts} variant="selected"/>
      </div>
    </section>
  )
}
