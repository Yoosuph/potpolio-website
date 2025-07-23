"use client"

import { motion } from "framer-motion"
import { Code, Shield, Globe, Smartphone } from "lucide-react"

export default function SkillsLoading() {
  const skillCategories = [
    { icon: Shield, name: "Cybersecurity" },
    { icon: Code, name: "Development" },
    { icon: Globe, name: "Web3" },
    { icon: Smartphone, name: "Mobile" },
  ]

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
          </div>

          {/* Tabs Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid grid-cols-4 gap-2 mb-8 bg-slate-800 p-1 rounded-lg">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700 rounded p-3 text-center animate-pulse"
                >
                  <category.icon className="h-5 w-5 mx-auto mb-1 text-slate-500" />
                  <div className="h-3 bg-slate-600 rounded w-16 mx-auto" />
                </motion.div>
              ))}
            </div>

            {/* Skills Grid Skeleton */}
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-slate-700 rounded mr-3 animate-pulse" />
                      <div className="h-5 bg-slate-700 rounded animate-pulse w-32" />
                    </div>
                    <div className="h-5 bg-slate-700 rounded animate-pulse w-12" />
                  </div>
                  <div className="h-3 bg-slate-800 rounded animate-pulse" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Section Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <div className="h-8 bg-slate-800 rounded animate-pulse mx-auto max-w-sm mb-8" />
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                  className="h-8 bg-slate-800 rounded-full animate-pulse"
                  style={{ width: `${Math.random() * 60 + 60}px` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Skill Categories Overview Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center animate-pulse">
                  <category.icon className="h-8 w-8 text-slate-500" />
                </div>
                <div className="h-5 bg-slate-800 rounded animate-pulse mb-3" />
                <div className="h-4 bg-slate-800 rounded animate-pulse w-4/5 mx-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
