"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { GlassCard } from "@/components/glass-card"
import { Check, Users, Database, Clock, Shield } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter",
    basePrice: 9,
    yearlyDiscount: 0.2,
    features: ["Basic analytics", "Email support", "Mobile apps", "5GB storage"],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Professional",
    basePrice: 29,
    yearlyDiscount: 0.25,
    features: ["Advanced analytics", "Priority support", "Time tracking", "100GB storage", "Custom integrations"],
    color: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    name: "Enterprise",
    basePrice: 99,
    yearlyDiscount: 0.3,
    features: ["Enterprise analytics", "24/7 support", "Advanced security", "1TB storage", "SSO & SAML", "API access"],
    color: "from-indigo-500 to-indigo-600",
  },
]

const addOns = [
  { name: "Extra Users", icon: Users, pricePerUnit: 5, unit: "user/month", max: 100 },
  { name: "Additional Storage", icon: Database, pricePerUnit: 2, unit: "GB/month", max: 1000 },
  { name: "Priority Support", icon: Clock, pricePerUnit: 15, unit: "month", max: 1 },
  { name: "Advanced Security", icon: Shield, pricePerUnit: 25, unit: "month", max: 1 },
]

export function InteractivePricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedTier, setSelectedTier] = useState(1)
  const [addOnQuantities, setAddOnQuantities] = useState<Record<string, number>>({
    "Extra Users": 0,
    "Additional Storage": 0,
    "Priority Support": 0,
    "Advanced Security": 0,
  })

  const calculatePrice = (tierIndex: number) => {
    const tier = pricingTiers[tierIndex]
    let basePrice = tier.basePrice

    if (isYearly) {
      basePrice = basePrice * (1 - tier.yearlyDiscount)
    }

    let addOnPrice = 0
    addOns.forEach((addOn) => {
      addOnPrice += addOnQuantities[addOn.name] * addOn.pricePerUnit
    })

    return Math.round((basePrice + addOnPrice) * 100) / 100
  }

  const calculateYearlySavings = (tierIndex: number) => {
    const tier = pricingTiers[tierIndex]
    const monthlyTotal =
      tier.basePrice + addOns.reduce((sum, addOn) => sum + addOnQuantities[addOn.name] * addOn.pricePerUnit, 0)
    const yearlyTotal = calculatePrice(tierIndex)
    return Math.round((monthlyTotal - yearlyTotal) * 12 * 100) / 100
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/20 text-sm font-medium text-blue-700 mb-4">
            🧮 Interactive Pricing Calculator
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Calculate your perfect plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customize your plan with add-ons and see real-time pricing updates.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Save up to 30%</span>
            </button>
          </div>
        </motion.div>

        {/* Plan Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <GlassCard
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  selectedTier === index ? "ring-2 ring-blue-500/50 shadow-xl scale-105" : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedTier(index)}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <motion.span
                      key={`${index}-${isYearly}-${JSON.stringify(addOnQuantities)}`}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-gray-900"
                    >
                      ${calculatePrice(index)}
                    </motion.span>
                    <span className="text-gray-600 ml-2">/month</span>
                    {isYearly && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-600 font-medium mt-1"
                      >
                        Save ${calculateYearlySavings(index)}/year
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Customize with Add-ons</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={addOn.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <addOn.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{addOn.name}</h4>
                        <p className="text-sm text-gray-600">
                          ${addOn.pricePerUnit}/{addOn.unit}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{addOnQuantities[addOn.name]}</div>
                      <div className="text-sm text-gray-600">
                        +${addOnQuantities[addOn.name] * addOn.pricePerUnit}/mo
                      </div>
                    </div>
                  </div>

                  <Slider
                    value={[addOnQuantities[addOn.name]]}
                    onValueChange={(value) => setAddOnQuantities((prev) => ({ ...prev, [addOn.name]: value[0] }))}
                    max={addOn.max}
                    step={1}
                    className="w-full"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Total Monthly Cost</h4>
                  <p className="text-gray-600">{pricingTiers[selectedTier].name} plan with selected add-ons</p>
                </div>
                <div className="text-right">
                  <motion.div
                    key={`total-${selectedTier}-${isYearly}-${JSON.stringify(addOnQuantities)}`}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    ${calculatePrice(selectedTier)}
                  </motion.div>
                  <div className="text-sm text-gray-600">/month</div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                Start Free Trial
              </Button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
