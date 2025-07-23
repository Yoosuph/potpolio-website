"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Consigliere
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                Building secure, scalable solutions for the digital future. Trusted advisor for enterprise security and
                blockchain implementations. Let's create something amazing together.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-emerald-400 mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Security Consulting</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Web3 Development</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Full-Stack Development</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Security Audits</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Penetration Testing</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">DevSecOps</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-emerald-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-emerald-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-slate-400 mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Yusuf Lawan Nuhu. All rights reserved.</p>
              <p className="text-sm mt-1">Built with Next.js, TailwindCSS, Supabase, and passion for secure code.</p>
            </div>
            <div className="flex items-center space-x-4 text-slate-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">All systems operational</span>
              </div>
              <Button variant="ghost" size="sm" onClick={scrollToTop} className="text-slate-400 hover:text-emerald-400">
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to top
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
