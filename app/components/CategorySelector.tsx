"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/app/components/ui/button"

interface CategorySelectorProps {
  categories: string[]
  initialCategory: string
}

export default function CategorySelector({ categories, initialCategory }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const category = searchParams.get("category") || "All"
    setSelectedCategory(category)
  }, [searchParams])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    router.push(`/blog${category !== "All" ? `?category=${category}` : ""}`)
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

