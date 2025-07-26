import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      { name: "Hosting Web", href: "#servicios" },
      { name: "Desarrollo Web", href: "#servicios" },
      { name: "Dominios", href: "#servicios" },
      { name: "Ciberseguridad", href: "#servicios" },
    ],
    empresa: [
      { name: "Sobre Nosotros", href: "#sobre-nosotros" },
      { name: "Portafolio", href: "#portafolio" },
      { name: "Blog", href: "#" },
      { name: "Carreras", href: "#" },
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "#" },
      { name: "Documentación", href: "#" },
      { name: "Estado del Servicio", href: "#" },
      { name: "Contacto", href: "#contacto" },
    ],
    legal: [
      { name: "Términos de Servicio", href: "#" },
      { name: "Política de Privacidad", href: "#" },
      { name: "Política de Cookies", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578671524932" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/codedmo.dev/" },
    { name: "GitHub", icon: Github, href: "#" },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center space-x-2 mb-4">
              <Image
                src="/codedmo-logo.svg"
                alt="CODEDMO Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              Desarrollo web moderno y soluciones digitales personalizadas. Transformo ideas en experiencias digitales únicas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Enlaces de servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de soporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mantente Actualizado</h3>
              <p className="text-gray-400 dark:text-gray-500">
                Recibe las últimas noticias sobre tecnología, seguridad y nuestros servicios.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all duration-300 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">© {currentYear} CODEDMO. Todos los derechos reservados.</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 md:mt-0">Hecho con ❤️ y mucho ☕ en Guatemala</p>
        </div>
      </div>
    </footer>
  )
}
