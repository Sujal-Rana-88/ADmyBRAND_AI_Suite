"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              ADmyBRAND AI Suite
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              <Link
                href="#features"
                className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
              <Link href="/about" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#contact"
                className="text-sm xl:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link href="/signin">
              <Button variant="ghost" size="sm" className="text-sm text-gray-700 hover:text-blue-600 px-3 lg:px-4">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg text-sm px-3 lg:px-4 whitespace-nowrap"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="#pricing" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/careers" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
              Careers
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
              <Link href="/signin" className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600">
                Sign In
              </Link>
              <Link href="/signup" className="block mx-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
