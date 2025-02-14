"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"

interface Comment {
  id: string
  author: string
  text: string
}

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")

  useEffect(() => {
    // In a real application, you would fetch comments for the specific post here
    console.log(`Fetching comments for post ${postId}`)
    // For now, we'll just log the postId to show it's being used
  }, [postId])

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        author: authorName,
        text: newComment,
      }
      setComments([...comments, newCommentObj])
      setNewComment("")
      setAuthorName("")
      // In a real application, you would save the comment to the backend here
      console.log(`Saving comment for post ${postId}:`, newCommentObj)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments for Post {postId}</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-secondary p-4 rounded-lg">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <Input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Your name" />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          rows={3}
        />
        <Button onClick={handleAddComment}>Submit Comment</Button>
      </div>
    </div>
  )
}

