"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Play, Pause, Quote, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const testimonialInterval = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      companySize: "Fortune 500",
      industry: "Technology",
      content:
        "Exceptional technical leadership and deep expertise in cybersecurity. Yusuf delivered a robust security framework that exceeded our expectations and significantly improved our security posture. The ROI was immediate and substantial. His ability to translate complex security concepts into actionable business strategies is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=SC",
      project: "Enterprise Security Framework",
      date: "2023",
      category: "cybersecurity",
      metrics: {
        "Security Incidents": "-85%",
        "Compliance Score": "99%",
        "Cost Savings": "$2M+",
      },
      linkedin: "https://linkedin.com/in/sarahchen",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Lead Developer",
      company: "StartupXYZ",
      companySize: "Series B Startup",
      industry: "Fintech",
      content:
        "Outstanding full-stack developer with incredible attention to detail. The Web3 integration was flawless and ahead of schedule. Yusuf's code quality is exceptional, and his security-first approach saved us from potential vulnerabilities. Highly recommend for complex technical projects. Communication was excellent throughout.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=MR",
      project: "DeFi Trading Platform",
      date: "2023",
      category: "web3",
      metrics: {
        "TVL Handled": "$50M+",
        Uptime: "99.9%",
        "Gas Optimization": "-60%",
      },
      twitter: "https://twitter.com/mrodriguez",
      featured: true,
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Security Consultant",
      company: "Independent Security Firm",
      companySize: "Boutique Consulting",
      industry: "Cybersecurity",
      content:
        "Rare combination of technical depth and strategic thinking. The security audit revealed critical vulnerabilities we hadn't considered and provided actionable solutions. Yusuf's methodology is thorough, and his reports are comprehensive yet accessible. Saved us from potential major breaches and regulatory issues.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=EW",
      project: "Security Audit & Remediation",
      date: "2022",
      category: "cybersecurity",
      metrics: {
        "Vulnerabilities Found": "23",
        "Critical Issues": "5",
        "Remediation Time": "2 weeks",
      },
      linkedin: "https://linkedin.com/in/emilywatson",
      featured: false,
    },
    {
      id: 4,
      name: "James Liu",
      role: "Founder & CEO",
      company: "BlockChain Ventures",
      companySize: "Early Stage VC",
      industry: "Blockchain",
      content:
        "Yusuf's expertise in blockchain security is unmatched. He identified and fixed critical smart contract vulnerabilities that could have cost us millions. His work is thorough, professional, and delivered on time. The security patterns he implemented became our standard across all portfolio companies.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=JL",
      project: "Smart Contract Security Audit",
      date: "2023",
      category: "web3",
      metrics: {
        "Contracts Audited": "12",
        "Vulnerabilities Fixed": "18",
        "Funds Protected": "$25M+",
      },
      twitter: "https://twitter.com/jamesliu",
      featured: false,
    },
    {
      id: 5,
      name: "Amanda Foster",
      role: "VP of Engineering",
      company: "CloudScale Inc",
      companySize: "Mid-Market",
      industry: "Cloud Services",
      content:
        "Yusuf transformed our development practices with his DevSecOps expertise. The CI/CD pipeline he designed reduced our deployment time by 80% while significantly improving security. His mentoring of our team was invaluable, and the knowledge transfer was exceptional. A true professional.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=AF",
      project: "DevSecOps Implementation",
      date: "2022",
      category: "development",
      metrics: {
        "Deployment Time": "-80%",
        "Security Score": "+70%",
        "Team Productivity": "+150%",
      },
      linkedin: "https://linkedin.com/in/amandafoster",
      featured: false,
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "CISO",
      company: "HealthTech Solutions",
      companySize: "Enterprise",
      industry: "Healthcare",
      content:
        "Working with Yusuf on our HIPAA compliance project was a game-changer. His deep understanding of healthcare regulations combined with technical expertise resulted in a comprehensive security program. We achieved compliance ahead of schedule and under budget. Highly recommended for regulated industries.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=RK",
      project: "HIPAA Compliance & Security",
      date: "2021",
      category: "cybersecurity",
      metrics: {
        "Compliance Score": "100%",
        "Audit Findings": "0",
        "Implementation Time": "-30%",
      },
      linkedin: "https://linkedin.com/in/robertkim",
      featured: false,
    },
    {
      id: 7,
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "MobileFirst Apps",
      companySize: "Growth Stage",
      industry: "Mobile Technology",
      content:
        "Yusuf's mobile security expertise helped us launch our app with confidence. The security architecture he designed scales beautifully, and the user experience remains seamless. His attention to both security and usability is remarkable. Our app store ratings improved significantly after his optimizations.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=LT",
      project: "Mobile App Security",
      date: "2023",
      category: "mobile",
      metrics: {
        "App Store Rating": "4.8/5",
        "Security Incidents": "0",
        Performance: "+40%",
      },
      twitter: "https://twitter.com/lisathompson",
      featured: false,
    },
    {
      id: 8,
      name: "David Park",
      role: "Technical Director",
      company: "AI Innovations Lab",
      companySize: "Research Institute",
      industry: "Artificial Intelligence",
      content:
        "Yusuf's work on securing our AI infrastructure was exceptional. He understood the unique challenges of protecting machine learning models and data pipelines. The security framework he implemented allows us to innovate rapidly while maintaining the highest security standards. A true expert in emerging technologies.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=DP",
      project: "AI Infrastructure Security",
      date: "2023",
      category: "cybersecurity",
      metrics: {
        "Model Protection": "100%",
        "Data Integrity": "99.99%",
        "Threat Detection": "<1min",
      },
      linkedin: "https://linkedin.com/in/davidpark",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", name: "All", count: testimonials.length },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      count: testimonials.filter((t) => t.category === "cybersecurity").length,
    },
    { id: "web3", name: "Web3", count: testimonials.filter((t) => t.category === "web3").length },
    { id: "development", name: "Development", count: testimonials.filter((t) => t.category === "development").length },
    { id: "mobile", name: "Mobile", count: testimonials.filter((t) => t.category === "mobile").length },
  ]

  const filteredTestimonials = testimonials.filter(
    (testimonial) => selectedCategory === "all" || testimonial.category === selectedCategory,
  )

  // Auto-slide testimonials
  useEffect(() => {
    if (autoSlide) {
      testimonialInterval.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
      }, 5000)
    }

    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current)
      }
    }
  }, [autoSlide, filteredTestimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const currentTestimonialData = filteredTestimonials[currentTestimonial] || filteredTestimonials[0]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Client Testimonials
            </h1>
            <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Hear from the clients and colleagues who have experienced the impact of secure, innovative solutions
              firsthand.
            </p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setCurrentTestimonial(0)
                  }}
                  className={
                    selectedCategory === category.id
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white"
                  }
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </motion.div>

            {/* Featured Testimonial Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700 p-8">
                      <CardContent className="text-center">
                        <Quote className="h-12 w-12 text-emerald-400 mx-auto mb-6 opacity-50" />

                        <div className="flex items-center justify-center mb-6">
                          {[...Array(currentTestimonialData?.rating || 5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <blockquote className="text-xl text-slate-300 mb-8 italic leading-relaxed max-w-4xl mx-auto">
                          "{currentTestimonialData?.content}"
                        </blockquote>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={currentTestimonialData?.image || "/placeholder.svg"}
                              alt={currentTestimonialData?.name || ""}
                              width={80}
                              height={80}
                              className="rounded-full border-2 border-emerald-400"
                            />
                            <div className="text-left">
                              <div className="font-semibold text-emerald-400 text-lg">
                                {currentTestimonialData?.name}
                              </div>
                              <div className="text-slate-400">{currentTestimonialData?.role}</div>
                              <div className="text-slate-500 text-sm">{currentTestimonialData?.company}</div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            {currentTestimonialData?.linkedin && (
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400">
                                <Linkedin className="h-4 w-4" />
                              </Button>
                            )}
                            {currentTestimonialData?.twitter && (
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400">
                                <Twitter className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-emerald-400">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <Badge variant="outline" className="border-emerald-500 text-emerald-400 mb-2">
                              {currentTestimonialData?.project}
                            </Badge>
                            <div className="text-sm text-slate-400">{currentTestimonialData?.date}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-300">
                              {currentTestimonialData?.companySize}
                            </div>
                            <div className="text-sm text-slate-400">{currentTestimonialData?.industry}</div>
                          </div>
                          <div className="text-sm text-slate-400">Category: {currentTestimonialData?.category}</div>
                        </div>

                        {/* Project Metrics */}
                        {currentTestimonialData?.metrics && (
                          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/50 rounded-lg">
                            {Object.entries(currentTestimonialData.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-emerald-400">{value}</div>
                                <div className="text-xs text-slate-400">{key}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      {filteredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentTestimonial ? "bg-emerald-500" : "bg-slate-600"
                          }`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setAutoSlide(!autoSlide)}
                      className="text-slate-400 hover:text-emerald-400"
                    >
                      {autoSlide ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* All Testimonials Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-emerald-400 text-center">All Testimonials</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card
                      className={`bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 cursor-pointer h-full ${
                        index === currentTestimonial ? "border-emerald-500 ring-1 ring-emerald-500/20" : ""
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          {testimonial.featured && (
                            <Badge className="bg-emerald-600 text-white text-xs">Featured</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-3">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <CardTitle className="text-emerald-400 text-sm">{testimonial.name}</CardTitle>
                            <CardDescription className="text-slate-400 text-xs">
                              {testimonial.role} at {testimonial.company}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="text-slate-300 mb-4 italic text-sm leading-relaxed line-clamp-4">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex justify-between items-center text-xs">
                          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                            {testimonial.project}
                          </Badge>
                          <span className="text-slate-500">{testimonial.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border-emerald-700/30">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Ready to Work Together?</h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Join the growing list of satisfied clients who have transformed their security posture and achieved
                    their technical goals with expert guidance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                      <Mail className="mr-2 h-4 w-4" />
                      Start Your Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent"
                    >
                      View Case Studies
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
