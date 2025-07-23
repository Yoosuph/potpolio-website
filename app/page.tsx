"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DevNewsSection } from "@/components/dev-news-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Mail, Shield, Code, Zap, Users, Award, TrendingUp } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoading, setShowLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    // Check if loading animation should be shown
    const lastShown = localStorage.getItem("portfolio-loading-shown")
    const now = Date.now()
    const thirtyMinutes = 30 * 60 * 1000 // 30 minutes in milliseconds

    if (lastShown && now - Number.parseInt(lastShown) < thirtyMinutes) {
      // Skip loading animation if shown within last 30 minutes
      setShowLoading(false)
      setIsLoading(false)
      return
    }

    // Show loading animation
    localStorage.setItem("portfolio-loading-shown", now.toString())

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Reduced from 3500ms to 3000ms

    return () => clearTimeout(timer)
  }, [])

  if (showLoading && isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            {/* Simplified loading animation - removed one ring */}
            <div className="w-20 h-20 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin animate-reverse"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-2">Yusuf L Noah</h2>
            <p className="text-slate-400">Loading Portfolio...</p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Optimized Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Reduced particles from 20 to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 20, // Slower: 20-40s instead of 10-20s
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Reduced cyber-grid opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <Badge variant="outline" className="border-emerald-500 text-emerald-400 mb-4 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Senior IT Professional
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
              >
                Yusuf L Noah
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-slate-300 mb-8 h-16 flex items-center justify-center"
              >
                <TypewriterText
                  texts={[
                    "Cybersecurity & Dev Expert",
                    "Full-Stack Developer",
                    "Web3 Security Specialist",
                    "DevOps Engineer",
                  ]}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Transforming digital landscapes through cutting-edge cybersecurity solutions and innovative development.
                Specializing in Web3 technologies, secure application architecture, and enterprise-grade security
                implementations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-3 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">
                    Get In Touch
                    <Mail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center space-x-6"
              >
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "/contact", label: "Email" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
                      asChild
                    >
                      <Link href={social.href} title={social.label}>
                        <social.icon className="h-6 w-6" />
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-slate-900/30"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Code, label: "Projects Completed", value: "50+", color: "text-emerald-400" },
                { icon: Shield, label: "Security Audits", value: "25+", color: "text-cyan-400" },
                { icon: Users, label: "Happy Clients", value: "30+", color: "text-purple-400" },
                { icon: Award, label: "Years Experience", value: "8+", color: "text-orange-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                    <CardContent className="pt-6">
                      <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Core Expertise
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Delivering comprehensive solutions across the full spectrum of modern technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description:
                    "Advanced threat detection, penetration testing, and security architecture design for enterprise environments.",
                  skills: ["Penetration Testing", "Security Audits", "Threat Modeling", "Incident Response"],
                },
                {
                  icon: Code,
                  title: "Full-Stack Development",
                  description:
                    "End-to-end application development with modern frameworks and cloud-native architectures.",
                  skills: ["React/Next.js", "Node.js", "Python", "Cloud Platforms"],
                },
                {
                  icon: Zap,
                  title: "Web3 & Blockchain",
                  description: "Smart contract development, DeFi protocols, and blockchain security implementations.",
                  skills: ["Solidity", "DeFi Protocols", "Smart Contract Audits", "Web3 Integration"],
                },
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-500 h-full">
                    <CardContent className="pt-8">
                      <div className="bg-emerald-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600/30 transition-colors">
                        <expertise.icon className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-emerald-400 mb-4">{expertise.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{expertise.description}</p>
                      <div className="space-y-2">
                        {expertise.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors mr-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* News Section */}
        <DevNewsSection />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's collaborate on your next project. Whether it's enhancing security, building innovative applications,
              or exploring Web3 possibilities, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-3 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/about">
                  Learn More About Me
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

// Optimized Typewriter Component
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      },
      isDeleting ? 100 : 150,
    ) // Increased from 100ms to 150ms for better performance

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
