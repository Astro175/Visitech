'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Palette, MessageSquare, Globe, ArrowRight, BookOpen, DollarSign, Users, Smartphone } from 'lucide-react'

export default function VisitechLanding() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const courses = [
    {
      title: "Frontend Web Development",
      icon: <Code className="h-8 w-8 mb-2" />,
      description: "Master the art of creating stunning, responsive websites with the latest frontend technologies.",
      price: "100,000 NGN",
      duration: "2 months + 1 month project and mentorship",
      features: [
        "Learn React, Vue, and Angular",
        "Master CSS frameworks like Tailwind",
        "Build real-world projects",
        "Get personalized mentorship"
      ]
    },
    {
      title: "Backend Web Development",
      icon: <Server className="h-8 w-8 mb-2" />,
      description: "Dive deep into server-side programming and build robust, scalable web applications.",
      price: "120,000 NGN",
      duration: "2 months + 1 month project and mentorship",
      features: [
        "Master Node.js, Python, and PHP",
        "Learn database management with SQL and NoSQL",
        "Implement RESTful APIs and GraphQL",
        "Deploy applications to the cloud"
      ]
    },
    {
      title: "WordPress Development",
      icon: <Globe className="h-8 w-8 mb-2" />,
      description: "Create professional websites quickly with WordPress and Elementor Pro.",
      price: "50,000 NGN",
      duration: "1 month",
      features: [
        "Master WordPress theme development",
        "Learn Elementor Pro for advanced designs",
        "Optimize WordPress for performance",
        "Implement e-commerce with WooCommerce"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8 mb-2" />,
      description: "Design beautiful, user-friendly interfaces that delight and engage users.",
      price: "80,000 NGN",
      duration: "2 months + 1 month project and mentorship",
      features: [
        "Master industry-standard tools like Figma",
        "Learn UX research and prototyping",
        "Create responsive and accessible designs",
        "Build a professional design portfolio"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: <MessageSquare className="h-8 w-8 mb-2" />,
      description: "Harness the power of social media to grow brands and engage audiences.",
      price: "Contact for pricing",
      duration: "1 month + 1 month mentorship",
      features: [
        "Develop effective social media strategies",
        "Master content creation for various platforms",
        "Learn social media analytics and reporting",
        "Implement paid social advertising campaigns"
      ]
    },
    {
      title: "Mobile Development with React Native",
      icon: <Smartphone className="h-8 w-8 mb-2" />,
      description: "Build cross-platform mobile apps for iOS and Android using React Native.",
      price: "250,000 NGN",
      duration: "3 months + 1 month mentorship",
      features: [
        "Master React Native fundamentals",
        "Develop for iOS and Android simultaneously",
        "Integrate with native device features",
        "Publish apps to App Store and Google Play"
      ]
    }
  ]

  const headlineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Visitech</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#courses">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                {mounted && (
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                    initial="hidden"
                    animate="visible"
                    variants={headlineVariants}
                  >
                    Change Your Story with Visitech
                  </motion.h1>
                )}
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Master the latest tech skills, become employable, and transform your career. We&apos;re interested in your story and committed to changing it.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild variant="secondary">
                  <Link href="#courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <motion.section 
          id="courses" 
          className="w-full py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Cutting-Edge Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-center">{course.icon}</div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-bold text-lg mb-2">{course.price}</p>
                      <p className="text-sm text-muted-foreground mb-4">{course.duration}</p>
                      <ul className="space-y-2">
                        {course.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
                          Book a session with our expert
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section 
          id="about" 
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Visitech?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  At Visitech, we&apos;re committed to providing top-notch tech education that prepares you for the real world and changes your story.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mt-8">
                <div className="flex flex-col items-center space-y-2">
                  <BookOpen className="h-8 w-8" />
                  <h3 className="font-bold">Learn to Earn</h3>
                  <p className="text-sm text-muted-foreground">Acquire skills that are in high demand</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <DollarSign className="h-8 w-8" />
                  <h3 className="font-bold">Become Employable</h3>
                  <p className="text-sm text-muted-foreground">Gain practical skills for the job market</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Users className="h-8 w-8" />
                  <h3 className="font-bold">Expert Mentorship</h3>
                  <p className="text-sm text-muted-foreground">Learn from industry professionals</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MessageSquare className="h-8 w-8" />
                  <h3 className="font-bold">Change Your Story</h3>
                  <p className="text-sm text-muted-foreground">Transform your career and life</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section 
          id="contact" 
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Change Your Story?</h2>
                <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn more about our courses and how we can help you achieve your tech career goals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer">
                    Chat with an Expert on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Visitech. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}