"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Calendar } from "lucide-react"

const pressReleases = [
  {
    id: 1,
    title: "ADmyBRAND AI Suite Raises $25M Series B to Revolutionize Project Management",
    date: "2024-01-20",
    excerpt:
      "Leading project management platform secures funding to accelerate AI-powered features and global expansion.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "ADmyBRAND AI Suite Surpasses 50,000 Active Users Milestone",
    date: "2024-01-15",
    excerpt: "Company celebrates rapid growth and announces new enterprise features for large organizations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "ADmyBRAND AI Suite Wins 'Best Project Management Tool' at SaaS Awards 2024",
    date: "2024-01-10",
    excerpt: "Recognition for innovation in user experience and AI-powered project insights.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
]

const mediaKit = [
  {
    name: "Company Logo Pack",
    description: "High-resolution logos in various formats",
    type: "ZIP",
    size: "2.4 MB",
  },
  {
    name: "Product Screenshots",
    description: "Latest product interface screenshots",
    type: "ZIP",
    size: "8.1 MB",
  },
  {
    name: "Executive Photos",
    description: "Professional headshots of leadership team",
    type: "ZIP",
    size: "5.2 MB",
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand identity guidelines",
    type: "PDF",
    size: "1.8 MB",
  },
]

const coverage = [
  {
    outlet: "TechCrunch",
    title: "ADmyBRAND AI Suite's AI-Powered Approach to Project Management",
    date: "2024-01-18",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    outlet: "Forbes",
    title: "The Future of Remote Work: How ADmyBRAND AI Suite is Leading the Way",
    date: "2024-01-12",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    outlet: "VentureBeat",
    title: "ADmyBRAND AI Suite Raises $25M to Expand AI Project Management Platform",
    date: "2024-01-08",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
]

export default function Press() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll("[data-index]")
    elements.forEach((el) => observerRef.current?.observe(el))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Press & Media
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Latest news, press releases, and media resources about ADmyBRAND AI Suite and our mission to transform project
              management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Media Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80"
            >
              Contact Press Team
            </Button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Latest Press Releases
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <div
                key={release.id}
                data-index={index}
                className={`transition-all duration-700 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <div className="grid lg:grid-cols-3 gap-6 p-6">
                    <div className="lg:col-span-1">
                      <Image
                        src={release.image || "/placeholder.svg"}
                        alt={release.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                    <div className="lg:col-span-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(release.date).toLocaleDateString()}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{release.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{release.excerpt}</p>
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          Read Full Release
                        </Button>
                        <Button variant="outline" className="bg-white/60 backdrop-blur-sm border-gray-300">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Media Coverage
              </span>
            </h2>
            <p className="text-xl text-gray-600">See what leading publications are saying about ADmyBRAND AI Suite</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverage.map((article, index) => (
              <div
                key={index}
                data-index={index + 3}
                className={`transition-all duration-700 ${visibleItems.includes(index + 3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="p-6 hover:scale-105 transition-transform duration-300 group">
                  <div className="flex items-center mb-4">
                    <Image
                      src={article.logo || "/placeholder.svg"}
                      alt={article.outlet}
                      width={40}
                      height={40}
                      className="rounded-lg mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{article.outlet}</div>
                      <div className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <Button variant="outline" size="sm" className="bg-white/60 backdrop-blur-sm border-gray-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Media Kit
              </span>
            </h2>
            <p className="text-xl text-gray-600">Download our media assets and brand resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <div
                key={index}
                data-index={index + 6}
                className={`transition-all duration-700 ${visibleItems.includes(index + 6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="p-6 hover:scale-105 transition-transform duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Download
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
