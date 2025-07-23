"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle } from "lucide-react"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-16">
            <motion.div
              className="h-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg mb-6 mx-auto max-w-md"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Skeleton */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg animate-pulse" />
            </motion.div>

            {/* Content Skeleton */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-4/5" />
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-3/5" />
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-emerald-400 mb-3">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <div className="h-5 bg-slate-800 rounded animate-pulse w-32" />
                </div>
                <div className="space-y-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="text-emerald-400 mr-3 h-5 w-5 mt-0.5 animate-pulse" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse flex-1" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications Grid Skeleton */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="h-8 bg-slate-800 rounded animate-pulse mx-auto max-w-sm mb-6" />
            </div>
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
                    <Award className="h-5 w-5 text-emerald-400 animate-pulse" />
                    <div className="h-5 bg-slate-800 rounded animate-pulse w-16" />
                  </div>
                  <div className="h-5 bg-slate-800 rounded animate-pulse mb-3" />
                  <div className="h-4 bg-slate-800 rounded animate-pulse w-24" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy Card Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-700/30 rounded-lg p-8 text-center"
          >
            <div className="h-6 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mb-4" />
            <div className="space-y-2 max-w-3xl mx-auto">
              <div className="h-4 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-4/5 mx-auto" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-3/5 mx-auto" />
            </div>
            <div className="h-5 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mt-6" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
