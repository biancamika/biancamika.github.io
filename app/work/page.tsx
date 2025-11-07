import Content from './content'
import { getPosts } from 'app/work/utils' // Fetch posts server-side

export default function WorkPage() {
  const allProjects = getPosts() 
  return <Content allProjects={allProjects} initialCategory="All Projects" />
}
