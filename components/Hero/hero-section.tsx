"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import the 3D scene with no SSR to avoid React Three Fiber issues
const HeroScene = dynamic(() => import("@/components/Hero/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading 3D Experience...</div>
    </div>
  ),
})

export default function HeroSection() {
  // Only render the 3D scene on the client side
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Scene as background - only render on client side */}
      <div className="absolute inset-0 z-0">{isMounted && <HeroScene />}</div>

      {/* Content overlay */}
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500">
            Empowering Ideas, Engineering Innovation
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
            A full-service technology company building the future through software, design, blockchain, and strategic
            pitching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/services#pitching">Pitch an Idea</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
