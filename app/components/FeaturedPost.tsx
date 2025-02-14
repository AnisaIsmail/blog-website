import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { posts } from "@/app/data/posts"

export default function FeaturedPosts() {
  const trendingPosts = posts.slice(0, 3) // Assume first 3 are trending

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Trending Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trendingPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
              <Badge className="absolute top-2 right-2">{post.category}</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.description}</p>
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

