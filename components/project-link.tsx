"use client"

import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

interface ProjectLinkProps {
  title: string
  description: string
  domain: string
  github: string
  color?: string
  isVisible?: boolean
  delay?: number
}

export default function ProjectLink({
  title,
  description,
  domain,
  github,
  color = "#4ECDC4",
  isVisible = true,
  delay = 0,
}: ProjectLinkProps) {
  const [isHovered, setIsHovered] = useState(false)
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
    <Card
      className={`overflow-hidden transition-all duration-700 border-0 shadow-lg ${isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered ? `0 10px 25px -5px ${color}20, 0 8px 10px -6px ${color}10` : "",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.7s ease, translate 0.7s ease",
      }}
    >
      <div className="h-2" style={{ backgroundColor: color }}></div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold" style={{ color }}>
            {title}
          </h3>
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm dark:bg-[#1E1E1E]">
            Project
          </Badge>
        </div>
        <p className="text-[#666666] mb-6 dark:text-[#AAAAAA]">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="flex items-center gap-2 text-[#666666] dark:text-[#AAAAAA]">
            <ExternalLink className="h-4 w-4" style={{ color }} />
            <a
              href={`https://${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color }}
            >
              {domain}
            </a>
          </div>
          <div className="hidden sm:block text-[#CCCCCC] dark:text-[#444444]">•</div>
          <div className="flex items-center gap-2 text-[#666666] dark:text-[#AAAAAA]">
            <Github className="h-4 w-4" style={{ color }} />
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color }}
            >
              {github}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

