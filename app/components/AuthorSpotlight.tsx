import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function AuthorSpotlight() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Expert Author</h2>
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <Image
              src="/Author.png"
              alt="Anisa Ismail"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="md:w-2/3 p-8">
            <h3 className="text-2xl font-semibold mb-2">Anisa Ismail</h3>
            <p className="text-primary font-medium mb-4">Web Developer | SEO Expert</p>
            <p className="text-muted-foreground mb-6">
              Anisa Ismail is a skilled web developer with over 5 years of experience in modern web technologies. She
              excels in creating responsive and user-friendly websites using React.js, Next.js, and JavaScript.
            </p>
            <div className="flex space-x-4 mb-6">
              <Button asChild variant="outline" size="icon">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a
                  href="https://www.linkedin.com/in/anisa-ismail-66b4702ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/AnisaIsmail" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <Button asChild>
              <Link href="/auther">View Full Profile</Link>
            </Button>
          </CardContent>
        </div>
      </Card>
    </section>
  )
}

