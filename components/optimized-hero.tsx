"use client"

import { useEffect, useState, useCallback, memo } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useTransform, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Star } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

const AnimatedCounter = memo(({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value)
      return
    }

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [value, duration, shouldReduceMotion])

  return <span>{count.toLocaleString()}</span>
})

AnimatedCounter.displayName = "AnimatedCounter"

export const OptimizedHero = memo(() => {
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // Optimized parallax effect
  const y = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handlePlayDemo = useCallback(() => {
    // Optimized demo play handler
    console.log("Playing demo...")
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Optimized easing
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Optimized background with CSS transforms */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100" />
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        style={{
          willChange: "transform",
          animation: shouldReduceMotion ? "none" : "pulse 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        style={{
          willChange: "transform",
          animation: shouldReduceMotion ? "none" : "pulse 4s ease-in-out infinite 1s",
        }}
      />

      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" style={{ y, opacity }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 text-xs md:text-sm font-medium text-blue-700">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 fill-current" />
                Trusted by <AnimatedCounter value={50000} />+ teams worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Streamline Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Workflow
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your team's productivity with ADmyBRAND AI Suite's intelligent project management platform. Collaborate
                seamlessly, track progress effortlessly, and deliver results faster than ever.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base px-6 md:px-8"
                style={{ willChange: "transform" }}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handlePlayDemo}
                className="border-2 border-gray-300 hover:border-blue-500 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 text-sm md:text-base px-6 md:px-8"
                style={{ willChange: "transform" }}
              >
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6 md:gap-8 pt-6 md:pt-8"
            >
              {[
                { value: 50, suffix: "K+", label: "Active Users" },
                { value: 99.9, suffix: "%", label: "Uptime" },
                { value: 4.9, suffix: "★", label: "User Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            <GlassCard className="p-4 md:p-8">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="ADmyBRAND AI Suite Dashboard"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl w-full h-auto"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </GlassCard>

            {/* Optimized floating elements */}
            <div
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-white/20"
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"
                  style={{
                    animation: shouldReduceMotion ? "none" : "pulse 2s ease-in-out infinite",
                  }}
                />
                <span className="text-xs md:text-sm font-medium text-gray-700">Live Updates</span>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-white/20">
              <div className="text-xs md:text-sm font-medium text-gray-700">+127% Productivity</div>
              <div className="text-xs text-gray-500">vs traditional tools</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
})

OptimizedHero.displayName = "OptimizedHero"
