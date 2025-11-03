'use client'

import { useState, useEffect } from 'react'
import { BlogPosts } from 'app/components/posts'

export const categories = [
  'All Projects', 
  'Product & Web Design', 
  'Graphic Design', 
  'Learning Design', 
  'Writing'
]

export default function Content({ 
    allProjects,
    initialCategory = 'All Projects'
}: { 
    allProjects: any[]
    initialCategory?: string
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  // Filter posts client-side
  const filteredProjects =
    selectedCategory === 'All Projects'
      ? allProjects
      : allProjects.filter((post) => post.metadata.category === selectedCategory)

  // Handle category click
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category)
  }


  return (
    <section className="md:px-20 flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="md:w-1/3 md:sticky md:top-0 md:h-screen md:flex md:flex-col md:gap-6 md:justify-center">
        <h1 className="hidden md:block font-display font-bold text-3xl">
            Filter
        </h1>
        <div className="w-full overflow-x-scroll md:overflow-auto mt-6 md:mt-0 pl-4 md:pl-0">
                <div className="flex md:flex-col md:items-start gap-4">
                {categories.map((category, index) => (
                    <button
                    key={category}
                    onClick={() => handleCategorySelection(category)}
                    className={
                        `font-monospace uppercase whitespace-nowrap transition-colors duration-250 
                        ${index === categories.length - 1 ? 'pr-4' : ''}
                        ${selectedCategory === category ? 'text-pink-400 hover:text-pink-500' : 'text-stone-300 hover:text-white'}
                        `}
                    >
                    {category}
                    </button>
                ))}
                </div>
        </div>
      </div>
      <div className="md:w-2/3 md:mt-14">
        <div className="px-4 md:px-0 transition-opacity duration-500">
            <BlogPosts posts={filteredProjects} />
        </div>
      </div>
    </section>
  )
}