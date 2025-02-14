import BlogCard from "@/app/components/BlogCard"

const posts = [
  {
    id: "1",
    title: "Computer Science: A Gateway to the Digital Future",
    description:
      "Discover how computer science courses prepare students for careers in programming, AI, data science, and more in today's tech-driven world.",
    date: "2025-1-1",
    image: "/images/Slide1.jpg",
    category: "Technology", // Added category
  },
  // ... (other posts)
]

export default function Mega() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Explore Blogs to Shape a Better Future</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="fade-in">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

