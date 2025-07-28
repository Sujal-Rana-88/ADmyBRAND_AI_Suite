"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "ADmyBRAND AI Suite has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The best project management tool we've ever used. The real-time collaboration features are game-changing for our distributed team.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Studio",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "ADmyBRAND AI Suite's visual project tracking and timeline features have made it so much easier to manage complex creative projects and meet deadlines.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    company: "Global Inc",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The analytics and reporting features give us incredible insights into our team's performance. It's helped us optimize our workflows significantly.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100/60 backdrop-blur-sm border border-pink-200/20 text-sm font-medium text-pink-700 mb-4">
            💬 Customer Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-pink-900 bg-clip-text text-transparent">
              Loved by teams worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
