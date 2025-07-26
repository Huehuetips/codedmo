"use client"

import type React from "react"
import { MessageCircle, Facebook, Instagram } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+502 5969-2780",
      action: "https://wa.me/50259692780",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "Facebook",
      content: "Síguenos en Facebook",
      action: "https://www.facebook.com/profile.php?id=61578671524932", // Reemplaza con tu página real
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      content: "Síguenos en Instagram",
      action: "https://www.instagram.com/codedmo.dev/", // Reemplaza con tu página real
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Conecta{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Conmigo</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ¿Tienes una idea? ¿Necesitas ayuda con tu sitio web? Contáctame a través de cualquiera de estos medios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                target={info.action.startsWith('http') ? "_blank" : undefined}
                rel={info.action.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                    {info.content}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA adicional */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-2">¿Listo para comenzar?</h4>
              <p className="mb-6 opacity-90">
                Contáctame por WhatsApp para una respuesta rápida.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/50259692780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
