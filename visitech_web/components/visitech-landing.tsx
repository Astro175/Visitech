"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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

export default function VisitechLandingComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const learningPaths = [
    {
      title: "Web Development",
      icon: <Code className="w-8 h-8 mb-2" />,
      levels: [
        {
          title: "Beginner",
          description:
            "Embark on your journey to become a career-ready developer",
          price: "100,000 NGN",
          duration: "3 months",
          features: [
            "CSS foundations",
            "Introduction to JavaScript",
            "Git basics",
            "Web accessibility",
            "SEO fundamentals",
            "React Library",
            "Advanced CSS techniques",
          ],
        },
        {
          title: "Professional",
          description: "Elevate your skills to become a mid-level developer",
          price: "150,000 NGN",
          duration: "3 months",
          features: [
            "Advanced JavaScript concepts",
            "NextJS framework",
            "Web performance optimization",
            "Tailwind",
            "Website deployment strategies",
            "TypeScript essentials",
            "Functional JavaScript programming",
          ],
          examRequirement: "Examination required",
        },
        {
          title: "Backend to Fullstack",
          description:
            "Master server-side technologies and become a full stack developer",
          price: "250,000 NGN",
          duration: "3 months",
          features: [
            "Server setup and management",
            "API development",
            "Database fundamentals",
            "Linux and command line basics",
            "Vim essentials",
            "Node.js fundamentals",
            "SQL and PostgreSQL introduction",
          ],
          examRequirement: "Examination required",
        },
      ],
    },
    {
      title: "Social Media Marketing",
      icon: <MessageSquare className="w-8 h-8 mb-2" />,
      levels: [
        {
          title: "Basic",
          description:
            "Learn to enhance your business's online presence and profitability",
          price: "25,990 NGN",
          duration: "1 month",
          features: [
            "Social media platform basics",
            "Content creation strategies",
            "Audience engagement techniques",
            "Basic analytics interpretation",
            "Brand visibility tactics",
          ],
        },
        {
          title: "Professional",
          description:
            "Become an expert in Social Media Marketing and help businesses thrive online",
          price: "49,500 NGN",
          duration: "2 months",
          features: [
            "Advanced marketing strategies",
            "Data-driven campaign management",
            "Influencer collaboration techniques",
            "Social media advertising mastery",
            "ROI measurement and optimization",
          ],
          examRequirement: "Examination required",
        },
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8 mb-2" />,
      levels: [
        {
          title: "Beginner",
          description:
            "Start your journey in creating user-friendly and visually appealing interfaces",
          price: "100,000 NGN",
          duration: "3 months",
          features: [
            "Design thinking principles",
            "User research basics",
            "Wireframing and prototyping",
            "Visual design fundamentals",
            "Usability testing introduction",
          ],
        },
        {
          title: "Advanced",
          description:
            "Elevate your design skills to create exceptional user experiences",
          price: "150,000 NGN",
          duration: "3 months",
          features: [
            "Advanced interaction design",
            "Design systems creation",
            "User psychology in design",
            "Accessibility and inclusive design",
            "UX writing and content strategy",
          ],
          examRequirement: "Examination required",
        },
      ],
    },
    {
      title: "WordPress Development",
      icon: <Globe className="w-8 h-8 mb-2" />,
      levels: [
        {
          title: "Beginner",
          description:
            "Learn to create and manage professional WordPress websites",
          price: "50,000 NGN",
          duration: "1 month",
          features: [
            "WordPress installation and setup",
            "Theme customization",
            "Plugin management",
            "Content management",
            "Basic SEO for WordPress",
          ],
        },
        {
          title: "WooCommerce Specialist",
          description:
            "Master e-commerce development with WordPress and WooCommerce",
          price: "120,000 NGN",
          duration: "2 months",
          features: [
            "WooCommerce setup and configuration",
            "Payment gateway integration",
            "Custom product types",
            "Order management systems",
            "E-commerce SEO strategies",
          ],
          examRequirement:
            "Examination required to progress from Beginner level",
        },
      ],
    },
    {
      title: "App Development",
      icon: <Smartphone className="w-8 h-8 mb-2" />,
      levels: [
        {
          title: "Mobile App Development",
          description:
            "Create powerful mobile applications for iOS and Android platforms",
          price: "250,000 NGN",
          duration: "5 months",
          features: [
            "Cross-platform development fundamentals",
            "UI/UX for mobile apps",
            "API integration",
            "App performance optimization",
            "Publishing to app stores",
          ],
        },
      ],
    },
    {
      title: "Data Analytics",
      icon: <BarChart className="w-8 h-8 mb-2" />,
      levels: [
        {
          title: "Data Analytics Fundamentals",
          description:
            "Learn to analyze and interpret complex data to drive business decisions",
          price: "150,000 NGN",
          duration: "2 months",
          features: [
            "Data collection and cleaning",
            "Statistical analysis techniques",
            "Data visualization tools",
            "Predictive modeling basics",
            "Business intelligence reporting",
          ],
        },
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
        <Link href="#" className="flex items-center justify-center">
          <Image
            src="/VISITECH LOGO_051959.png"
            alt="Visitech Logo"
            className="w-auto h-8"
            width={50}
            height={50}
          />
        </Link>
        <nav className="flex gap-4 ml-auto sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#courses"
          >
            Courses
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </a>
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
                  <a href="#courses">Explore Learning Paths</a>
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
              Our Learning Paths
            </h2>
            <p className="mb-8 text-lg text-center">
              Flexible payment options available - pay in installments!
            </p>
            {learningPaths.map((path, pathIndex) => (
              <div key={pathIndex} className="mb-12">
                <div className="flex items-center justify-center p-4 mb-6 text-2xl font-bold bg-primary text-primary-foreground rounded-lg">
                  {path.icon}
                  <span className="ml-2">{path.title}</span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {path.levels.map((level, levelIndex) => (
                    <motion.div key={levelIndex} variants={cardVariants}>
                      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-[#4169E1]">
                        <CardHeader>
                          <CardTitle>{level.title}</CardTitle>
                          <CardDescription>{level.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-2 text-lg font-bold">
                            {level.price}
                          </p>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {level.duration}
                          </p>
                          <ul className="space-y-2">
                            {level.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center">
                                <ArrowRight className="w-4 h-4 mr-2" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          {level.examRequirement && (
                            <p className="mt-4 text-sm font-semibold text-muted-foreground">
                              {level.examRequirement}
                            </p>
                          )}
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <a
                              href="https://wa.me/+2348163966829"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Book a session with our expert
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
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
                  <a
                    href="https://wa.me/+2348163966829"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with an Expert on WhatsApp
                  </a>
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
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
