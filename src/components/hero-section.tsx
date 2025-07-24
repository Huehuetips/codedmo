import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Code, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Seguridad.<br />Soporte.<br />Velocidad.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              En <span className="font-semibold text-blue-600 dark:text-blue-400">CODEDMO</span> Somos la solución perfecta para poner tu proyecto en línea, con respaldo técnico.
            </p>

            {/* Value Propositions */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center lg:items-start p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hosting Seguro</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Alojamiento rápido y protegido para tu proyecto</p>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dominios Personalizados</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Elige el dominio perfecto para tu marca</p>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Páginas Web</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Desarrollo de sitios web modernos y funcionales</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold flex items-center"
                >
                <Link href="#servicios">
                  Ver Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </Button>
                <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 px-8 py-3 text-lg font-semibold"
                >
                <Link href="#contacto">
                  Habla con Nosotros
                </Link>
                </Button>
            </div>
          </div>

          {/* Imagen Hero */}
          <div className="relative lg:order-last order-first">
            <div className="relative">
              {/* Fondo decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
              
              {/* Imagen principal */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl">
                <Image
                  src="/images/Hero.png"
                  alt="CODEDMO - Desarrollo y Seguridad Web"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
              
              {/* Badge flotante */}
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">En línea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
