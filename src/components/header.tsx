"use client"

import { useState } from "react"
import Image from "next/image"
// import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { 
      name: "Servicios", 
      href: "#servicios",
      hasDropdown: true,
      submenu: [
        { name: "Hosting & Dominios", href: "#servicio-1" },
        { name: "Plantillas Web", href: "#servicio-2" },
        { name: "Paquetes Combo", href: "#servicio-3" },
        { name: "Servicios de Integración", href: "#servicio-4" },
      ]
    },
    // { name: "Nosotros", href: "#sobre-nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  // Función para smooth scroll
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            title="Ir al inicio"
            aria-label="Ir al inicio"
          >
            <Image 
              src="/codedmo-logo.svg" 
              alt="CODEDMO Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                        {item.submenu?.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              onClick={() => handleNavClick("#contacto")}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Comenzar Proyecto
            </Button>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                  {/* Submenu móvil */}
                  {item.hasDropdown && item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavClick(subItem.href)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* CTA móvil */}
              <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  onClick={() => handleNavClick("#contacto")}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                >
                  Comenzar Proyecto
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
