"use client"

import { useState, memo, useCallback, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { Play, Pause, Volume2, Maximize, RotateCcw } from "lucide-react"

const DashboardPreview = memo(({ isPlaying }: { isPlaying: boolean }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 p-8 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          <div className="text-white font-semibold">ADmyBRAND AI Suite Dashboard</div>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            animate={isPlaying && !shouldReduceMotion ? { scale: [1, 1.05, 1] } : {}}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
              ease: "easeInOut",
            }}
            style={{ willChange: isPlaying ? "transform" : "auto" }}
          >
            <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
            <div className="w-3/4 h-2 bg-white/20 rounded"></div>
          </motion.div>
        ))}
      </div>

      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <div className="grid grid-cols-4 gap-2 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-white/20 rounded"
              animate={isPlaying && !shouldReduceMotion ? { opacity: [0.2, 0.8, 0.2] } : {}}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                ease: "easeInOut",
              }}
              style={{ willChange: isPlaying ? "opacity" : "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

DashboardPreview.displayName = "DashboardPreview"

const VideoControls = memo(
  ({
    isPlaying,
    currentTime,
    totalDuration,
    onTogglePlay,
    onReset,
  }: {
    isPlaying: boolean
    currentTime: number
    totalDuration: number
    onTogglePlay: () => void
    onReset: () => void
  }) => {
    const formatTime = useCallback((seconds: number) => {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins}:${secs.toString().padStart(2, "0")}`
    }, [])

    const progressPercentage = useMemo(() => (currentTime / totalDuration) * 100, [currentTime, totalDuration])

    return (
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center space-x-4">
          <Button size="sm" variant="ghost" onClick={onTogglePlay} className="text-white hover:bg-white/20">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          <Button size="sm" variant="ghost" onClick={onReset} className="text-white hover:bg-white/20">
            <RotateCcw className="w-4 h-4" />
          </Button>

          <div className="flex-1 flex items-center space-x-2">
            <span className="text-white text-sm">{formatTime(currentTime)}</span>
            <div className="flex-1 bg-white/20 rounded-full h-1">
              <motion.div
                className="bg-blue-500 h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <span className="text-white text-sm">{formatTime(totalDuration)}</span>
          </div>

          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
            <Volume2 className="w-4 h-4" />
          </Button>

          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
            <Maximize className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  },
)

VideoControls.displayName = "VideoControls"

export const OptimizedDemoVideo = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const totalDuration = 120 // 2 minutes demo
  const shouldReduceMotion = useReducedMotion()

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => {
      const newPlaying = !prev
      if (newPlaying) {
        // Simulate video progress with optimized timer
        const startTime = Date.now() - currentTime * 1000
        const updateProgress = () => {
          const elapsed = Math.floor((Date.now() - startTime) / 1000)
          if (elapsed >= totalDuration) {
            setIsPlaying(false)
            setCurrentTime(totalDuration)
            return
          }
          setCurrentTime(elapsed)
          if (isPlaying) {
            requestAnimationFrame(updateProgress)
          }
        }
        requestAnimationFrame(updateProgress)
      }
      return newPlaying
    })
  }, [currentTime, totalDuration, isPlaying])

  const resetVideo = useCallback(() => {
    setCurrentTime(0)
    setIsPlaying(false)
  }, [])

  const backgroundAnimation = useMemo(() => {
    if (shouldReduceMotion || !isPlaying) {
      return "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
    }
    return [
      "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
      "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
      "linear-gradient(225deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
    ]
  }, [shouldReduceMotion, isPlaying])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 border border-indigo-200/20 text-sm font-medium text-indigo-700 mb-4">
            🎬 Product Demo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
              See ADmyBRAND AI Suite in action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how ADmyBRAND AI Suite transforms your team's productivity in just 2 minutes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-4 md:p-8">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                {/* Video Placeholder with Optimized Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-full h-full"
                    animate={{ background: backgroundAnimation }}
                    transition={{
                      duration: 3,
                      repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                    }}
                    style={{ willChange: isPlaying ? "background" : "auto" }}
                  />

                  <DashboardPreview isPlaying={isPlaying} />

                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <motion.button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      style={{ willChange: "transform" }}
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      </div>
                    </motion.button>
                  )}
                </div>

                <VideoControls
                  isPlaying={isPlaying}
                  currentTime={currentTime}
                  totalDuration={totalDuration}
                  onTogglePlay={togglePlay}
                  onReset={resetVideo}
                />
              </div>

              {/* Demo Features */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Project Setup",
                    time: "0:15",
                    description: "See how easy it is to create and configure projects",
                  },
                  { title: "Team Collaboration", time: "0:45", description: "Watch real-time collaboration in action" },
                  {
                    title: "Analytics Dashboard",
                    time: "1:30",
                    description: "Explore powerful insights and reporting features",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <div className="text-sm font-medium text-blue-600 mb-1">{feature.time}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

OptimizedDemoVideo.displayName = "OptimizedDemoVideo"
