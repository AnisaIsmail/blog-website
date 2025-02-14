"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <motion.h1
        className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        About Our Blog
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are dedicated to providing insightful, engaging, and inspiring content. Our mission is to create a
                space where readers can explore, learn, and connect with ideas that matter to them. Through our
                articles, we aim to spark curiosity, foster understanding, and encourage personal growth.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn} className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about.jpg"
            alt="Our Mission"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-primary">Join Our Community</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Be part of our growing community of curious minds. Subscribe to our newsletter for the latest updates,
          exclusive content, and thought-provoking discussions.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/80 hover:to-purple-600/80"
        >
          Subscribe Now
        </Button>
      </motion.div>
    </div>
  )
}

