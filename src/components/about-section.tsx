import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Eficiencia",
      description: "Desarrollamos soluciones optimizadas que maximizan el rendimiento y minimizan los recursos.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Honestidad",
      description: "Transparencia total en nuestros procesos, tiempos y costos. Sin sorpresas, solo resultados.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Aprendizaje Continuo",
      description: "Nos mantenemos actualizados con las últimas tecnologías y mejores prácticas del sector.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración",
      description: "Trabajamos de la mano contigo para entender tus necesidades y superar tus expectativas.",
    },
  ]

  return (
    <section id="sobre-nosotros" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">CODEDMO</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Conoce nuestra historia, misión y los valores que nos impulsan</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nuestra Historia</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  <strong className="text-blue-600 dark:text-blue-400">CODEDMO</strong> nace de la pasión por la tecnología y la necesidad
                  de ofrecer soluciones digitales que realmente marquen la diferencia. Somos un equipo de
                  desarrolladores y especialistas en ciberseguridad comprometidos con la excelencia técnica.
                </p>
                <p>
                  Creemos que la tecnología debe ser accesible, segura y eficiente. Por eso, nos especializamos en crear
                  software que no solo funciona, sino que evoluciona con tu negocio.
                </p>
                <p>
                  Nuestro enfoque combina desarrollo ágil, seguridad desde el diseño y un compromiso genuino con el
                  éxito de nuestros clientes.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Misión</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Democratizar el acceso a tecnología de calidad empresarial, proporcionando soluciones seguras,
                    eficientes y escalables que impulsen el crecimiento digital.
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Visión</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ser el socio tecnológico de confianza que transforma ideas en soluciones digitales exitosas,
                    estableciendo nuevos estándares de calidad y seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Nuestros Valores</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-gray-600 dark:text-gray-300">Proyectos Completados</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <p className="text-gray-600 dark:text-gray-300">Uptime Garantizado</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-600 dark:text-gray-300">Soporte Técnico</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-gray-600 dark:text-gray-300">Satisfacción Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
