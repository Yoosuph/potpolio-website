"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  const certifications = [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2023", level: "Expert" },
    { name: "CISSP", issuer: "ISC²", year: "2022", level: "Professional" },
    { name: "AWS Solutions Architect", issuer: "Amazon", year: "2023", level: "Professional" },
    { name: "Certified Blockchain Security Professional", issuer: "Blockchain Council", year: "2023", level: "Expert" },
    { name: "OSCP", issuer: "Offensive Security", year: "2021", level: "Expert" },
    { name: "CISM", issuer: "ISACA", year: "2022", level: "Professional" },
  ]

  const highlights = [
    "Led security architecture for Fortune 500 companies",
    "Developed DeFi protocols handling $50M+ in transactions",
    "Published research on smart contract security patterns",
    "Certified Ethical Hacker (CEH) and CISSP holder",
    "Zero security breaches in 150+ projects delivered",
    "Trained 500+ developers in secure coding practices",
  ]

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
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Yusuf+Lawan+Nuhu"
                    alt="Yusuf Lawan Nuhu"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white">Available for projects</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-lg text-slate-300 leading-relaxed">
                  With over 10 years of experience in cybersecurity and full-stack development, I specialize in building
                  secure, scalable applications that push the boundaries of what's possible in the digital realm. My
                  expertise spans from enterprise security architecture to cutting-edge Web3 implementations.
                </p>

                <p className="text-lg text-slate-300 leading-relaxed">
                  My philosophy centers on security-first development, where every line of code is written with
                  potential threats in mind. I believe in the transformative power of Web3 technologies and their
                  ability to create more transparent, decentralized systems while maintaining the highest security
                  standards.
                </p>

                <p className="text-lg text-slate-300 leading-relaxed">
                  Beyond technical expertise, I'm passionate about mentoring the next generation of developers and
                  security professionals. I've trained over 500 developers in secure coding practices and regularly
                  speak at industry conferences about emerging threats and best practices.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-400">Career Highlights</h3>
                  <ul className="space-y-3 text-slate-300">
                    {highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-start group"
                      >
                        <CheckCircle className="text-emerald-400 mr-3 h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Certifications Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold text-emerald-400 text-center">Certifications & Credentials</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <Award className="h-5 w-5 text-emerald-400" />
                          <Badge variant="outline" className="border-emerald-500 text-emerald-400 text-xs">
                            {cert.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm font-medium text-emerald-400">{cert.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xs text-slate-400">
                          {cert.issuer} • {cert.year}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border-emerald-700/30">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-4">My Philosophy</h3>
                  <blockquote className="text-lg text-slate-300 italic leading-relaxed max-w-3xl mx-auto">
                    "Security is not a product, but a process. It's not something you buy, but something you do. In the
                    rapidly evolving digital landscape, staying ahead of threats requires continuous learning,
                    adaptation, and a deep understanding of both technology and human behavior."
                  </blockquote>
                  <div className="mt-6 text-emerald-400 font-semibold">- Yusuf Lawan Nuhu</div>
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
