import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Tienda online completa con carrito de compras, pasarelas de pago y panel administrativo.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "Web Application",
      status: "Completado",
    },
    {
      title: "Dashboard Corporativo",
      description: "Sistema de gestión empresarial con reportes avanzados y análisis de datos en tiempo real.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "PostgreSQL", "Chart.js", "API REST"],
      type: "Dashboard",
      status: "Completado",
    },
    {
      title: "Sitio Web Corporativo",
      description: "Página web profesional con diseño responsive y optimización SEO para empresa de servicios.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO"],
      type: "Website",
      status: "Completado",
    },
    {
      title: "Sistema de Seguridad",
      description: "Herramienta de monitoreo y análisis de vulnerabilidades para infraestructura web.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "Docker", "Linux", "Security"],
      type: "Security Tool",
      status: "En desarrollo",
    },
    {
      title: "API de Gestión",
      description: "API REST robusta para gestión de usuarios, autenticación y manejo de datos empresariales.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Node.js", "Express", "JWT", "Swagger"],
      type: "API",
      status: "Completado",
    },
    {
      title: "Plataforma Educativa",
      description: "Sistema de aprendizaje online con cursos, evaluaciones y seguimiento de progreso.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Firebase", "Video.js", "PWA"],
      type: "Platform",
      status: "Próximamente",
    },
  ]

  return (
    <section id="portafolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Portafolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proyectos que demuestran nuestra experiencia y compromiso con la excelencia técnica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completado"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : project.status === "En desarrollo"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200">
                    {project.type}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 text-blue-800 dark:text-blue-300 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-600 bg-transparent">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 bg-transparent">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}
