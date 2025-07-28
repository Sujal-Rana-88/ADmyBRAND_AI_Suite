"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Project Management Best Practices for Remote Teams",
    excerpt:
      "Discover proven strategies to keep your distributed team aligned and productive, no matter where they're located.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Best Practices",
  },
  {
    id: 2,
    title: "The Future of AI in Project Management",
    excerpt:
      "Explore how artificial intelligence is revolutionizing project management and what it means for your team.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    id: 3,
    title: "Building High-Performance Teams: A Complete Guide",
    excerpt:
      "Learn the essential elements that transform good teams into exceptional ones that consistently deliver results.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Team Building",
  },
  {
    id: 4,
    title: "Agile vs Waterfall: Choosing the Right Methodology",
    excerpt:
      "A comprehensive comparison of project management methodologies to help you choose what works best for your team.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Methodology",
  },
  {
    id: 5,
    title: "Maximizing Productivity with Time Blocking",
    excerpt: "Master the art of time blocking to boost your team's focus and accomplish more in less time.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Sarah Johnson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Productivity",
  },
  {
    id: 6,
    title: "Data-Driven Decision Making in Project Management",
    excerpt: "Learn how to leverage analytics and metrics to make better project decisions and improve outcomes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Michael Chen",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Analytics",
  },
]

const categories = ["All", "Best Practices", "Technology", "Team Building", "Methodology", "Productivity", "Analytics"]

export default function Blog() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

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
  }, [filteredPosts])

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
                ADmyBRAND AI Suite Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and best practices for modern project management and team collaboration.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                data-index={index}
                className={`transition-all duration-700 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="overflow-hidden hover:scale-105 transition-transform duration-300 group">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </GlassCard>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
