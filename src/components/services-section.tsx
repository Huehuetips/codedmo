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

  const services: ServiceCategory[] = [
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
          features: ["5GB Almacenamiento", "SSL Gratuito", "cPanel incluido", "Soporte básico"],
        },
        {
          title: "Hosting + Dominio Gratis",
          description: "Ideal para negocios y sitios web de tráfico medio",
          price: "Desde $4.37/mes",
          annualPrice: "($52.38/año)",
          features: ["15GB Almacenamiento", "SSL Premium", "Backups automáticos", "Soporte prioritario"],
          badge: "Más de 30% DESC",
          note: "Facturación Anual",
        },
        {
          title: "Dominio",
          description: "El dominio más popular y confiable para tu negocio",
          price: "Desde $1.99/mes",
          annualPrice: "($23.88/año)",
          note: "Facturación Anual",
          features: ["Registro por 1 año", "DNS gratuito", "Protección WHOIS", "Renovación automática"],
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
          features: ["Un año de Hosting GRATIS!!", "Panel admin completo", "Gestión de usuarios", "Reportes y analytics", "Base de datos"],
        },
      ],
    },
    {
      category: "Paquetes Combo",
      icon: <Percent className="w-8 h-8" />,
      items: [
        {
          title: "Hosting + Plantilla",
          description: "Hosting anual con plantilla web lista para usar",
          price: "Desde $4.70/mes",
          annualPrice: "($56.35/año)",
          features: ["Hosting profesional", "Plantilla a elegir", "Instalación incluida", "Personalización básica"],
          badge: "20% DESC",
          note: "Dominio por separado",
        },
        {
          title: "Paquete Completo",
          description: "Todo incluido: hosting, dominio y plantilla Landing",
          price: "Desde $4.99/mes",
          annualPrice: "($59.89/año)",
          features: ["Todo incluido", "Sin costos ocultos", "Página Levantada", "Soporte completo"],
          badge: "Más de 35% DESC",
          note: "Paquete más popular",
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
    // Solo el primer servicio de la primera categoría usa el toggle
    if (categoryIndex === 0 && serviceIndex === 0 && service.month && service.year) {
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
              {category.items.map((service, serviceIndex) => {
                const currentPrice = getPrice(service, categoryIndex, serviceIndex)
                
                return (
                  <Card
                    key={serviceIndex}
                    className="relative overflow-hidden border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    {/* Badge de descuento */}
                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {service.badge}
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 min-h-[48px]">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                          {currentPrice.price}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {currentPrice.annualPrice}
                        </div>
                        {currentPrice.note && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            {currentPrice.note}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Features */}
                        <div className="min-h-[120px]">
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                          Solicitar Información
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
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
