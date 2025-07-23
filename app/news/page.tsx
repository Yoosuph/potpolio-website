"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  RefreshCw,
  ExternalLink,
  Clock,
  TrendingUp,
  Users,
  MessageSquare,
  GitBranch,
  Shield,
  Code,
  Brain,
  Globe,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface NewsItem {
  id: string
  title: string
  url: string
  score?: number
  comments?: number
  author?: string
  time: string
  source: string
  category: string
  description?: string
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [error, setError] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All News", icon: Globe },
    { id: "programming", label: "Programming", icon: Code },
    { id: "security", label: "Security", icon: Shield },
    { id: "ai", label: "AI/ML", icon: Brain },
    { id: "webdev", label: "Web Dev", icon: GitBranch },
  ]

  const fetchNews = async () => {
    setLoading(true)
    setError(null)

    try {
      const newsItems: NewsItem[] = []

      // Fetch from Hacker News
      try {
        const topStoriesRes = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        const topStories = await topStoriesRes.json()

        const storyPromises = topStories.slice(0, 10).map(async (id: number) => {
          const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          return storyRes.json()
        })

        const stories = await Promise.all(storyPromises)

        stories.forEach((story) => {
          if (story && story.title && story.url) {
            newsItems.push({
              id: `hn-${story.id}`,
              title: story.title,
              url: story.url,
              score: story.score,
              comments: story.descendants || 0,
              author: story.by,
              time: new Date(story.time * 1000).toLocaleString(),
              source: "Hacker News",
              category: categorizeNews(story.title),
              description: story.title,
            })
          }
        })
      } catch (error) {
        console.error("Error fetching Hacker News:", error)
      }

      // Fetch from Dev.to
      try {
        const devToRes = await fetch("https://dev.to/api/articles?top=7")
        const devToArticles = await devToRes.json()

        devToArticles.forEach((article: any) => {
          newsItems.push({
            id: `dev-${article.id}`,
            title: article.title,
            url: article.url,
            score: article.positive_reactions_count,
            comments: article.comments_count,
            author: article.user.name,
            time: new Date(article.published_at).toLocaleString(),
            source: "Dev.to",
            category: categorizeNews(article.title),
            description: article.description || article.title,
          })
        })
      } catch (error) {
        console.error("Error fetching Dev.to:", error)
      }

      // Add fallback content if no news fetched
      if (newsItems.length === 0) {
        newsItems.push(
          {
            id: "fallback-1",
            title: "Latest Cybersecurity Trends in 2024",
            url: "#",
            score: 150,
            comments: 45,
            author: "Security Expert",
            time: new Date().toLocaleString(),
            source: "Tech News",
            category: "security",
            description: "Exploring the latest cybersecurity trends and threats in 2024",
          },
          {
            id: "fallback-2",
            title: "Full-Stack Development Best Practices",
            url: "#",
            score: 120,
            comments: 32,
            author: "Dev Community",
            time: new Date().toLocaleString(),
            source: "Dev News",
            category: "programming",
            description: "Best practices for modern full-stack development",
          },
          {
            id: "fallback-3",
            title: "AI and Machine Learning in Web Development",
            url: "#",
            score: 200,
            comments: 67,
            author: "AI Researcher",
            time: new Date().toLocaleString(),
            source: "AI News",
            category: "ai",
            description: "How AI is transforming web development workflows",
          },
        )
      }

      setNews(newsItems)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Error fetching news:", error)
      setError("Failed to fetch news. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const categorizeNews = (title: string): string => {
    const titleLower = title.toLowerCase()
    if (titleLower.includes("security") || titleLower.includes("hack") || titleLower.includes("vulnerability")) {
      return "security"
    }
    if (titleLower.includes("ai") || titleLower.includes("machine learning") || titleLower.includes("ml")) {
      return "ai"
    }
    if (titleLower.includes("web") || titleLower.includes("frontend") || titleLower.includes("backend")) {
      return "webdev"
    }
    if (titleLower.includes("programming") || titleLower.includes("code") || titleLower.includes("development")) {
      return "programming"
    }
    return "programming"
  }

  const filteredNews = activeCategory === "all" ? news : news.filter((item) => item.category === activeCategory)

  const stats = {
    total: news.length,
    sources: [...new Set(news.map((item) => item.source))].length,
    categories: [...new Set(news.map((item) => item.category))].length,
    avgScore: Math.round(news.reduce((acc, item) => acc + (item.score || 0), 0) / news.length) || 0,
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Tech News Hub
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Stay updated with the latest in cybersecurity, development, AI, and tech trends
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button onClick={fetchNews} disabled={loading} className="bg-emerald-600 hover:bg-emerald-700">
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              {loading ? "Refreshing..." : "Refresh News"}
            </Button>

            {lastUpdated && (
              <div className="flex items-center text-slate-400 text-sm">
                <Clock className="mr-2 h-4 w-4" />
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{stats.total}</div>
              <div className="text-sm text-slate-400">Total Articles</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{stats.sources}</div>
              <div className="text-sm text-slate-400">News Sources</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{stats.categories}</div>
              <div className="text-sm text-slate-400">Categories</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{stats.avgScore}</div>
              <div className="text-sm text-slate-400">Avg Score</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-5 bg-slate-900/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-emerald-600"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-8 flex items-center"
          >
            <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
            <span className="text-red-300">{error}</span>
          </motion.div>
        )}

        {/* News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loading
            ? // Loading skeletons
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-slate-700 rounded mb-2"></div>
                    <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-slate-700 rounded mb-2"></div>
                    <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))
            : filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900/50 border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                          {item.source}
                        </Badge>
                        <Badge variant="secondary" className="bg-slate-800">
                          {categories.find((c) => c.id === item.category)?.label || "Tech"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-emerald-400 transition-colors">
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2"
                        >
                          {item.title}
                          <ExternalLink className="h-4 w-4 flex-shrink-0 mt-1" />
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-4">
                          {item.score && (
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              {item.score}
                            </div>
                          )}
                          {item.comments && (
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {item.comments}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {item.author}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-2">{item.time}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </motion.div>

        {/* No results */}
        {!loading && filteredNews.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
            <div className="text-slate-400 mb-4">No news found for this category</div>
            <Button onClick={fetchNews} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Refreshing
            </Button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}
