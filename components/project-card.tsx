import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  color?: "purple" | "pink" | "amber" | "blue" | "green"
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  color = "purple",
}: ProjectCardProps) {
  const getGradient = () => {
    switch (color) {
      case "purple":
        return "from-purple-400 to-indigo-400"
      case "pink":
        return "from-pink-400 to-rose-400"
      case "amber":
        return "from-amber-400 to-orange-400"
      case "blue":
        return "from-blue-400 to-cyan-400"
      case "green":
        return "from-green-400 to-emerald-400"
      default:
        return "from-purple-400 to-indigo-400"
    }
  }

  const getButtonColor = () => {
    switch (color) {
      case "purple":
        return "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
      case "pink":
        return "bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
      case "amber":
        return "bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600"
      case "blue":
        return "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      case "green":
        return "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
      default:
        return "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg rounded-2xl border-0 bg-white dark:bg-slate-800">
      <div className="h-48 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${getGradient()} opacity-80`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white">{title.split(" ")[0]}</h3>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 mb-4 dark:text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-white dark:bg-slate-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button size="sm" className={cn("rounded-full text-white border-none", getButtonColor())} asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

