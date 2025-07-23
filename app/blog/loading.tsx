"use client"

import { motion } from "framer-motion"
import { Search, Eye, Heart, MessageCircle, Calendar, Clock, Tag, TrendingUp, BookOpen } from "lucide-react"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <motion.div
              className="h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg mb-6 mx-auto max-w-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="h-6 bg-slate-800 rounded animate-pulse mx-auto max-w-3xl" />
          </div>

          {/* Search and Filters Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <div className="h-10 bg-slate-800 rounded pl-10 animate-pulse" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 bg-slate-800 rounded animate-pulse"
                    style={{ width: `${Math.random() * 60 + 80}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mt-6">
              <div className="flex items-center gap-4 mb-3">
                <Tag className="h-4 w-4 text-emerald-400" />
                <div className="h-4 bg-slate-800 rounded animate-pulse w-24" />
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 bg-slate-800 rounded animate-pulse w-12" />
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 bg-slate-800 rounded animate-pulse"
                    style={{ width: `${Math.random() * 40 + 60}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Articles Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8 text-emerald-400 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2" />
              <div className="h-6 bg-slate-800 rounded animate-pulse w-40" />
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-slate-800 animate-pulse" />
                    <div className="absolute top-4 right-4 h-6 bg-emerald-600 rounded w-16" />
                    <div className="absolute top-4 left-4 h-6 bg-slate-700 rounded w-20" />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-6 bg-slate-800 rounded animate-pulse w-20" />
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1 text-slate-500" />
                          <div className="h-3 bg-slate-800 rounded animate-pulse w-8" />
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1 text-slate-500" />
                          <div className="h-3 bg-slate-800 rounded animate-pulse w-6" />
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1 text-slate-500" />
                          <div className="h-3 bg-slate-800 rounded animate-pulse w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="h-6 bg-slate-800 rounded animate-pulse mb-3" />
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-slate-800 rounded animate-pulse" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-4/6" />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-slate-800 rounded-full animate-pulse" />
                        <div>
                          <div className="h-4 bg-slate-800 rounded animate-pulse w-24 mb-1" />
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1 text-slate-500" />
                            <div className="h-3 bg-slate-800 rounded animate-pulse w-16" />
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-slate-800 rounded animate-pulse" />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="h-6 bg-slate-800 rounded animate-pulse"
                          style={{ width: `${Math.random() * 40 + 50}px` }}
                        />
                      ))}
                    </div>

                    <div className="h-6 bg-slate-800 rounded animate-pulse w-24" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Articles Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-emerald-400 flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              <div className="h-6 bg-slate-800 rounded animate-pulse w-32" />
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="w-full h-32 bg-slate-800 animate-pulse" />
                    <div className="absolute top-2 right-2 h-5 bg-slate-700 rounded w-16" />
                    <div className="absolute top-2 left-2 h-5 bg-emerald-600 rounded w-20" />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="h-5 bg-slate-800 rounded animate-pulse w-16" />
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1 text-slate-500" />
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-8" />
                      </div>
                    </div>

                    <div className="h-5 bg-slate-800 rounded animate-pulse mb-2" />
                    <div className="space-y-1 mb-4">
                      <div className="h-3 bg-slate-800 rounded animate-pulse" />
                      <div className="h-3 bg-slate-800 rounded animate-pulse w-4/5" />
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-slate-800 rounded-full animate-pulse" />
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1 text-slate-500" />
                          <div className="h-3 bg-slate-800 rounded animate-pulse w-16" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1 text-slate-500" />
                          <div className="h-3 bg-slate-800 rounded animate-pulse w-6" />
                        </div>
                        <div className="w-3 h-3 bg-slate-800 rounded animate-pulse" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {[...Array(3)].map((_, j) => (
                        <div
                          key={j}
                          className="h-5 bg-slate-800 rounded animate-pulse"
                          style={{ width: `${Math.random() * 30 + 40}px` }}
                        />
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-slate-500" />
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-16" />
                      </div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Subscription Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-700/30 rounded-lg p-8 text-center"
          >
            <div className="h-6 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mb-4" />
            <div className="space-y-2 max-w-2xl mx-auto mb-6">
              <div className="h-4 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-4/5 mx-auto" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="h-10 bg-slate-800 rounded animate-pulse flex-1" />
              <div className="h-10 bg-slate-800 rounded animate-pulse w-24" />
            </div>
            <div className="h-3 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mt-3" />
          </motion.div>

          {/* Blog Stats Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: BookOpen, color: "text-emerald-400" },
              { icon: Eye, color: "text-blue-400" },
              { icon: Heart, color: "text-red-400" },
              { icon: MessageCircle, color: "text-purple-400" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center"
              >
                {item.icon({ className: `h-8 w-8 ${item.color} mx-auto mb-3 animate-pulse` })}
                <div className="h-8 bg-slate-800 rounded animate-pulse mb-1" />
                <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4 mx-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
