"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Lightbulb,
  Palette,
  Code,
  PresentationIcon as PresentationChart,
  Upload,
  ArrowRight,
} from "lucide-react"
import { useInView } from "framer-motion"

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const steps = [
    {
      title: "Discovery",
      icon: <Search className="h-6 w-6" />,
      description:
        "We begin by understanding your business, goals, and requirements through stakeholder interviews and research.",
    },
    {
      title: "Strategy & Planning",
      icon: <Lightbulb className="h-6 w-6" />,
      description:
        "We develop a comprehensive strategy and project plan, including technical architecture and feature prioritization.",
    },
    {
      title: "Design & Prototyping",
      icon: <Palette className="h-6 w-6" />,
      description:
        "Our design process creates intuitive, engaging experiences, from wireframes to interactive prototypes.",
    },
    {
      title: "Development",
      icon: <Code className="h-6 w-6" />,
      description:
        "We build your solution using agile methodologies, with a focus on code quality, performance, and security.",
    },
    {
      title: "Pitching",
      icon: <PresentationChart className="h-6 w-6" />,
      description:
        "For startups, we help refine your value proposition and create compelling presentations for investors.",
    },
    {
      title: "Deployment & Maintenance",
      icon: <Upload className="h-6 w-6" />,
      description:
        "We ensure a smooth transition to production and provide ongoing support to keep your solution running optimally.",
    },
  ]

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-border"></div>

        {/* Steps */}
        <div className="relative space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="flex items-center">
                {/* Step number and icon */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
                    activeStep === index ? "bg-primary text-primary-foreground" : "bg-muted"
                  } transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.icon}
                </motion.div>

                {/* Step content */}
                <div className="ml-8">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-lg">{step.description}</p>
                </div>
              </div>

              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 transform -translate-x-1/2 mt-8">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
