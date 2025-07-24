import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Shield, Code, BookOpen, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      category: "Hosting & Dominios",
      icon: <Server className="w-8 h-8" />,
      items: [
        {
          title: "Solo Hosting",
          description: "Espacio web, correos corporativos, soporte",
          price: "Desde 300/año",
          features: ["SSL Gratuito", "99.9% Activo", "Soporte 24/7", "Acceso FTP"],
        },
        {
          title: "Combo Pro",
          description: "Hosting + dominio personalizado",
          price: "Desde 350/año",
          features: ["Hosting completo", "Dominio personalizado", "Mantenimiento", "Soporte DNS"],
        },
        {
          title: "Solo Dominio",
          description: "Registro de dominio .com, .net, .org, etc.",
          price: "Desde 140/año",
          features: [".com, .net, .org", "Protección WHOIS", "DNS Gratuito", "Renovación automática"],
        },
      ],
    },
    {
      category: "Desarrollo Web",
      icon: <Code className="w-8 h-8" />,
      items: [
        {
          title: "Plantilla Web Pro",
          description: "Ideal para negocios, portafolios, páginas simples",
          price: "Desde Q300",
          features: ["Diseño responsive", "Plantillas modernas", "Fácil personalización", "Listo para usar"],
        },
        {
          title: "Aplicación Web a Medida",
          description: "Sistemas, catálogos, reservas, etc.",
          price: "Desde Q700",
          features: ["Desarrollo personalizado", "Base de datos", "Panel administrativo", "Funcionalidades específicas"],
        },
      ],
    },
    {
      category: "Combos a la Medida",
      icon: <Shield className="w-8 h-8" />,
      items: [
        {
          title: "Starter",
          description: "Hosting + plantilla (vos tenés dominio)",
          price: "Desde Q550",
          features: ["Hosting incluido", "Plantilla web", "Configuración completa", "Soporte básico"],
        },
        {
          title: "Completo Pro",
          description: "Hosting + dominio + plantilla web",
          price: "Desde Q700",
          features: ["Todo incluido", "Hosting + dominio", "Plantilla personalizada", "Entrega funcionando"],
        },
        {
          title: "Personalizado",
          description: "Todo más extras a convenir",
          price: "A cotizar",
          features: ["Solución completa", "Extras personalizados", "Consultoría incluida", "Soporte premium"],
        },
      ],
    },
    {
      category: "Correos Corporativos",
      icon: <BookOpen className="w-8 h-8" />,
      items: [
        {
          title: "Correo con Google Workspace",
          description: "Configuración DNS, usuarios, acceso Gmail",
          price: "Desde Q250",
          features: ["Configuración DNS", "Usuarios corporativos", "Acceso con Gmail", "Soporte técnico"],
        },
        {
          title: "Correo con Microsoft Exchange",
          description: "Configuración con Outlook y herramientas MS",
          price: "Desde Q300",
          features: ["Configuración Exchange", "Integración Outlook", "Herramientas Microsoft", "Sincronización"],
        },
        {
          title: "Paquete Empresarial",
          description: "Ambos o múltiples dominios con mantenimiento",
          price: "Desde Q500",
          features: ["Múltiples dominios", "Ambas plataformas", "Mantenimiento incluido", "Soporte empresarial"],
        },
      ],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tu espacio profesional en internet, desarrollo web y soluciones completas para tu negocio digital
          </p>
        </div>

        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="relative overflow-hidden border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">{service.description}</CardDescription>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                      Solicitar Información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Próximamente */}
        <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Próximamente: Formación Técnica</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Cursos especializados en desarrollo web y ciberseguridad. Aprende de la mano de expertos con experiencia
            real en la industria.
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 bg-transparent">
            Notificarme cuando esté disponible
          </Button>
        </div>
      </div>
    </section>
  )
}
