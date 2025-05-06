"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already seen the modal
      const hasSeenModal = localStorage.getItem("hasSeenNewsletterModal")
      if (!hasSeenModal) {
        setIsOpen(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Set flag in localStorage
    localStorage.setItem("hasSeenNewsletterModal", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setSubmitted(true)
      setTimeout(() => {
        handleClose()
        // Reset for next time
        setSubmitted(false)
        setEmail("")
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md"
          >
            <div className="relative rounded-lg border bg-card shadow-lg overflow-hidden">
              <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10" onClick={handleClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>

              <div className="p-6">
                {!submitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                    <p className="text-muted-foreground mb-4">
                      Subscribe to our newsletter for the latest insights on technology, design, and innovation.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button type="submit" className="w-full">
                        Subscribe
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-4">
                      By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-primary text-4xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">You&apos;ve been successfully subscribed to our newsletter.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

