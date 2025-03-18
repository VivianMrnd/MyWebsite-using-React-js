import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
  color?: "purple" | "pink" | "amber" | "blue" | "green"
}

export default function SkillBadge({ name, level, color = "purple" }: SkillBadgeProps) {
  // Determine color based on skill level and color prop
  const getColorClass = () => {
    const baseColors = {
      purple: {
        high: "bg-purple-500 text-white hover:bg-purple-600",
        medium: "bg-purple-400 text-white hover:bg-purple-500",
        low: "bg-purple-300 text-purple-800 hover:bg-purple-400",
        veryLow: "bg-purple-200 text-purple-800 hover:bg-purple-300",
      },
      pink: {
        high: "bg-pink-500 text-white hover:bg-pink-600",
        medium: "bg-pink-400 text-white hover:bg-pink-500",
        low: "bg-pink-300 text-pink-800 hover:bg-pink-400",
        veryLow: "bg-pink-200 text-pink-800 hover:bg-pink-300",
      },
      amber: {
        high: "bg-amber-500 text-white hover:bg-amber-600",
        medium: "bg-amber-400 text-white hover:bg-amber-500",
        low: "bg-amber-300 text-amber-800 hover:bg-amber-400",
        veryLow: "bg-amber-200 text-amber-800 hover:bg-amber-300",
      },
      blue: {
        high: "bg-blue-500 text-white hover:bg-blue-600",
        medium: "bg-blue-400 text-white hover:bg-blue-500",
        low: "bg-blue-300 text-blue-800 hover:bg-blue-400",
        veryLow: "bg-blue-200 text-blue-800 hover:bg-blue-300",
      },
      green: {
        high: "bg-green-500 text-white hover:bg-green-600",
        medium: "bg-green-400 text-white hover:bg-green-500",
        low: "bg-green-300 text-green-800 hover:bg-green-400",
        veryLow: "bg-green-200 text-green-800 hover:bg-green-300",
      },
    }

    const selectedColor = baseColors[color] || baseColors.purple

    if (level >= 90) return selectedColor.high
    if (level >= 80) return selectedColor.medium
    if (level >= 70) return selectedColor.low
    return selectedColor.veryLow
  }

  return <Badge className={cn("px-3 py-1.5 text-sm transition-colors rounded-full", getColorClass())}>{name}</Badge>
}

