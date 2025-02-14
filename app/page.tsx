import HeroSection from "@/app/components/HeroSection"
import FeaturedPosts from "@/app/components/FeaturedPost"
import LatestPosts from "@/app/components/LatestPosts"
import AuthorSpotlight from "@/app/components/AuthorSpotlight"
import NewsletterSignup from "@/app/components/NewsletterSignup"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      <HeroSection />
      <FeaturedPosts />
      <LatestPosts />
      <AuthorSpotlight />
      <NewsletterSignup />
    </div>
  )
}

