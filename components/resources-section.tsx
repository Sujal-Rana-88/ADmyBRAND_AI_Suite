"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GlassCard } from "@/components/glass-card"
import { Calendar, Clock, ArrowRight, User, BookOpen, Video, FileText, Headphones } from "lucide-react"

const resourceTypes = [
  { id: "all", label: "All Resources", icon: BookOpen },
  { id: "articles", label: "Articles", icon: FileText },
  { id: "videos", label: "Videos", icon: Video },
  { id: "podcasts", label: "Podcasts", icon: Headphones },
]

const resources = [
  {
    id: 1,
    type: "articles",
    title: "The Complete Guide to Remote Project Management",
    excerpt: "Learn proven strategies and best practices for managing distributed teams effectively in 2024.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Sarah Johnson",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "Best Practices",
    featured: true,
  },
  {
    id: 2,
    type: "videos",
    title: "ADmyBRAND AI Suite Product Demo: Advanced Features Walkthrough",
    excerpt: "Discover advanced features that can transform your team's productivity and project outcomes.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Michael Chen",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "2024-01-18",
    readTime: "15 min watch",
    category: "Product Demo",
  },
  {
    id: 3,
    type: "articles",
    title: "AI-Powered Project Insights: The Future is Here",
    excerpt: "Explore how artificial intelligence is revolutionizing project management and decision-making.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Emily Rodriguez",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    id: 4,
    type: "podcasts",
    title: "Building High-Performance Teams with ADmyBRAND AI Suite",
    excerpt: "Listen to industry experts discuss team dynamics and productivity optimization strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "David Kim",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "2024-01-12",
    readTime: "45 min listen",
    category: "Team Building",
  },
  {
    id: 5,
    type: "articles",
    title: "Agile vs Waterfall: Choosing the Right Methodology",
    excerpt: "A comprehensive comparison to help you choose the best project management approach for your team.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Sarah Johnson",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Methodology",
  },
  {
    id: 6,
    type: "videos",
    title: "Data-Driven Decision Making Workshop",
    excerpt: "Learn how to leverage analytics and metrics to make better project decisions and improve outcomes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Michael Chen",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    date: "2024-01-08",
    readTime: "25 min watch",
    category: "Analytics",
  },
]

export function ResourcesSection() {
  const [selectedType, setSelectedType] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const filteredResources =
    selectedType === "all" ? resources : resources.filter((resource) => resource.type === selectedType)

  const featuredResource = resources.find((r) => r.featured)
  const otherResources = filteredResources.filter((r) => !r.featured)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-200/20 text-sm font-medium text-slate-700 mb-4">
            📚 Resources & Learning
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-slate-900 bg-clip-text text-transparent">
              Learn, grow, and succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert insights, best practices, and actionable strategies to maximize your team's potential.
          </p>
        </motion.div>

        {/* Resource Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {resourceTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedType === type.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <type.icon className="w-4 h-4 mr-2" />
              {type.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Resource */}
        {featuredResource && selectedType === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <GlassCard className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={featuredResource.image || "/placeholder.svg"}
                    alt={featuredResource.title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-64 lg:h-full object-cover"
                  />
                </motion.div>

                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4 w-fit">
                    ⭐ Featured Resource
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredResource.title}</h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredResource.excerpt}</p>

                  <div className="flex items-center mb-6">
                    <Image
                      src={featuredResource.authorImage || "/placeholder.svg"}
                      alt={featuredResource.author}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{featuredResource.author}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredResource.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        {featuredResource.readTime}
                      </div>
                    </div>
                  </div>

                  <Link href={`/resources/${featuredResource.id}`}>
                    <motion.button
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherResources.map((resource, index) => (
            <motion.article
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(resource.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Link href={`/resources/${resource.id}`}>
                <GlassCard className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                  <motion.div
                    animate={{ scale: hoveredCard === resource.id ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    {resource.type === "videos" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Video className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{resource.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(resource.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{resource.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{resource.excerpt}</p>

                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span className="mr-2">
                        {resource.type === "videos"
                          ? "Watch now"
                          : resource.type === "podcasts"
                            ? "Listen now"
                            : "Read more"}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 text-gray-700 font-medium rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Resources
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
