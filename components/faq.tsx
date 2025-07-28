"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access to all features for 14 days, no credit card required. You can invite your team, create projects, and explore all the functionality. After the trial, you can choose the plan that works best for you.",
  },
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. You can also cancel your subscription at any time.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, regular security audits, and comply with SOC 2 Type II, GDPR, and other industry standards. Your data is backed up daily and stored in secure, redundant data centers.",
  },
  {
    question: "Do you offer integrations?",
    answer:
      "Yes! We integrate with over 100+ popular tools including Slack, Google Workspace, Microsoft Teams, GitHub, Jira, and many more. We also provide a robust API for custom integrations.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. We also have extensive documentation, video tutorials, and webinars.",
  },
  {
    question: "Can I use ADmyBRAND AI Suite offline?",
    answer:
      "Our mobile apps work offline and sync when you're back online. The web app requires an internet connection, but we cache data locally so you can continue working during brief connectivity issues.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/60 backdrop-blur-sm border border-gray-200/20 text-sm font-medium text-gray-700 mb-4">
            ❓ FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Frequently asked questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/20 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
