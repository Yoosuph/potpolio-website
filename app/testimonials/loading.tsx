"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <motion.div
              className="h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg mb-6 mx-auto max-w-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="h-6 bg-slate-800 rounded animate-pulse mx-auto max-w-3xl" />
          </div>

          {/* Category Filter Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-8 bg-slate-800 rounded animate-pulse"
                style={{ width: `${Math.random() * 60 + 80}px` }}
              />
            ))}
          </motion.div>

          {/* Featured Testimonial Carousel Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700 rounded-lg p-8">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-emerald-400 mx-auto mb-6 opacity-50 animate-pulse" />

                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" />
                    ))}
                  </div>

                  <div className="space-y-3 mb-8 max-w-4xl mx-auto">
                    <div className="h-6 bg-slate-800 rounded animate-pulse" />
                    <div className="h-6 bg-slate-800 rounded animate-pulse w-5/6 mx-auto" />
                    <div className="h-6 bg-slate-800 rounded animate-pulse w-4/6 mx-auto" />
                    <div className="h-6 bg-slate-800 rounded animate-pulse w-3/6 mx-auto" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-slate-800 rounded-full animate-pulse" />
                      <div className="text-left">
                        <div className="h-5 bg-slate-800 rounded animate-pulse w-32 mb-2" />
                        <div className="h-4 bg-slate-800 rounded animate-pulse w-24 mb-1" />
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-28" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-slate-800 rounded animate-pulse" />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="h-6 bg-slate-800 rounded animate-pulse mb-2" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-16" />
                    </div>
                    <div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse mb-1" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-20" />
                    </div>
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-24" />
                  </div>

                  {/* Project Metrics Skeleton */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/50 rounded-lg">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="text-center">
                        <div className="h-6 bg-slate-700 rounded animate-pulse mb-2" />
                        <div className="h-3 bg-slate-700 rounded animate-pulse w-16 mx-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Controls Skeleton */}
              <div className="flex justify-between items-center mt-6">
                <div className="w-10 h-10 bg-slate-800 rounded border border-slate-700 animate-pulse">
                  <ChevronLeft className="h-4 w-4 text-slate-600 m-auto mt-3" />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-slate-600 rounded-full animate-pulse" />
                    ))}
                  </div>
                  <div className="w-8 h-8 bg-slate-800 rounded animate-pulse" />
                </div>

                <div className="w-10 h-10 bg-slate-800 rounded border border-slate-700 animate-pulse">
                  <ChevronRight className="h-4 w-4 text-slate-600 m-auto mt-3" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Testimonials Grid Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-8 bg-slate-800 rounded animate-pulse mx-auto max-w-sm mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 text-yellow-400 fill-current animate-pulse" />
                      ))}
                    </div>
                    <div className="h-5 bg-slate-800 rounded animate-pulse w-16" />
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-full animate-pulse" />
                    <div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-24 mb-1" />
                      <div className="h-3 bg-slate-800 rounded animate-pulse w-32" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-4/6" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="h-5 bg-slate-800 rounded animate-pulse w-20" />
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-700/30 rounded-lg p-8 text-center"
          >
            <div className="h-6 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mb-4" />
            <div className="space-y-2 max-w-2xl mx-auto mb-6">
              <div className="h-4 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-4/5 mx-auto" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-10 bg-slate-800 rounded animate-pulse w-40" />
              <div className="h-10 bg-slate-800 rounded animate-pulse w-36" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
