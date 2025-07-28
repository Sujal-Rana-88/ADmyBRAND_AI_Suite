import Link from "next/link"
import { Github, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* Newsletter Section */}
        <div className="py-12 md:py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="p-6 md:p-8 lg:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay updated with ADmyBRAND AI Suite</h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                Get the latest updates, tips, and insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <button className="px-4 md:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="md:col-span-2 lg:col-span-2">
                <Link
                  href="/"
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 block"
                >
                  ADmyBRAND AI Suite
                </Link>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
                  Transform your team's productivity with intelligent project management. Collaborate seamlessly, track
                  progress effortlessly, and deliver results faster than ever.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <span className="text-sm md:text-base break-all">hello@ADmyBRAND.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <span className="text-sm md:text-base">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <span className="text-sm md:text-base leading-relaxed">
                      123 Innovation Drive, India, CA 94105
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3 md:space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 group"
                  >
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 hover:bg-blue-700 rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>

              {/* Product Links */}
              <div className="mt-8 md:mt-0">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Product</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <Link
                      href="#features"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      API
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Mobile Apps
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="mt-8 md:mt-0">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Company</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/press"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Fully Responsive */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left order-2 md:order-1">
                <p className="text-xs md:text-sm text-gray-600">
                  © {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved. Made with ❤️ in India.
                </p>
              </div>

              {/* Legal Links - Always Horizontal */}
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6 order-1 md:order-2">
                <Link
                  href="#"
                  className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <Link
                  href="#"
                  className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium hover:underline"
                >
                  Terms of Service
                </Link>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <Link
                  href="#"
                  className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium hover:underline"
                >
                  Cookie Policy
                </Link>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <Link
                  href="#"
                  className="text-xs md:text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium hover:underline"
                >
                  GDPR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
