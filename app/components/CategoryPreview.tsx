import Link from "next/link"
import { Card, CardContent } from "@/app/components/ui/card"
import { posts } from "@/app/data/posts"

export default function CategoryPreview() {
  const categories = [...new Set(posts.map((post) => post.category))]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const post = posts.find((p) => p.category === category)
          return (
            <Card key={category} className="overflow-hidden">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post?.title}</p>
                <Link href={`/blog?category=${category}`} className="text-primary hover:underline">
                  View Posts
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

