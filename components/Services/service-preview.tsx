"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Palette, LinkIcon, Lightbulb } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServicePreviewProps {
  icon: "Code" | "Palette" | "Link" | "Lightbulb"
  title: string
  description: string
  href: string
}

export default function ServicePreview({ icon, title, description, href }: ServicePreviewProps) {
  const icons = {
    Code: <Code className="h-6 w-6" />,
    Palette: <Palette className="h-6 w-6" />,
    Link: <LinkIcon className="h-6 w-6" />,
    Lightbulb: <Lightbulb className="h-6 w-6" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            {icons[icon]}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Link href={href} className="text-primary flex items-center text-sm font-medium hover:underline">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
