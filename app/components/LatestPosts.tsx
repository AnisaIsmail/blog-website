import Link from "next/link"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { posts } from "@/app/data/posts"

export default function LatestPosts() {
  const latestPosts = posts.slice(3, 9) // Get 6 posts after the trending ones

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <Card key={post.id} className="flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-4">
              <Badge className="mb-2">{post.category}</Badge>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.description}</p>
            </CardContent>
            <CardContent className="p-4 pt-0">
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/blog" className="text-primary hover:underline">
          View All Posts
        </Link>
      </div>
    </section>
  )
}

