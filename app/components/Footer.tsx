import Link from "next/link"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Blog.</h3>
            <p className="text-sm">Exploring ideas, sharing knowledge, and inspiring minds.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/technology">Technology</Link>
              </li>
              <li>
                <Link href="/category/science">Science</Link>
              </li>
              <li>
                <Link href="/category/lifestyle">Lifestyle</Link>
              </li>
              <li>
                <Link href="/category/health">Health</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-secondary">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p>&copy; 2023 Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

