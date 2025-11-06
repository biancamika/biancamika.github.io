import Content from './content'
import { getBlogPosts } from 'app/work/utils' // Fetch posts server-side

export default function WorkPage() {
  const allProjects = getBlogPosts() 
  return <Content allProjects={allProjects} initialCategory="All Projects" />
}
