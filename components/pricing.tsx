"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

const plans = [
  {
    name: "Starter",
    price: 9,
    yearlyPrice: 7,
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "10 projects", "Basic analytics", "Email support", "Mobile apps", "5GB storage"],
    popular: false,
  },
  {
    name: "Professional",
    price: 29,
    yearlyPrice: 24,
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 25 team members",
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Mobile apps",
      "100GB storage",
      "Time tracking",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    yearlyPrice: 79,
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Mobile apps",
      "1TB storage",
      "Advanced security",
      "Custom integrations",
      "SSO & SAML",
      "API access",
    ],
    popular: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-purple-100/60 backdrop-blur-sm border border-purple-200/20 text-xs md:text-sm font-medium text-purple-700 mb-4">
            💎 Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Choose your perfect plan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
            Start free and scale as you grow. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                !isYearly ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                isYearly ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="ml-1 md:ml-2 px-1 md:px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center">
                    <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <GlassCard className={`p-6 md:p-8 h-full ${plan.popular ? "ring-2 ring-blue-500/20 scale-105" : ""}`}>
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{plan.description}</p>

                  <div className="mb-4 md:mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      ${isYearly ? plan.yearlyPrice : plan.price}
                    </span>
                    <span className="text-sm md:text-base text-gray-600 ml-2">/month</span>
                    {isYearly && (
                      <div className="text-xs md:text-sm text-green-600 font-medium mt-1">
                        Save ${(plan.price - plan.yearlyPrice) * 12}/year
                      </div>
                    )}
                  </div>

                  <Button
                    className={`w-full text-sm md:text-base ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                        : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                    }`}
                  >
                    Start Free Trial
                  </Button>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-gray-600 mb-4">Need a custom solution?</p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80 text-sm md:text-base px-6 md:px-8"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
