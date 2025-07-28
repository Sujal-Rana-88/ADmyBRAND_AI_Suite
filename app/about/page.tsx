"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Users, Target, Award, Heart } from "lucide-react"

const stats = [
  { label: "Active Users", value: "50,000+", icon: Users },
  { label: "Projects Completed", value: "1M+", icon: Target },
  { label: "Awards Won", value: "25+", icon: Award },
  { label: "Customer Satisfaction", value: "99%", icon: Heart },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Former VP of Product at TechCorp with 15+ years in SaaS",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Ex-Google engineer passionate about building scalable systems",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Award-winning designer with expertise in user experience",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Full-stack engineer with a passion for clean, efficient code",
  },
]

export default function About() {
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
                About ADmyBRAND AI Suite
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform how teams collaborate and manage projects. Founded in 2020, ADmyBRAND AI Suite has
              grown from a simple idea to a platform trusted by thousands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              data-index="0"
              className={`transition-all duration-1000 ${visibleItems.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <GlassCard className="p-8">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </GlassCard>
            </div>

            <div
              data-index="1"
              className={`space-y-6 transition-all duration-1000 delay-300 ${visibleItems.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                ADmyBRAND AI Suite was born out of frustration with existing project management tools that were either too complex
                or too simple. Our founders, Sarah and Michael, experienced firsthand the challenges of coordinating
                distributed teams while working at Fortune 500 companies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                They envisioned a platform that would combine the power of enterprise-grade features with the simplicity
                of consumer apps. Today, ADmyBRAND AI Suite serves over 50,000 users across 100+ countries, helping teams achieve
                their goals faster and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-index={index + 2}
                className={`transition-all duration-700 ${visibleItems.includes(index + 2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Meet our team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse group of passionate individuals united by our mission to revolutionize project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                data-index={index + 6}
                className={`transition-all duration-700 ${visibleItems.includes(index + 6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/50 shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
