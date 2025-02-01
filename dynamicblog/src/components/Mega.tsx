import React from "react";
import BlogCard from "@/components/BlogCard";

export default function Mega() {
    const posts = [
        {
            id: "1",
            title: "Computer Science: A Gateway to the Digital Future",
            description: "Discover how computer science courses prepare students for careers in programming, AI, data science, and more in today’s tech-driven world.",
            date: "2025-1-1",
            image: "../images/Slide1.jpg",

        },
        {
            id: "2",
            title: "Exploring Business Management: Skills for Future Leaders",
            description: "Learn how business management courses teach leadership, entrepreneurship, and organizational skills for building successful careers.",
            date: "25-1-1",
            image: "../images/Slide2.jpg",
        },
        {
            id: "3",
            title: "Engineering Disciplines: Which One is Right for You?",
            description: "From civil to software engineering, explore the various fields and career opportunities available in this dynamic profession.",
            date: "25-1-1",
            image: "../images/Slide3.jpg",
        },
        {
            id: "4",
            title: "Medical Studies: Becoming a Healthcare Professional",
            description: "Understand the different medical courses, from MBBS to nursing, that lead to fulfilling careers in healthcare.",
            date: "25-1-1",
            image: "../images/Slide4.jpg",
        },
        {
            id: "5",
            title: "The World of Graphic Design: Creativity Meets Technology",
            description: "Explore courses that teach design principles, tools, and techniques for a successful career in graphic design.",
            date: "25-1-1",
            image: "../images/Slide5.jpg",
        },
        {
            id: "6",
            title: "Law and Legal Studies: Pursuing Justice as a Career",
            description: "Dive into the world of legal education and discover how law courses prepare students for advocacy, corporate law, and policymaking.",
            date: "25-1-1",
            image: "../images/Slide6.jpg",
        },
        {
            id: "7",
            title: "The Importance of Teacher Education Programs",
            description: "Learn how teacher training courses equip individuals to inspire and educate the next generation.",
            date: "25-1-1",
            image: "../images/Slide7.jpg",
        },
        {
            id: "8",
            title: "Environmental Science: A Course to Save the Planet",
            description: "Understand how environmental science programs prepare students to tackle challenges like climate change and sustainability.",
            date: "25-1-1",
            image: "../images/Slide8.jpg",
        },
        {
            id: "9",
            title: "Arts and Humanititleties: Exploring Creativity and Culture",
            description: "From literature to philosophy, learn how arts and humanities courses develop critical thinking and cultural awareness.",
            date: "25-1-1",
            image: "../images/Slide9.jpg",
        },
        {
            id: "10",
            title: "Data Science and Analytics: Making Sense of Big Data",
            description: "Discover how courses in data science empower students to analyze and interpret complex datasets for impactful decisions.",
            date: "25-1-1",
            image: "../images/Slide10.jpg",
        },
        {
            id: "11",
            title: "Psychology: Understanding Human Behavior",
            description: "Explore the fascinating world of psychology and learn how it helps in understanding and improving mental health and behavior.",
            date: "25-1-1",
            image: "../images/Slide11.jpg",
        },
        {
            id: "12",
            title: "Fashion Designing: Turning Creativity into a Career",
            description: "Find out how fashion design courses teach the art of creating stylish, trendsetting clothing and accessories.",
            date: "25-1-1",
            image: "../images/Slide12.jpg",
        },
        {
            id: "13",
            title: "Culinary Arts: Mastering the Art of Cooking",
            description: "Learn about culinary arts courses that prepare aspiring chefs for careers in restaurants, hotels, and the food industry.",
            date: "25-1-1",
            image: "../images/Slide13.jpg",
        },
        {
            id: "14",
            title: "Digital Marketing: Strategies for the Online World",
            description: "Understand how digital marketing courses teach SEO, social media marketing, and branding for businesses.",
            date: "25-1-1",
            image: "../images/Slide14.jpg",
        },
        {
            id: "15",
            title: "Aeronautical Engineering: Designing the Future of Flight",
            description: "Explore how aeronautical engineering courses train students to build and innovate in the field of aviation and aerospace.",
            date: "25-1-1",
            image: "../images/Slide15.jpg",
        },
    ];

    return (
        <div className="my-8">
            <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Explore Blogs to Shape a Better Future</h1>

            <div className="grid grid-cols-1 sm:-grid-grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <div className="fade-in" key={post.id}>
                        <div className="blog-card">
                            <BlogCard post={post} isDarkBackground={index % 2 === 0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
