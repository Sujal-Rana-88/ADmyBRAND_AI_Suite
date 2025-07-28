"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, ArrowRight, Heart, Coffee, Zap } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, unlimited PTO, and remote-first culture",
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description: "Learning budget, conference attendance, and career development programs",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Work with talented, passionate people who care about making an impact",
  },
]

const openings = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description:
      "Join our frontend team to build beautiful, performant user interfaces using React, TypeScript, and modern web technologies.",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description:
      "Drive product strategy and execution for our core platform, working closely with engineering and design teams.",
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description:
      "Design intuitive, delightful experiences for our users while maintaining our design system and brand consistency.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems to ensure reliability and scalability.",
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description:
      "Help our customers achieve success with ADmyBRAND AI Suite by providing guidance, support, and strategic advice.",
  },
]

export default function Careers() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Join Our Mission
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Help us revolutionize how teams collaborate and manage projects. We're looking for passionate
                individuals who want to make a real impact.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <GlassCard className="p-8">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Why work with us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can do their best work and grow their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-index={index}
                className={`transition-all duration-700 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="p-6 h-full hover:scale-105 transition-transform duration-300 group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Open positions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and help us build the future of project management.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={job.id}
                data-index={index + 4}
                className={`transition-all duration-700 ${visibleItems.includes(index + 4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <GlassCard className="p-6 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">{job.description}</p>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see a role that fits?</p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80"
            >
              Send us your resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
