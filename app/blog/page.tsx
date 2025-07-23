"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Search, Eye, Heart, MessageCircle, Share2, Calendar, Clock, Tag, TrendingUp, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTag, setSelectedTag] = useState("all")
  const [blogViews, setBlogViews] = useState({})

  const { toast } = useToast()

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Smart Contract Security Patterns",
      slug: "advanced-smart-contract-security-patterns",
      excerpt:
        "Exploring cutting-edge security patterns for DeFi protocols and how to implement them effectively in production environments. Learn about reentrancy guards, access controls, and upgrade mechanisms.",
      content:
        "Smart contract security is paramount in the DeFi ecosystem. This comprehensive guide covers advanced security patterns including reentrancy guards, access controls, and upgrade mechanisms...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web3 Security",
      tags: ["Solidity", "DeFi", "Security", "Smart Contracts", "Blockchain"],
      image: "/placeholder.svg?height=300&width=500&text=Smart+Contracts",
      views: "2.5K",
      likes: 156,
      comments: 23,
      featured: true,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 8,
      difficulty: "Advanced",
    },
    {
      id: 2,
      title: "Zero-Trust Architecture in Modern Applications",
      slug: "zero-trust-architecture-modern-applications",
      excerpt:
        "Building secure, scalable applications with zero-trust principles and practical implementation strategies for enterprise environments. A comprehensive guide to modern security architecture.",
      content:
        "Zero-trust architecture represents a fundamental shift in cybersecurity thinking. This article explores practical implementation strategies for modern applications...",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Cybersecurity",
      tags: ["Zero-Trust", "Security", "Architecture", "Enterprise", "DevSecOps"],
      image: "/placeholder.svg?height=300&width=500&text=Zero+Trust",
      views: "3.2K",
      likes: 203,
      comments: 31,
      featured: true,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 12,
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "The Future of Web3 Development",
      slug: "future-of-web3-development",
      excerpt:
        "Trends, challenges, and opportunities in the evolving Web3 ecosystem from a developer's perspective, including emerging technologies and best practices for building decentralized applications.",
      content:
        "Web3 development is rapidly evolving with new tools, frameworks, and paradigms emerging regularly. This article examines the current state and future directions...",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Web3",
      tags: ["Web3", "Blockchain", "Development", "Future", "dApps"],
      image: "/placeholder.svg?height=300&width=500&text=Web3+Future",
      views: "1.8K",
      likes: 89,
      comments: 15,
      featured: false,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 6,
      difficulty: "Beginner",
    },
    {
      id: 4,
      title: "AI-Driven Cybersecurity: The Next Frontier",
      slug: "ai-driven-cybersecurity-next-frontier",
      excerpt:
        "How artificial intelligence is revolutionizing cybersecurity with predictive threat detection and automated response systems. Exploring machine learning applications in security.",
      content:
        "Artificial intelligence is transforming cybersecurity by enabling predictive threat detection and automated incident response...",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "AI Security",
      tags: ["AI", "Machine Learning", "Cybersecurity", "Automation", "Threat Detection"],
      image: "/placeholder.svg?height=300&width=500&text=AI+Security",
      views: "4.1K",
      likes: 267,
      comments: 42,
      featured: false,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 10,
      difficulty: "Advanced",
    },
    {
      id: 5,
      title: "Building Secure APIs: Best Practices Guide",
      slug: "building-secure-apis-best-practices",
      excerpt:
        "Comprehensive guide to API security covering authentication, authorization, rate limiting, and common vulnerabilities. Essential reading for backend developers.",
      content:
        "API security is crucial in modern application development. This guide covers authentication, authorization, rate limiting, and common vulnerabilities...",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Development",
      tags: ["API", "Security", "Backend", "Authentication", "Best Practices"],
      image: "/placeholder.svg?height=300&width=500&text=API+Security",
      views: "2.9K",
      likes: 178,
      comments: 28,
      featured: false,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 9,
      difficulty: "Intermediate",
    },
    {
      id: 6,
      title: "Mobile App Security: Protecting User Data",
      slug: "mobile-app-security-protecting-user-data",
      excerpt:
        "Essential security measures for mobile applications including data encryption, secure storage, and protection against common mobile threats and vulnerabilities.",
      content:
        "Mobile app security requires special consideration for device-specific threats and user privacy. This article covers essential security measures...",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Mobile Security",
      tags: ["Mobile", "Security", "Privacy", "Encryption", "iOS", "Android"],
      image: "/placeholder.svg?height=300&width=500&text=Mobile+Security",
      views: "2.1K",
      likes: 134,
      comments: 19,
      featured: false,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 7,
      difficulty: "Intermediate",
    },
    {
      id: 7,
      title: "DevSecOps: Integrating Security into CI/CD",
      slug: "devsecops-integrating-security-cicd",
      excerpt:
        "How to seamlessly integrate security practices into your development pipeline. Learn about automated security testing, vulnerability scanning, and secure deployment strategies.",
      content:
        "DevSecOps represents the integration of security practices into the DevOps pipeline. This article explores automated security testing and secure deployment...",
      date: "2023-12-10",
      readTime: "11 min read",
      category: "DevSecOps",
      tags: ["DevSecOps", "CI/CD", "Security", "Automation", "Pipeline"],
      image: "/placeholder.svg?height=300&width=500&text=DevSecOps",
      views: "3.5K",
      likes: 221,
      comments: 35,
      featured: false,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 11,
      difficulty: "Advanced",
    },
    {
      id: 8,
      title: "Blockchain Scalability Solutions Compared",
      slug: "blockchain-scalability-solutions-compared",
      excerpt:
        "Comprehensive comparison of Layer 2 solutions, sidechains, and other scalability approaches. Understanding the trade-offs between security, decentralization, and scalability.",
      content:
        "Blockchain scalability remains a key challenge. This article compares various solutions including Layer 2, sidechains, and sharding approaches...",
      date: "2023-12-05",
      readTime: "13 min read",
      category: "Blockchain",
      tags: ["Blockchain", "Scalability", "Layer 2", "Ethereum", "Performance"],
      image: "/placeholder.svg?height=300&width=500&text=Blockchain+Scale",
      views: "1.9K",
      likes: 98,
      comments: 16,
      featured: false,
      author: {
        name: "Yusuf Lawan Nuhu",
        avatar: "/placeholder.svg?height=40&width=40&text=YLN",
      },
      estimatedReadTime: 13,
      difficulty: "Advanced",
    },
  ]

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    {
      id: "Web3 Security",
      name: "Web3 Security",
      count: blogPosts.filter((p) => p.category === "Web3 Security").length,
    },
    {
      id: "Cybersecurity",
      name: "Cybersecurity",
      count: blogPosts.filter((p) => p.category === "Cybersecurity").length,
    },
    { id: "Development", name: "Development", count: blogPosts.filter((p) => p.category === "Development").length },
    { id: "AI Security", name: "AI Security", count: blogPosts.filter((p) => p.category === "AI Security").length },
  ]

  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]
  const popularTags = allTags.slice(0, 10)

  const handleBlogView = (blogId) => {
    setBlogViews((prev) => ({
      ...prev,
      [blogId]: (prev[blogId] || 0) + 1,
    }))
  }

  const handleShare = async (title, slug) => {
    const url = `${window.location.origin}/blog/${slug}`
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (error) {
        navigator.clipboard.writeText(url)
        toast({
          title: "Link Copied!",
          description: "Blog post link has been copied to clipboard",
        })
      }
    } else {
      navigator.clipboard.writeText(url)
      toast({
        title: "Link Copied!",
        description: "Blog post link has been copied to clipboard",
      })
    }
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag)

    return matchesSearch && matchesCategory && matchesTag
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Latest Articles & Insights
            </h1>
            <p className="text-xl text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Deep dives into cybersecurity, Web3 development, and emerging technologies. Practical insights from
              real-world experience building secure, scalable systems.
            </p>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={
                        selectedCategory === category.id
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white"
                      }
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <Tag className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">Popular Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedTag === "all" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTag("all")}
                    className={
                      selectedTag === "all"
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "text-slate-400 hover:text-emerald-400"
                    }
                  >
                    All
                  </Button>
                  {popularTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedTag(tag)}
                      className={
                        selectedTag === tag
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "text-slate-400 hover:text-emerald-400"
                      }
                    >
                      #{tag}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Featured Articles */}
            {featuredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-semibold mb-8 text-emerald-400 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Featured Articles
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-500 cursor-pointer h-full">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                            onClick={() => handleBlogView(post.id)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          <Badge className="absolute top-4 right-4 bg-emerald-600 text-white">Featured</Badge>
                          <Badge
                            variant="outline"
                            className="absolute top-4 left-4 border-white/50 text-white bg-black/50"
                          >
                            {post.difficulty}
                          </Badge>
                        </div>

                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                              {post.readTime}
                            </Badge>
                            <div className="flex items-center space-x-4 text-slate-400 text-sm">
                              <div className="flex items-center">
                                <Eye className="h-3 w-3 mr-1" />
                                {blogViews[post.id] || post.views}
                              </div>
                              <div className="flex items-center">
                                <Heart className="h-3 w-3 mr-1" />
                                {post.likes}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="h-3 w-3 mr-1" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-emerald-400 hover:text-emerald-300 transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-slate-300">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Image
                                src={post.author.avatar || "/placeholder.svg"}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <div>
                                <div className="text-sm font-medium text-slate-300">{post.author.name}</div>
                                <div className="flex items-center text-xs text-slate-400">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {post.date}
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleShare(post.title, post.slug)
                              }}
                              className="text-slate-400 hover:text-emerald-400"
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 4).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors text-xs cursor-pointer"
                                onClick={() => setSelectedTag(tag)}
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                            {post.category}
                          </Badge>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* All Articles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-emerald-400 flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                All Articles ({filteredPosts.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 cursor-pointer h-full">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                          onClick={() => handleBlogView(post.id)}
                        />
                        <Badge
                          variant="outline"
                          className="absolute top-2 right-2 border-white/50 text-white bg-black/50 text-xs"
                        >
                          {post.difficulty}
                        </Badge>
                        <Badge className="absolute top-2 left-2 bg-emerald-600 text-white text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline" className="border-emerald-500 text-emerald-400 text-xs">
                            {post.readTime}
                          </Badge>
                          <div className="flex items-center text-slate-400 text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            {blogViews[post.id] || post.views}
                          </div>
                        </div>
                        <CardTitle className="text-emerald-400 hover:text-emerald-300 transition-colors text-lg">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-sm line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <div className="text-xs text-slate-400">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {post.date}
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 text-slate-400 text-xs">
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              {post.likes}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleShare(post.title, post.slug)
                              }}
                              className="text-slate-400 hover:text-emerald-400 p-0"
                            >
                              <Share2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors text-xs cursor-pointer"
                              onClick={() => setSelectedTag(tag)}
                            >
                              #{tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="secondary" className="bg-slate-800 text-slate-400 text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-xs text-slate-400">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.estimatedReadTime} min read
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-emerald-400 hover:text-emerald-300 p-0 text-xs"
                            >
                              Read More →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">No articles found</h3>
                <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedTag("all")
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16"
            >
              <Card className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border-emerald-700/30">
                <CardContent className="pt-8 text-center">
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Stay Updated</h3>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Get the latest insights on cybersecurity, Web3 development, and emerging technologies delivered
                    directly to your inbox. Join 25,000+ professionals who trust our content.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500"
                    />
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">Subscribe</Button>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    No spam, unsubscribe at any time. Read our{" "}
                    <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300">
                      privacy policy
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <BookOpen className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{blogPosts.length}+</div>
                  <div className="text-sm text-slate-400">Articles Published</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <Eye className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-400 mb-1">50K+</div>
                  <div className="text-sm text-slate-400">Monthly Readers</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <Heart className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-red-400 mb-1">2K+</div>
                  <div className="text-sm text-slate-400">Article Likes</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <MessageCircle className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                  <div className="text-sm text-slate-400">Comments</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}
