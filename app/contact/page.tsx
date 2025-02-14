"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const formFields = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
  ]

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <motion.h1
        className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Us</CardTitle>
              <CardDescription className="text-lg">
                We value your feedback and inquiries. Feel free to reach out to us using the form below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-muted-foreground mb-2">
                        {field.label}
                      </label>
                      <Input id={field.name} type={field.type} required className="w-full" />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={5} required className="w-full" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/80 hover:to-purple-600/80"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="initial"
          animate="animate"
        >
          {[
            { icon: MapPin, title: "Our Office", content: "123 Blog Street, Karachi, 12345" },
            { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", content: "contact@ourblog.com" },
            { icon: Clock, title: "Working Hours", content: "Mon - Fri: 9AM - 5PM" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex items-start space-x-4 bg-secondary/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-3">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Card className="shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412994679!2d-73.98823492404!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682805705568!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

