import Link from "next/link"
import { Button } from "@/app/components/ui/button"

export default function HeroSection() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
        Discover. Learn. Grow.
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Explore our curated collection of insightful articles, expert opinions, and cutting-edge ideas across various
        fields.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/blog">Explore All Posts</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/about">About Us</Link>
        </Button>
      </div>
    </section>
  )
}

