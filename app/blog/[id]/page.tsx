import Image from "next/image"
import { notFound } from "next/navigation"
import { posts } from "@/app/data/posts"
import CommentSection from "@/app/components/CommentSection"
import AuthorCard from "@/app/components/AuthorCard"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">{post.title}</h1>
      {post.image && (
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  )
}

