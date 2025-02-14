"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import BlogGrid from "@/app/components/BlogGrid"
import { Button } from "@/app/components/ui/button"
import { posts } from "@/app/data/posts"

export default function BlogContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const categories = ["All", ...new Set(posts.map((post) => post.category))]

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <BlogGrid posts={filteredPosts} />
    </div>
  )
}

