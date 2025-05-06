"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { clients } from "@/lib/data"

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 bg-background border-y border-border">
      <div  ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-10"
        >
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-2">
            Trusted by innovative companies
          </motion.p>
          <motion.div variants={itemVariants} className="h-px w-24 bg-primary/50 mx-auto"></motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={itemVariants} className="flex justify-center">
              <div className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
