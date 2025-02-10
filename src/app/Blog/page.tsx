import Link from "next/link";
import Image from "next/image";

export default function Blog() {
    const blogs = [
      {
        id: 1,
        image: "/images/blog1.jpg", 
        title: "Building Better Study Habits for Success",
        description:
          "your ultimate destination for engaging, informative, and inspiring content. Our blog is a space where we share ideas, experiences, and insights to spark curiosity and enrich your journey.",
      },
      {
        id: 2,
        image: "/images/blog2.jpg", 
        title: "The Importance of Self-Education in Modren Times",
        description:
          "Learn unique ways to enhance your space with modern decoration ideas. Discover how small changes can make a big impact on your future. we believe in the power of words to connect, educate, and inspire. Whether you're here to learn something new, explore unique perspectives, or simply enjoy a good read, we've got something for everyone. Our team of passionate writers and storytellers works hard to bring you content that is not only valuable but also enjoyable.",
      },
      {
        id: 3,
        image: "/images/blog3.jpg", 
        title: "The Role of Technology in Enhancing Education",
        description:
          "Celebrate the art of handmade craftsmanship. Delve into the stories of artisans who pour their hearts into creating timeless, meaningful pieces. We cover a wide range of topics, including [Education ,Career, lifestyle, technology, food, travel], aiming to provide you with fresh, well-researched, and thought-provoking articles. We are committed to delivering quality content that resonates with our readers and creates a positive impact.",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">WELCOME TO OUR BLOG WEBSITE!</h1>
        <div className="flex justify-center mt-6">
          <Link className="outline-double mb-6 px-4 py-2 font-semibold hover:text-blue-800 text-sm sm:text-base" href="/">Explore Blogs</Link>
        </div>
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-10">
            <Image
              src={blog.image}
              alt={blog.title}
              height={300}
              width={300}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    );
  }