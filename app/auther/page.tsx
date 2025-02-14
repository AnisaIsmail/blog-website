import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export default function AnisaIsmailProfile() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <Image
              src="/Author.png"
              alt="Anisa Ismail"
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold mb-4">Anisa Ismail</h1>
            <p className="text-primary text-xl font-medium mb-4">Web Developer | SEO Expert</p>
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
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                <p className="text-muted-foreground">
                  Anisa Ismail is a passionate web developer with over 5 years of experience in crafting modern,
                  responsive, and user-friendly websites. Her expertise lies in leveraging cutting-edge technologies
                  like React.js, Next.js, and JavaScript to create seamless digital experiences. Anisa&#39;s commitment to
                  clean, efficient code and her eye for design have made her a valuable asset in the world of web
                  development.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "GraphQL", "SEO", "Responsive Design", "UI/UX"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Senior Web Developer at TechNova Solutions (2020 - Present)</li>
                  <li>Full Stack Developer at WebCraft Agency (2018 - 2020)</li>
                  <li>Junior Developer at Digital Dynamics (2016 - 2018)</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Master&#39;s in Computer Science, Tech University (2016)</li>
                  <li>Bachelor&#39;s in Software Engineering, Digital Institute (2014)</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
