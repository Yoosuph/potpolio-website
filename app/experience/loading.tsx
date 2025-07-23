"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Award, Star, MapPin } from "lucide-react"

export default function ExperienceLoading() {
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

          {/* Career Summary Cards Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Calendar, color: "from-emerald-500 to-cyan-500" },
              { icon: Users, color: "from-blue-500 to-cyan-500" },
              { icon: TrendingUp, color: "from-purple-500 to-pink-500" },
              { icon: Award, color: "from-orange-500 to-red-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center"
              >
                <item.icon className="h-8 w-8 mx-auto mb-3 text-slate-500 animate-pulse" />
                <div className="h-8 bg-slate-800 rounded animate-pulse mb-2" />
                <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4 mx-auto" />
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline Skeleton */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 hidden md:block opacity-30" />

            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 z-10 hidden md:block animate-pulse" />

                <div className="w-full md:ml-20">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div className="flex-1">
                        <div className="h-6 bg-slate-800 rounded animate-pulse mb-2" />
                        <div className="h-5 bg-slate-800 rounded animate-pulse w-3/4 mb-3" />
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-slate-500" />
                            <div className="h-4 bg-slate-800 rounded animate-pulse w-24" />
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-slate-500" />
                            <div className="h-4 bg-slate-800 rounded animate-pulse w-20" />
                          </div>
                          <div className="h-6 bg-slate-800 rounded-full animate-pulse w-16" />
                          <div className="h-6 bg-slate-800 rounded-full animate-pulse w-20" />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-slate-800 rounded animate-pulse" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6" />
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-4/6" />
                    </div>

                    {/* Achievements and Responsibilities */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="h-4 bg-slate-800 rounded animate-pulse w-32 mb-3" />
                        <div className="space-y-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-start">
                              <Star className="h-3 w-3 text-emerald-400 mr-2 mt-1 flex-shrink-0 animate-pulse" />
                              <div className="h-3 bg-slate-800 rounded animate-pulse flex-1" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="h-4 bg-slate-800 rounded animate-pulse w-36 mb-3" />
                        <div className="space-y-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-2 flex-shrink-0 animate-pulse" />
                              <div className="h-3 bg-slate-800 rounded animate-pulse flex-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-32 mb-2" />
                      <div className="flex flex-wrap gap-2">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="h-6 bg-slate-800 rounded animate-pulse"
                            style={{ width: `${Math.random() * 40 + 60}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/30 rounded-lg">
                      <div className="text-center">
                        <div className="h-4 bg-slate-700 rounded animate-pulse mb-1" />
                        <div className="h-3 bg-slate-700 rounded animate-pulse w-3/4 mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="h-4 bg-slate-700 rounded animate-pulse mb-1" />
                        <div className="h-3 bg-slate-700 rounded animate-pulse w-2/3 mx-auto" />
                      </div>
                      <div className="text-center">
                        <div className="h-4 bg-slate-700 rounded animate-pulse mb-1" />
                        <div className="h-3 bg-slate-700 rounded animate-pulse w-1/2 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Skills Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="h-8 bg-slate-800 rounded animate-pulse mx-auto max-w-sm mb-8" />
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                  className="h-10 bg-slate-800 rounded-full animate-pulse px-4 py-2"
                  style={{ width: `${Math.random() * 80 + 100}px` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Philosophy Card Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-700/30 rounded-lg p-8 text-center"
          >
            <div className="h-6 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mb-4" />
            <div className="space-y-2 max-w-4xl mx-auto">
              <div className="h-4 bg-slate-800 rounded animate-pulse" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6 mx-auto" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-4/6 mx-auto" />
              <div className="h-4 bg-slate-800 rounded animate-pulse w-3/6 mx-auto" />
            </div>
            <div className="h-5 bg-slate-800 rounded animate-pulse mx-auto max-w-xs mt-6" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
