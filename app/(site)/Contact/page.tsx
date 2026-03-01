import { Phone, Mail, Shield } from "lucide-react"
import ContactForm from "@/components/public/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface text-text">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Contacter <span className="text-brand">Centres Abraham</span>
          </h1>
          <div className="w-20 h-1 bg-brand rounded-full mb-8" />
          <p className="text-xl text-muted leading-relaxed">
            Notre équipe est à votre disposition pour toute demande d&apos;information concernant la circoncision médicale en France.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form (Client Component) */}
            <div>
              <h2 className="text-2xl font-medium text-text mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-medium text-text mb-6">Autres moyens de contact</h2>

              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center">
                      <Phone className="w-6 h-6 text-brand-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-text">Téléphone</h3>
                  </div>

                  <div className="space-y-2 ml-16">
                    <a href="tel:0183805249" className="block text-lg text-brand hover:opacity-80 transition-opacity font-medium">
                      01 83 80 52 49
                    </a>
                    <a href="tel:0757991236" className="block text-lg text-brand hover:opacity-80 transition-opacity font-medium">
                      07 57 99 12 36
                    </a>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center">
                      <Mail className="w-6 h-6 text-brand-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-text">Email</h3>
                  </div>

                  <a
                    href="mailto:centresabraham@gmail.com"
                    className="ml-16 text-md text-brand hover:opacity-80 transition-opacity font-medium break-all"
                  >
                    centresabraham@gmail.com
                  </a>
                </div>

                <div className="bg-brand-soft border border-border rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center shrink-0 border border-border">
                    <Shield className="w-5 h-5 text-brand" />
                  </div>
                  <p className="text-text text-sm pt-2">
                    Toutes les demandes sont traitées de manière confidentielle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}