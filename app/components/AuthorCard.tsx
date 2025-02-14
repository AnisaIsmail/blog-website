import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

export default function AuthorCard() {
  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <div className="flex items-center">
          <Image
            className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary"
            src="/Author.png"
            alt="Author Image"
            width={64}
            height={64}
          />
          <div>
            <h3 className="text-xl font-bold">Anisa Ismail</h3>
            <p className="text-muted-foreground">Web Developer | SEO Expert</p>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Anisa Ismail is an experienced web developer with extensive expertise in modern web technologies. She
          specializes in designing and developing responsive and user-friendly websites using frameworks like React.js,
          Next.js, and JavaScript.
        </p>
        <div className="mt-4 flex space-x-3">
          <Button variant="outline" asChild>
            <a href="#">Twitter</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/anisa-ismail-66b4702ba/">LinkedIn</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/AnisaIsmail">GitHub</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

