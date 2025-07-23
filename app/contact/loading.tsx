"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactLoading() {
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Skeleton */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="h-6 bg-slate-800 rounded animate-pulse mb-6 max-w-xs" />
              <div className="space-y-2 mb-8">
                <div className="h-4 bg-slate-800 rounded animate-pulse" />
                <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-slate-800 rounded animate-pulse w-4/6" />
              </div>

              <div className="space-y-6">
                {[{ icon: Mail }, { icon: Phone }, { icon: MapPin }, { icon: Clock }].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="bg-emerald-600/20 p-3 rounded-lg mr-4 animate-pulse">
                      <item.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-16 mb-1" />
                      <div className="h-3 bg-slate-800 rounded animate-pulse w-32" />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex space-x-4 mt-8"
                >
                  {[Github, Linkedin, Twitter].map((Icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 bg-slate-800 border border-emerald-600 rounded animate-pulse flex items-center justify-center"
                    >
                      <Icon className="h-5 w-5 text-slate-600" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form Skeleton */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <div className="mb-6">
                  <div className="h-6 bg-slate-800 rounded animate-pulse w-32 mb-2" />
                  <div className="h-4 bg-slate-800 rounded animate-pulse w-4/5" />
                </div>

                <div className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-20 mb-2" />
                      <div className="h-10 bg-slate-800 rounded animate-pulse" />
                    </div>
                    <div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse w-20 mb-2" />
                      <div className="h-10 bg-slate-800 rounded animate-pulse" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-24 mb-2" />
                    <div className="h-10 bg-slate-800 rounded animate-pulse" />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-16 mb-2" />
                    <div className="h-10 bg-slate-800 rounded animate-pulse" />
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-16 mb-2" />
                    <div className="h-32 bg-slate-800 rounded animate-pulse" />
                  </div>

                  {/* Submit Button */}
                  <div className="h-12 bg-slate-800 rounded animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
