import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string[]
  color?: "purple" | "pink" | "amber" | "blue"
}

export default function ExperienceCard({ title, company, period, description, color = "purple" }: ExperienceCardProps) {
  const getBgColor = () => {
    switch (color) {
      case "purple":
        return "bg-purple-50 dark:bg-purple-900/20"
      case "pink":
        return "bg-pink-50 dark:bg-pink-900/20"
      case "amber":
        return "bg-amber-50 dark:bg-amber-900/20"
      case "blue":
        return "bg-blue-50 dark:bg-blue-900/20"
      default:
        return "bg-purple-50 dark:bg-purple-900/20"
    }
  }

  const getBorderColor = () => {
    switch (color) {
      case "purple":
        return "border-l-purple-400 dark:border-l-purple-600"
      case "pink":
        return "border-l-pink-400 dark:border-l-pink-600"
      case "amber":
        return "border-l-amber-400 dark:border-l-amber-600"
      case "blue":
        return "border-l-blue-400 dark:border-l-blue-600"
      default:
        return "border-l-purple-400 dark:border-l-purple-600"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "purple":
        return "text-purple-600 dark:text-purple-400"
      case "pink":
        return "text-pink-600 dark:text-pink-400"
      case "amber":
        return "text-amber-600 dark:text-amber-400"
      case "blue":
        return "text-blue-600 dark:text-blue-400"
      default:
        return "text-purple-600 dark:text-purple-400"
    }
  }

  return (
    <Card
      className={cn("overflow-hidden transition-all hover:shadow-lg rounded-2xl border-0 border-l-4", getBorderColor())}
    >
      <CardHeader className={cn("bg-gradient-to-r", getBgColor())}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className={cn("font-medium", getTextColor())}>{company}</p>
          </div>
          <Badge variant="outline" className="w-fit bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6 bg-white dark:bg-slate-800">
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={cn("mr-2", getTextColor())}>•</span>
              <span className="text-slate-600 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

