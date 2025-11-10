"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { COLORS } from "@/lib/constants"

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
            className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-left" style={{ color: COLORS.foreground }}>
              {faq.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${expandedId === faq.id ? "rotate-180" : ""}`}
              style={{ color: COLORS.primary }}
            />
          </button>
          {expandedId === faq.id && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <p className="text-gray-600 text-pretty">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
