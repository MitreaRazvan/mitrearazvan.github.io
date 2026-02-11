import { portfolioData } from "@/lib/data"

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}