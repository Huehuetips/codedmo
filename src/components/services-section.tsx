"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Layout, Mail, ArrowRight, Percent } from "lucide-react"
import { JSX, useState } from "react"

// Tipos actualizados para manejar precios mensuales y anuales
type PricingOption = {
  price: string;
  annualPrice: string;
  note?: string;
}

type ServiceItem = {
  title: string;
  description: string;
  price?: string;
  annualPrice?: string;
  month?: PricingOption;
  year?: PricingOption;
  features: string[];
  badge?: string;
  note?: string;
}

type ServiceCategory = {
  category: string;
  icon: JSX.Element;
  items: ServiceItem[];
}

export default function ServicesSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  // Función para navegar al formulario de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services: ServiceCategory[] = [
    {
      category: "🌟 Ofertas Destacadas",
      icon: <Percent className="w-8 h-8" />,
      items: [
        {
          title: "Paquete Completo",
          description: "Todo incluido: hosting, dominio y plantilla Landing",
          price: "Desde $4.99/mes",
          annualPrice: "($59.89/año)",
          features: ["Todo incluido", "Sin costos ocultos", "Página Levantada", "Soporte completo", "Dominio .com GRATIS", "Hosting profesional", "SSL incluido"],
          badge: "🏆 MÁS DE 35% DESC",
          note: "¡La mejor oferta!",
        },
        {
          title: "Hosting + Dominio Gratis",
          description: "Ideal para negocios y sitios web de tráfico medio",
          price: "Desde $4.37/mes",
          annualPrice: "($52.38/año)",
          features: ["Todo lo que incluye el Hosting", "Dominio .com gratis", "Certificado SSL gratuito", "Soporte avanzado", "Subdominios ilimitados", "cPanel incluido"],
          badge: "💎 MÁS DE 30% DESC",
          note: "Facturación Anual",
        },
        {
          title: "Hosting + Plantilla",
          description: "Hosting anual con plantilla web lista para usar",
          price: "Desde $4.70/mes",
          annualPrice: "($56.35/año)",
          features: ["Hosting profesional", "Plantilla a elegir", "Instalación incluida", "Personalización básica", "Soporte técnico"],
          badge: "20% DESC",
          note: "Dominio por separado",
        },
      ],
    },
    {
      category: "Hosting and Domains",
      icon: <Server className="w-8 h-8" />,
      items: [
        {
          title: "Hosting",
          description: "Alojamiento rápido, seguro y confiable para tu sitio",
          month: {
            price: "Desde $5.99/mes",
            annualPrice: "($71.88/año)",
          },
          year: {
            price: "Desde $4.37/mes",
            annualPrice: "($52.38/año)",
            note: "Facturación Anual",
          },
          features: ["Almacenamiento Ilimitado", "2GB Ram", "cPanel incluido", "Soporte básico", "Cuentas de correo ilimitadas", "Bases de datos ilimitadas"],
        },
        {
          title: "Dominio",
          description: "El nombre ideal para tu presencia en línea",
          price: "Desde $1.99/mes",
          annualPrice: "($23.88/año)",
          note: "Facturación Anual",
          features: ["Registro por 1 año", "DNS gratuito", "Protección WHOIS", "Renovación automática", "SSL gratuito"],
        },
      ],
    },
    {
      category: "Plantillas Web",
      icon: <Layout className="w-8 h-8" />,
      items: [
        {
          title: "Landing Page",
          description: "Página única optimizada para conversiones y captación",
          price: "Desde $18",
          annualPrice: "(Pago único)",
          features: ["Diseño responsive", "Optimización SEO", "Formularios incluidos", "Carga rápida"],
        },
        {
          title: "Sitio Multi Página",
          description: "Sitio web completo con múltiples secciones y páginas",
          price: "Desde $30",
          annualPrice: "(Pago único)",
          features: ["Hasta 10 páginas", "Menú navegación", "Galería de imágenes"],
        },
        {
          title: "Sistemas y Plataformas Web",
          description: "Panel de control completo para gestión de contenido",
          price: "Desde $300",
          annualPrice: "(Pago único)",
          features: ["Desarrollo a la medida", "Integración con Base de datos", "Funcionalidades avanzadas", "Soporte técnico"],
        },
      ],
    },
    {
      category: "Servicios de Integración",
      icon: <Mail className="w-8 h-8" />,
      items: [
        {
          title: "Google Workspace",
          description: "Configuración completa de correos corporativos con Google",
          price: "Desde $180",
          annualPrice: "(Hasta 15 usuarios)",
          features: ["Configuración DNS", "Cuentas corporativas", "Gmail empresarial", "Drive compartido"],
        },
        {
          title: "Microsoft Exchange",
          description: "Integración profesional con herramientas Microsoft",
          price: "Desde $180",
          annualPrice: "(Hasta 15 usuarios)",
          features: ["Configuración Exchange", "Outlook empresarial", "Teams incluido", "OneDrive corporativo"],
        },
        {
          badge: "Más de 10% DESC",
          title: "Integración Mixta",
          description: "Configuración de ambas plataformas para máxima flexibilidad",
          price: "Desde $320",
          annualPrice: "(Hasta 15 usuarios)",
          features: ["Google + Microsoft", "Sincronización completa", "Migración de datos", "Soporte especializado"],
        },
      ],
    },
  ]

  // Función para obtener el precio según el toggle (solo para el primer servicio "Hosting")
  const getPrice = (service: ServiceItem, categoryIndex: number, serviceIndex: number) => {
    // Solo el primer servicio de la segunda categoría (Hosting and Domains) usa el toggle
    if (categoryIndex === 1 && serviceIndex === 0 && service.month && service.year) {
      return isAnnual ? service.year : service.month
    }
    return {
      price: service.price || "",
      annualPrice: service.annualPrice || "",
      note: service.note
    }
  }

  return (
    <section id="servicios" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Tu espacio profesional en internet, desarrollo web y soluciones completas para tu negocio digital
          </p>

          {/* Toggle de precios para Hosting */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isAnnual
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Anual
                <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                  Ahorro
                </span>
              </button>
            </div>
          </div>
        </div>

        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16" id={`servicio-${categoryIndex + 1}`}>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
            </div>

            <div className={`grid gap-8 ${
              category.items.length === 2 
                ? "md:grid-cols-2 max-w-4xl mx-auto" 
                : "md:grid-cols-3"
            }`}>
              {category.items.map((service, serviceIndex) => {
                const currentPrice = getPrice(service, categoryIndex, serviceIndex)
                const isHighlighted = categoryIndex === 0 && (serviceIndex === 0 || serviceIndex === 1)
                
                return (
                  <Card
                    key={serviceIndex}
                    className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-lg dark:bg-gray-800 flex flex-col ${
                      isHighlighted 
                        ? "border-yellow-400 shadow-xl scale-105 bg-gradient-to-br from-amber-50/30 to-orange-50/30 dark:from-amber-900/20 dark:to-orange-900/20 hover:scale-110" 
                        : "hover:border-blue-200 dark:hover:border-blue-800 dark:border-gray-700"
                    }`}
                    style={isHighlighted ? {
                      boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.1), 0 10px 10px -5px rgba(251, 146, 60, 0.04)"
                    } : {}}
                  >
                    {/* Badge de descuento */}
                    {service.badge && (
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                        isHighlighted 
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white animate-pulse" 
                          : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      }`}>
                        {service.badge}
                      </div>
                    )}
                    
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className={`text-xl ${isHighlighted ? "text-orange-900 dark:text-orange-100" : "text-gray-900 dark:text-white"}`}>
                        {service.title}
                      </CardTitle>
                      <CardDescription className={`min-h-[48px] ${
                        isHighlighted ? "text-orange-700 dark:text-orange-200" : "text-gray-600 dark:text-gray-400"
                      }`}>
                        {service.description}
                      </CardDescription>
                      <div className="space-y-1">
                        <div className={`text-2xl font-bold bg-clip-text text-transparent ${
                          isHighlighted 
                            ? "bg-gradient-to-r from-orange-600 to-yellow-600" 
                            : "bg-gradient-to-r from-cyan-600 to-blue-600"
                        }`}>
                          {currentPrice.price}
                        </div>
                        <div className={`text-sm ${
                          isHighlighted ? "text-orange-600 dark:text-orange-300" : "text-gray-500 dark:text-gray-400"
                        }`}>
                          {currentPrice.annualPrice}
                        </div>
                        {currentPrice.note && (
                          <div className={`text-xs font-medium ${
                            isHighlighted ? "text-orange-700 dark:text-orange-200" : "text-blue-600 dark:text-blue-400"
                          }`}>
                            {currentPrice.note}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <div className="flex-grow">
                        {/* Features */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className={`flex items-center ${
                                isHighlighted ? "text-orange-700 dark:text-orange-200" : "text-gray-600 dark:text-gray-400"
                              }`}>
                                <div className={`w-2 h-2 rounded-full mr-3 ${
                                  isHighlighted 
                                    ? "bg-gradient-to-r from-orange-500 to-yellow-500" 
                                    : "bg-gradient-to-r from-cyan-500 to-blue-500"
                                }`}></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                        
                      <Button 
                        className={`w-full mt-auto ${
                          isHighlighted 
                            ? "bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3 shadow-lg" 
                            : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                        }`}
                        onClick={scrollToContact}
                      >
                        {isHighlighted ? "¡Solicitar Ahora!" : "Solicitar Información"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}

        {/* Próximamente */}
        {/* <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <Layout className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Próximamente: Formación Técnica</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Cursos especializados en desarrollo web y ciberseguridad. Aprende de la mano de expertos con experiencia
            real en la industria.
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 bg-transparent">
            Notificarme cuando esté disponible
          </Button>
        </div> */}
      </div>
    </section>
  )
}
