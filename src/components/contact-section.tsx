"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías la lógica de envío del formulario
    console.log("Formulario enviado:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hola@codedmo.com",
      action: "mailto:hola@codedmo.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "100% Remoto",
      action: null,
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Proyecto</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ¿Tienes una idea? ¿Necesitas ayuda con tu sitio web o seguridad? Estamos aquí para convertir tus ideas en
              realidad digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nombre Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                        {info.action ? (
                          <a href={info.action} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horarios */}
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Horarios de Atención</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-300">
                        <strong>Soporte de emergencia 24/7</strong> disponible para clientes con planes de hosting y
                        mantenimiento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Rápido */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">¿Necesitas una respuesta rápida?</h4>
                <p className="mb-4 opacity-90">
                  Contáctanos por WhatsApp y te responderemos en menos de 30 minutos durante horario laboral.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => window.open("https://wa.me/15551234567", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chatear por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
