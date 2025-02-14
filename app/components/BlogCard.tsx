import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"

interface BlogCardProps {
  post: {
    id: string
    title: string
    description: string
    date: string
    image: string
    category: string
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">{post.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.description}</p>
        <time className="text-xs text-muted-foreground">{post.date}</time>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
          Read More
        </Link>
      </CardFooter>
    </Card>
  )
}

