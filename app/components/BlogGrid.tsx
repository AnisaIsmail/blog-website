"use client"

import { useState } from "react"
import BlogCard from "@/app/components/BlogCard"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"

interface BlogGridProps {
  posts: Array<{
    id: string
    title: string
    description: string
    date: string
    image: string
    category: string
  }>
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="my-12">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {visiblePosts < filteredPosts.length && (
        <div className="text-center mt-8">
          <Button onClick={() => setVisiblePosts((prev) => prev + 3)}>Load More</Button>
        </div>
      )}
    </div>
  )
}

