"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Calendar, MapPin, Users, TrendingUp, Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperiencePage() {
  const experience = [
    {
      title: "Senior Security Architect",
      company: "CyberTech Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      duration: "2+ years",
      type: "Full-time",
      description:
        "Leading enterprise security initiatives and architecting zero-trust frameworks for Fortune 500 clients. Responsible for designing and implementing comprehensive security strategies that protect critical infrastructure and sensitive data.",
      achievements: [
        "Reduced security incidents by 85% across client portfolio",
        "Led team of 12 security professionals and 3 junior architects",
        "Implemented AI-driven threat detection systems",
        "Saved clients $2M+ in potential breach costs through proactive measures",
        "Designed zero-trust architecture for 15+ enterprise clients",
        "Published 3 whitepapers on emerging security threats",
      ],
      technologies: ["Python", "AWS", "Kubernetes", "Terraform", "Splunk", "SIEM", "Zero Trust"],
      responsibilities: [
        "Design and implement enterprise security architectures",
        "Lead security assessments and penetration testing initiatives",
        "Mentor junior security professionals and conduct training sessions",
        "Collaborate with C-level executives on security strategy",
        "Oversee incident response and forensic investigations",
      ],
      companyInfo: {
        size: "500-1000 employees",
        industry: "Cybersecurity",
        website: "https://cybertech-solutions.com",
      },
    },
    {
      title: "Lead Full-Stack Developer",
      company: "Web3 Innovations Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      duration: "2 years",
      type: "Full-time",
      description:
        "Developed cutting-edge DeFi protocols and smart contract solutions with focus on security and scalability. Led the technical architecture for multiple blockchain projects handling millions in transaction volume.",
      achievements: [
        "Built protocols handling $50M+ Total Value Locked (TVL)",
        "Achieved 99.9% uptime across all deployed smart contracts",
        "Zero security breaches or exploits in production systems",
        "Led migration to Layer 2 solutions, reducing gas costs by 90%",
        "Mentored 8 junior developers in blockchain development",
        "Open-sourced 5 security-focused smart contract libraries",
      ],
      technologies: ["Solidity", "React", "Node.js", "PostgreSQL", "Web3.js", "Hardhat", "IPFS"],
      responsibilities: [
        "Architect and develop secure smart contracts for DeFi protocols",
        "Lead code reviews and security audits for all blockchain deployments",
        "Design and implement frontend applications for Web3 interactions",
        "Collaborate with security firms on external audits",
        "Optimize gas usage and transaction efficiency",
      ],
      companyInfo: {
        size: "50-100 employees",
        industry: "Blockchain/DeFi",
        website: "https://web3innovations.io",
      },
    },
    {
      title: "Cybersecurity Consultant",
      company: "SecureNet Consulting",
      location: "New York, NY",
      period: "2018 - 2020",
      duration: "2 years",
      type: "Full-time",
      description:
        "Provided comprehensive security consulting services to startups and mid-size companies across various industries. Specialized in vulnerability assessments, penetration testing, and security compliance frameworks.",
      achievements: [
        "Conducted 30+ comprehensive security audits",
        "Improved client security posture by average of 70%",
        "Published 5 research papers on emerging threats",
        "Trained 100+ developers in secure coding practices",
        "Achieved 100% client retention rate",
        "Helped 12 companies achieve SOC 2 compliance",
      ],
      technologies: ["Burp Suite", "Metasploit", "Wireshark", "OWASP", "Nessus", "Kali Linux", "Python"],
      responsibilities: [
        "Perform penetration testing and vulnerability assessments",
        "Develop custom security tools and automation scripts",
        "Create comprehensive security reports and remediation plans",
        "Conduct security awareness training for client teams",
        "Assist with regulatory compliance (SOC 2, HIPAA, PCI DSS)",
      ],
      companyInfo: {
        size: "20-50 employees",
        industry: "Security Consulting",
        website: "https://securenet-consulting.com",
      },
    },
    {
      title: "Senior Software Engineer",
      company: "TechFlow Systems",
      location: "Seattle, WA",
      period: "2016 - 2018",
      duration: "2 years",
      type: "Full-time",
      description:
        "Developed enterprise-grade software solutions with emphasis on security and performance. Led the development of critical systems handling high-volume transactions and sensitive data processing.",
      achievements: [
        "Architected microservices handling 1M+ daily transactions",
        "Reduced system response time by 60% through optimization",
        "Implemented comprehensive logging and monitoring systems",
        "Led adoption of DevOps practices and CI/CD pipelines",
        "Mentored 5 junior developers and conducted technical interviews",
        "Received 'Innovation Award' for developing automated testing framework",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Jenkins", "AWS"],
      responsibilities: [
        "Design and develop scalable backend systems",
        "Implement security best practices across all applications",
        "Optimize database performance and query efficiency",
        "Lead technical architecture discussions and decisions",
        "Collaborate with DevOps team on deployment strategies",
      ],
      companyInfo: {
        size: "200-500 employees",
        industry: "Enterprise Software",
        website: "https://techflow-systems.com",
      },
    },
    {
      title: "Software Developer",
      company: "StartupLab",
      location: "Boston, MA",
      period: "2014 - 2016",
      duration: "2 years",
      type: "Full-time",
      description:
        "Full-stack developer in a fast-paced startup environment, building MVP products and scaling applications. Gained extensive experience in rapid prototyping and agile development methodologies.",
      achievements: [
        "Built 3 successful MVP products from concept to launch",
        "Scaled applications to support 10K+ concurrent users",
        "Implemented real-time features using WebSocket technology",
        "Reduced deployment time from hours to minutes",
        "Contributed to $2M Series A funding through technical demos",
        "Established coding standards and best practices for the team",
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Socket.io", "Heroku", "Git"],
      responsibilities: [
        "Develop full-stack web applications from scratch",
        "Implement responsive UI/UX designs",
        "Build and maintain RESTful APIs",
        "Participate in product planning and feature discussions",
        "Conduct user testing and gather feedback for improvements",
      ],
      companyInfo: {
        size: "10-20 employees",
        industry: "Technology Startup",
        website: "https://startuplab.io",
      },
    },
  ]

  const skills = [
    "Security Architecture",
    "Penetration Testing",
    "Smart Contract Development",
    "Full-Stack Development",
    "DevOps & CI/CD",
    "Team Leadership",
    "Technical Mentoring",
    "Project Management",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

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
              Professional Journey
            </h1>
            <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Over 10 years of experience building secure, scalable solutions and leading high-performing teams across
              cybersecurity, blockchain, and enterprise software development.
            </p>

            {/* Career Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              <Card className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border-emerald-700/30 text-center">
                <CardContent className="pt-6">
                  <Calendar className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-emerald-400 mb-1">10+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-700/30 text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                  <div className="text-sm text-slate-400">Team Members Led</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-700/30 text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-400 mb-1">$50M+</div>
                  <div className="text-sm text-slate-400">Value Protected</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-700/30 text-center">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
                  <div className="text-sm text-slate-400">Certifications</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 hidden md:block"></div>

              {experience.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative flex items-start mb-12">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 z-10 hidden md:block"></div>

                  <div className="w-full md:ml-20">
                    <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-emerald-400 text-xl group-hover:text-emerald-300 transition-colors">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-slate-300 font-medium text-lg">
                              {exp.company}
                            </CardDescription>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-400">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {exp.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {exp.period}
                              </div>
                              <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                                {exp.duration}
                              </Badge>
                              <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-emerald-400 self-start"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-slate-300 flex items-start">
                                  <Star className="h-3 w-3 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Responsibilities:</h4>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((responsibility, i) => (
                                <li key={i} className="text-sm text-slate-300 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/30 rounded-lg">
                            <div className="text-center">
                              <div className="text-sm font-medium text-emerald-400">Company Size</div>
                              <div className="text-xs text-slate-400">{exp.companyInfo.size}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-medium text-emerald-400">Industry</div>
                              <div className="text-xs text-slate-400">{exp.companyInfo.industry}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-medium text-emerald-400">Type</div>
                              <div className="text-xs text-slate-400">{exp.type}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h2 className="text-3xl font-semibold mb-8 text-emerald-400">Core Competencies</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 cursor-pointer px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <Card className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border-emerald-700/30">
                <CardContent className="pt-8 text-center">
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Career Philosophy</h3>
                  <blockquote className="text-lg text-slate-300 italic leading-relaxed max-w-4xl mx-auto">
                    "Throughout my career, I've learned that the most impactful solutions come from understanding not
                    just the technology, but the people and processes behind it. Security isn't just about building
                    walls—it's about creating systems that empower teams to work safely and efficiently while protecting
                    what matters most."
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
