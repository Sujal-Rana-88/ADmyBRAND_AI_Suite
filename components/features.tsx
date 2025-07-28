"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Users, BarChart3, Shield, Smartphone, Clock, MessageSquare, Target } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and real-time synchronization.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamlessly collaborate with your team members in real-time with advanced sharing and communication tools.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your projects with comprehensive analytics and customizable reporting dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, SSO integration, and compliance with industry standards.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your projects anywhere with our native mobile apps and responsive web interface.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking with automated timesheets, billing integration, and productivity insights.",
  },
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    description: "Stay informed with intelligent notifications that adapt to your workflow and preferences.",
  },
  {
    icon: Target,
    title: "Goal Management",
    description: "Set, track, and achieve your goals with our advanced goal management and milestone tracking system.",
  },
]

export function Features() {
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
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/60 backdrop-blur-sm border border-blue-200/20 text-sm font-medium text-blue-700 mb-4">
            ✨ Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Everything you need to succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools designed to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <GlassCard className="p-6 h-full hover:scale-105 transition-transform duration-300 group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
