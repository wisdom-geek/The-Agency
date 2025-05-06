"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="mx-20 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <span className="text-white">The</span>
            <span className="text-purple-500">Agency</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button asChild size="sm">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t"
          >
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-2 px-3 text-base rounded-md",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t  bg-purple-500">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={closeMenu} className="bg-purple-500">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
