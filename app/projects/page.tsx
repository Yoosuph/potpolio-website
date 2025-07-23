"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Search, Github, ExternalLink, Heart, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [projectLikes, setProjectLikes] = useState({})
  const [projectViews, setProjectViews] = useState({})

  const { toast } = useToast()

  const projects = [
    {
      id: 1,
      title: "SecureVault DeFi Protocol",
      description:
        "A decentralized finance protocol with advanced security features and automated threat detection. Built with Solidity smart contracts and React frontend.",
      longDescription:
        "SecureVault is a revolutionary DeFi protocol that combines cutting-edge security measures with user-friendly interfaces. The protocol features automated yield farming, liquidity mining, and advanced risk management systems.",
      techStack: ["Solidity", "React", "Web3.js", "Node.js", "PostgreSQL", "Docker"],
      image: "/placeholder.svg?height=300&width=500&text=DeFi+Protocol",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      category: "web3",
      metrics: { users: "10K+", tvl: "$50M+", uptime: "99.9%" },
      status: "Live",
      year: "2023",
    },
    {
      id: 2,
      title: "CyberShield Security Platform",
      description:
        "Enterprise-grade cybersecurity platform with real-time threat monitoring, automated incident response, and comprehensive security analytics.",
      longDescription:
        "CyberShield provides comprehensive security monitoring and incident response capabilities for enterprise environments. Features include AI-powered threat detection, automated response workflows, and detailed security analytics.",
      techStack: ["Python", "React", "Docker", "Kubernetes", "MongoDB", "Redis"],
      image: "/placeholder.svg?height=300&width=500&text=Security+Platform",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true,
      category: "cybersecurity",
      metrics: { threats: "1M+", response: "< 30s", accuracy: "98%" },
      status: "Live",
      year: "2023",
    },
    {
      id: 3,
      title: "DevOps Automation Suite",
      description:
        "Complete CI/CD pipeline automation with infrastructure as code, monitoring, and deployment orchestration across multiple cloud providers.",
      longDescription:
        "A comprehensive DevOps platform that automates the entire software delivery lifecycle. Includes infrastructure provisioning, automated testing, deployment pipelines, and monitoring dashboards.",
      techStack: ["TypeScript", "AWS", "Terraform", "Docker", "Jenkins", "Grafana"],
      image: "/placeholder.svg?height=300&width=500&text=DevOps+Suite",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      category: "development",
      metrics: { deployments: "500+", downtime: "< 0.1%", efficiency: "+300%" },
      status: "Live",
      year: "2022",
    },
    {
      id: 4,
      title: "Mobile Security Scanner",
      description:
        "Advanced mobile application security scanner with real-time vulnerability detection and automated penetration testing capabilities.",
      longDescription:
        "A comprehensive mobile security testing platform that automatically scans mobile applications for vulnerabilities, performs static and dynamic analysis, and provides detailed security reports.",
      techStack: ["React Native", "Python", "TensorFlow", "AWS", "Redis", "FastAPI"],
      image: "/placeholder.svg?height=300&width=500&text=Mobile+Scanner",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      category: "mobile",
      metrics: { scans: "50K+", vulnerabilities: "10K+", accuracy: "96%" },
      status: "Beta",
      year: "2023",
    },
    {
      id: 5,
      title: "AI-Powered Threat Intelligence",
      description:
        "Machine learning platform for threat intelligence gathering and analysis with predictive capabilities for emerging security threats.",
      longDescription:
        "An advanced AI system that collects, analyzes, and correlates threat intelligence from multiple sources to predict and prevent cyber attacks before they occur.",
      techStack: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "React", "FastAPI"],
      image: "/placeholder.svg?height=300&width=500&text=AI+Threat+Intel",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      category: "cybersecurity",
      metrics: { threats: "500K+", accuracy: "94%", "false-positives": "< 2%" },
      status: "Development",
      year: "2024",
    },
    {
      id: 6,
      title: "Blockchain Identity Management",
      description:
        "Decentralized identity management system using blockchain technology for secure, privacy-preserving digital identity verification.",
      longDescription:
        "A revolutionary identity management system that gives users complete control over their digital identity while ensuring privacy and security through blockchain technology.",
      techStack: ["Solidity", "IPFS", "React", "Web3.js", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500&text=Blockchain+Identity",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false,
      category: "web3",
      metrics: { users: "5K+", "identity-verifications": "25K+", uptime: "99.8%" },
      status: "Live",
      year: "2023",
    },
  ]

  const handleProjectLike = (projectId) => {
    setProjectLikes((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }))

    toast({
      title: "Liked!",
      description: "Thanks for liking this project!",
    })
  }

  const handleProjectView = (projectId) => {
    setProjectViews((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }))
  }

  const handleShare = async (title, url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (error) {
        navigator.clipboard.writeText(url)
        toast({
          title: "Link Copied!",
          description: "Link has been copied to clipboard",
        })
      }
    } else {
      navigator.clipboard.writeText(url)
      toast({
        title: "Link Copied!",
        description: "Link has been copied to clipboard",
      })
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                  />
                </div>

                <div className="flex gap-2">
                  {["all", "cybersecurity", "web3", "development", "mobile"].map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white"
                      }
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Featured Projects */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {filteredProjects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-500">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                          onClick={() => handleProjectView(project.id)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <Badge className="absolute top-4 right-4 bg-emerald-600 text-white">Featured</Badge>
                        <Badge
                          variant="outline"
                          className="absolute top-4 left-4 border-white/50 text-white bg-black/50"
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-emerald-400">{project.title}</CardTitle>
                            <CardDescription className="text-slate-300">{project.description}</CardDescription>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleProjectLike(project.id)}
                              className="text-slate-400 hover:text-red-400"
                            >
                              <Heart className="h-4 w-4" />
                              <span className="ml-1 text-xs">{projectLikes[project.id] || 0}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleShare(project.title, window.location.href)}
                              className="text-slate-400 hover:text-emerald-400"
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/50 rounded-lg">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-emerald-400">{value}</div>
                                <div className="text-xs text-slate-400 capitalize">{key.replace("-", " ")}</div>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent flex-1"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent flex-1"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
                                <DialogHeader>
                                  <DialogTitle className="text-emerald-400">{project.title}</DialogTitle>
                                  <DialogDescription className="text-slate-300">
                                    {project.longDescription}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={600}
                                    height={300}
                                    className="w-full rounded-lg"
                                  />
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-semibold text-emerald-400 mb-2">Technologies</h4>
                                      <div className="flex flex-wrap gap-1">
                                        {project.techStack.map((tech) => (
                                          <Badge key={tech} variant="secondary" className="text-xs">
                                            {tech}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-emerald-400 mb-2">Year</h4>
                                      <p className="text-slate-300">{project.year}</p>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <Badge
                          variant="outline"
                          className="absolute top-2 right-2 border-white/50 text-white bg-black/50 text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-emerald-400 text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-slate-300 text-sm">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.techStack.length > 4 && (
                              <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                                +{project.techStack.length - 4}
                              </Badge>
                            )}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent text-xs px-3 py-1"
                              >
                                <Github className="mr-1 h-3 w-3" />
                                Code
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent text-xs px-3 py-1"
                              >
                                <ExternalLink className="mr-1 h-3 w-3" />
                                Demo
                              </Button>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleProjectLike(project.id)}
                                className="text-slate-400 hover:text-red-400 p-1"
                              >
                                <Heart className="h-3 w-3" />
                                <span className="ml-1 text-xs">{projectLikes[project.id] || 0}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-300 p-1">
                                <Eye className="h-3 w-3" />
                                <span className="ml-1 text-xs">{projectViews[project.id] || 0}</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">No projects found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}
