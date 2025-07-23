"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Mail, Phone, MapPin, Clock, Send, Loader2, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import type { ContactMessage } from "@/lib/supabase"

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Insert contact message into Supabase
      const contactMessage: Omit<ContactMessage, "id" | "created_at"> = {
        first_name: contactForm.firstName,
        last_name: contactForm.lastName,
        email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
        status: "new",
      }

      const { data, error } = await supabase.from("contact_messages").insert([contactMessage]).select()

      if (error) {
        throw error
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      })

      // Reset form
      setContactForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </h1>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Ready to Start Your Project?</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Whether you're looking to enhance your security posture, build cutting-edge Web3 applications, or need
                  expert consultation on complex technical challenges, I'm here to help bring your vision to life. Let's
                  discuss how we can work together to achieve your goals.
                </p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center text-slate-300 group"
                  >
                    <div className="bg-emerald-600/20 p-3 rounded-lg mr-4 group-hover:bg-emerald-600/30 transition-colors">
                      <Mail className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-slate-400">yusuf.nuhu@example.com</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center text-slate-300 group"
                  >
                    <div className="bg-emerald-600/20 p-3 rounded-lg mr-4 group-hover:bg-emerald-600/30 transition-colors">
                      <Phone className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-slate-400">+1 (555) 123-4567</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center text-slate-300 group"
                  >
                    <div className="bg-emerald-600/20 p-3 rounded-lg mr-4 group-hover:bg-emerald-600/30 transition-colors">
                      <MapPin className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-slate-400">Available Worldwide (Remote)</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center text-slate-300 group"
                  >
                    <div className="bg-emerald-600/20 p-3 rounded-lg mr-4 group-hover:bg-emerald-600/30 transition-colors">
                      <Clock className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-slate-400">Within 24 hours</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex space-x-4 mt-8"
                  >
                    {[
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                    ].map((social, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white bg-transparent"
                          title={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="bg-slate-900/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-emerald-400">Send a Message</CardTitle>
                    <CardDescription className="text-slate-400">
                      Fill out the form below and I'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={contactForm.firstName}
                            onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={contactForm.lastName}
                            onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-colors"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          placeholder="Project Discussion"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 transition-colors resize-none"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-105 transition-all duration-300"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}
