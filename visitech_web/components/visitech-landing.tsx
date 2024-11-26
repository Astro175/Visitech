"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Palette,
  MessageSquare,
  Globe,
  ArrowRight,
  BookOpen,
  DollarSign,
  Users,
  Smartphone,
  BarChart,
} from "lucide-react";
import Image from "next/image";

export function VisitechLandingComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const courses = [
    {
      title: "Full Stack Web Development",
      icon: <Code className="w-8 h-8 mb-2" />,
      description:
        "Master both frontend and backend technologies to become a versatile web developer.",
      price: "220,000 NGN",
      duration: "4 months",
      features: [
        "Learn HTML, CSS, JavaScript",
        "Master React and Node.js",
        "Build full-stack applications",
        "Deploy and manage web apps",
      ],
    },
    {
      title: "App Development",
      icon: <Smartphone className="w-8 h-8 mb-2" />,
      description:
        "Create powerful mobile applications for iOS and Android platforms.",
      price: "250,000 NGN",
      duration: "5 months",
      features: [
        "Develop for iOS and Android",
        "Learn React Native or Flutter",
        "Implement native device features",
        "Publish apps to app stores",
      ],
    },
    {
      title: "Social Media Management and Marketing",
      icon: <MessageSquare className="w-8 h-8 mb-2" />,
      description:
        "Master the art of social media to grow brands and engage audiences.",
      price: "70,000 NGN",
      duration: "1 month",
      features: [
        "Create effective social strategies",
        "Content creation for various platforms",
        "Social media analytics and reporting",
        "Paid social advertising campaigns",
      ],
    },
    {
      title: "WordPress Web Development",
      icon: <Globe className="w-8 h-8 mb-2" />,
      description:
        "Build professional websites quickly with WordPress and popular plugins.",
      price: "50,000 NGN",
      duration: "1 month",
      features: [
        "WordPress theme development",
        "Plugin customization",
        "E-commerce with WooCommerce",
        "SEO optimization for WordPress",
      ],
    },
    {
      title: "Data Analytics",
      icon: <BarChart className="w-8 h-8 mb-2" />,
      description:
        "Learn to analyze and interpret complex data to drive business decisions.",
      price: "150,000 NGN",
      duration: "2 months",
      features: [
        "Master data analysis tools",
        "Statistical analysis techniques",
        "Data visualization",
        "Machine learning basics",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8 mb-2" />,
      description:
        "Create beautiful, user-friendly interfaces that delight and engage users.",
      price: "100,000 NGN",
      duration: "3 months",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design principles",
        "Usability testing",
      ],
    },
  ];

  const headlineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center px-4 border-b lg:px-6 h-14">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/VISITECH LOGO_051959.png"
            alt="Visitech Logo"
            className="w-auto h-8"
            width={50}
            height={50}
          />
        </Link>
        <nav className="flex gap-4 ml-auto sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#courses"
          >
            Courses
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto md:px-6">
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
                  Master the latest tech skills, become employable, and
                  transform your career. We&apos;re interested in your story and
                  committed to changing it.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild variant="secondary">
                  <Link href="#courses">Explore Courses</Link>
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
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">
              Our Cutting-Edge Courses
            </h2>
            <p className="mb-8 text-lg text-center">
              Flexible payment options available - pay in installments!
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-[#4169E1]">
                    <CardHeader>
                      <div className="flex justify-center">{course.icon}</div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-lg font-bold">{course.price}</p>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {course.duration}
                      </p>
                      <ul className="space-y-2">
                        {course.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link
                          href="https://wa.me/+2348163966829"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Visitech?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  At Visitech, we&apos;re committed to providing top-notch tech
                  education that prepares you for the real world and changes
                  your story.
                </p>
              </div>
              <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-2">
                  <BookOpen className="w-8 h-8" />
                  <h3 className="font-bold">Learn to Earn</h3>
                  <p className="text-sm text-muted-foreground">
                    Acquire skills that are in high demand
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <DollarSign className="w-8 h-8" />
                  <h3 className="font-bold">Become Employable</h3>
                  <p className="text-sm text-muted-foreground">
                    Gain practical skills for the job market
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Users className="w-8 h-8" />
                  <h3 className="font-bold">Expert Mentorship</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn from industry professionals
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MessageSquare className="w-8 h-8" />
                  <h3 className="font-bold">Change Your Story</h3>
                  <p className="text-sm text-muted-foreground">
                    Transform your career and life
                  </p>
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
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Change Your Story?
                </h2>
                <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn more about our courses and how we
                  can help you achieve your tech career goals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" variant="secondary" asChild>
                  <Link
                    href="https://wa.me/+23463966829"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with an Expert on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
        <p className="text-xs text-muted-foreground">
          © 2024 Visitech. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
