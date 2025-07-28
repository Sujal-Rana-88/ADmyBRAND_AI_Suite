import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Lazy load components for better performance
const OptimizedHero = dynamic(
  () => import("@/components/optimized-hero").then((mod) => ({ default: mod.OptimizedHero })),
  {
    loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
  },
)

const OptimizedFeatures = dynamic(
  () => import("@/components/optimized-features").then((mod) => ({ default: mod.OptimizedFeatures })),
  {
    loading: () => <div className="py-24 flex items-center justify-center">Loading features...</div>,
  },
)

const OptimizedDemoVideo = dynamic(
  () => import("@/components/optimized-demo-video").then((mod) => ({ default: mod.OptimizedDemoVideo })),
  {
    loading: () => <div className="py-24 flex items-center justify-center">Loading demo...</div>,
  },
)

const OptimizedPricing = dynamic(
  () => import("@/components/optimized-pricing").then((mod) => ({ default: mod.OptimizedPricing })),
  {
    loading: () => <div className="py-24 flex items-center justify-center">Loading pricing...</div>,
  },
)

const Testimonials = dynamic(() => import("@/components/testimonials").then((mod) => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-24 flex items-center justify-center">Loading testimonials...</div>,
})

const ResourcesSection = dynamic(
  () => import("@/components/resources-section").then((mod) => ({ default: mod.ResourcesSection })),
  {
    loading: () => <div className="py-24 flex items-center justify-center">Loading resources...</div>,
  },
)

const FAQ = dynamic(() => import("@/components/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className="py-24 flex items-center justify-center">Loading FAQ...</div>,
})

const Contact = dynamic(() => import("@/components/contact").then((mod) => ({ default: mod.Contact })), {
  loading: () => <div className="py-24 flex items-center justify-center">Loading contact...</div>,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <OptimizedHero />
      <OptimizedFeatures />
      <OptimizedDemoVideo />
      <OptimizedPricing />
      <Testimonials />
      <ResourcesSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
