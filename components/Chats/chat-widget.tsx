"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ text: "Hi there! How can we help you today?", isUser: false }])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput("")

      // Simulate response after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thanks for your message! One of our team members will get back to you shortly.",
            isUser: false,
          },
        ])
      }, 1000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-lg border-primary/10">
              <CardHeader className="bg-primary text-primary-foreground py-3 px-4 flex flex-row justify-between items-center rounded-t-lg">
                <div className="font-medium">Chat with The Agency</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSend}>
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="sr-only">Chat with us</span>
      </motion.button>
    </>
  )
}
