"use client"

import { useEffect, useState } from "react"

interface TimelineEventProps {
  year: string
  title: string
  description: string
  icon: string
  position: "left" | "right"
  isVisible?: boolean
  delay?: number
}

export default function TimelineEvent({
  year,
  title,
  description,
  icon,
  position,
  isVisible = true,
  delay = 0,
}: TimelineEventProps) {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimated(true)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
    return () => {}
  }, [isVisible, delay])

  return (
    <div className="relative z-10">
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-[#1E1E1E] border-4 border-[#E6E6E6] dark:border-[#2A2A2A] rounded-full z-10"></div>

      {/* Content */}
      <div
        className={`w-5/12 ${position === "left" ? "mr-auto pr-8" : "ml-auto pl-8"} transition-all duration-700`}
        style={{
          opacity: isAnimated ? 1 : 0,
          transform: isAnimated ? "translateX(0)" : `translateX(${position === "left" ? "-50px" : "50px"})`,
        }}
      >
        <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-xl shadow-md relative">
          {/* Arrow pointing to timeline */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white dark:bg-[#1E1E1E] rotate-45 ${
              position === "left" ? "right-[-8px]" : "left-[-8px]"
            }`}
          ></div>

          <div className="flex items-center mb-3">
            <div className="bg-[#F5F5F5] dark:bg-[#2A2A2A] w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl">{icon}</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#FF6B6B] dark:text-[#FF6B6B]">{title}</h3>
              <p className="text-sm text-[#999999] dark:text-[#777777]">{year}</p>
            </div>
          </div>
          <p className="text-[#666666] dark:text-[#AAAAAA]">{description}</p>
        </div>
      </div>
    </div>
  )
}

