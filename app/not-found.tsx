"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "/"
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(16,185,129,0.5)",
                "0 0 40px rgba(16,185,129,0.8)",
                "0 0 20px rgba(16,185,129,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.div>
          <div className="flex items-center justify-center gap-2 text-emerald-400 mb-4">
            <AlertTriangle className="h-6 w-6" />
            <span className="text-xl font-semibold">ACCESS DENIED</span>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Page Not Found</h1>
          <p className="text-lg text-slate-400 mb-6 leading-relaxed">
            The requested resource could not be located on this server. This could be due to a mistyped URL, moved
            content, or restricted access.
          </p>

          {/* Security-themed message */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-6">
            <div className="text-emerald-400 font-mono text-sm">
              <div>
                {"> "}
                <span className="text-slate-300">Scanning for threats...</span>{" "}
                <span className="text-green-400">CLEAR</span>
              </div>
              <div>
                {"> "}
                <span className="text-slate-300">Checking permissions...</span>{" "}
                <span className="text-yellow-400">UNAUTHORIZED</span>
              </div>
              <div>
                {"> "}
                <span className="text-slate-300">Redirecting to safe zone...</span>{" "}
                <span className="text-blue-400">PENDING</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </motion.div>

        {/* Auto-redirect countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-slate-400"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Auto-redirecting to homepage in {countdown} seconds</span>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-xs mx-auto bg-slate-800 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <h3 className="text-lg font-semibold text-emerald-400 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Skills", href: "/skills" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
