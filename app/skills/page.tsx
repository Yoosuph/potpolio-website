"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Code,
  Smartphone,
  Globe,
  Database,
  Server,
  Lock,
  Zap,
  Brain,
  Search,
  Settings,
  TrendingUp,
  Award,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    cybersecurity: [
      { name: "Penetration Testing", icon: Shield, level: 95 },
      { name: "Security Auditing", icon: Lock, level: 90 },
      { name: "Threat Analysis", icon: Brain, level: 88 },
      { name: "Incident Response", icon: Zap, level: 92 },
      { name: "Vulnerability Assessment", icon: Search, level: 89 },
      { name: "Security Architecture", icon: Server, level: 93 },
    ],
    development: [
      { name: "Full-Stack Development", icon: Code, level: 94 },
      { name: "System Architecture", icon: Server, level: 91 },
      { name: "Database Design", icon: Database, level: 89 },
      { name: "API Development", icon: Globe, level: 93 },
      { name: "DevOps & CI/CD", icon: Settings, level: 87 },
      { name: "Cloud Computing", icon: Globe, level: 90 },
    ],
    web3: [
      { name: "Smart Contracts", icon: Code, level: 87 },
      { name: "DeFi Protocols", icon: Globe, level: 85 },
      { name: "Blockchain Security", icon: Shield, level: 90 },
      { name: "Web3 Integration", icon: Zap, level: 88 },
      { name: "NFT Development", icon: Award, level: 84 },
      { name: "DAO Architecture", icon: Settings, level: 82 },
    ],
    mobile: [
      { name: "React Native", icon: Smartphone, level: 86 },
      { name: "iOS Development", icon: Smartphone, level: 82 },
      { name: "Android Development", icon: Smartphone, level: 84 },
      { name: "Cross-Platform", icon: Globe, level: 89 },
      { name: "Mobile Security", icon: Shield, level: 91 },
      { name: "App Store Optimization", icon: TrendingUp, level: 78 },
    ],
  }

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Solidity",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Web3.js",
    "Ethers.js",
    "Hardhat",
    "React Native",
    "TailwindCSS",
    "GraphQL",
    "Redis",
    "Elasticsearch",
    "Apache Kafka",
    "TensorFlow",
    "FastAPI",
    "Rust",
    "Go",
    "Jenkins",
    "GitLab CI",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Splunk",
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
              Technical Expertise
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tabs defaultValue="cybersecurity" className="mb-16">
                <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800">
                  <TabsTrigger value="cybersecurity" className="data-[state=active]:bg-emerald-600">
                    Cybersecurity
                  </TabsTrigger>
                  <TabsTrigger value="development" className="data-[state=active]:bg-emerald-600">
                    Development
                  </TabsTrigger>
                  <TabsTrigger value="web3" className="data-[state=active]:bg-emerald-600">
                    Web3
                  </TabsTrigger>
                  <TabsTrigger value="mobile" className="data-[state=active]:bg-emerald-600">
                    Mobile
                  </TabsTrigger>
                </TabsList>

                {Object.entries(skills).map(([category, skillList]) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {skillList.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                  <skill.icon className="mr-3 h-6 w-6 text-emerald-400" />
                                  <span className="font-medium text-white">{skill.name}</span>
                                </div>
                                <span className="text-emerald-400 font-bold">{skill.level}%</span>
                              </div>
                              <Progress value={isVisible ? skill.level : 0} className="h-3 bg-slate-800" />
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-8 text-emerald-400">Technologies & Tools</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skill Categories Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  title: "Cybersecurity",
                  icon: Shield,
                  description: "Enterprise security, penetration testing, and threat analysis",
                  color: "from-red-500 to-orange-500",
                },
                {
                  title: "Development",
                  icon: Code,
                  description: "Full-stack development, system architecture, and cloud computing",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Web3",
                  icon: Globe,
                  description: "Smart contracts, DeFi protocols, and blockchain security",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Mobile",
                  icon: Smartphone,
                  description: "Cross-platform development and mobile security",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                      >
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-emerald-400">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm text-center">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
