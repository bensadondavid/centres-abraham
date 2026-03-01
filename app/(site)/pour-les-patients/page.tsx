import Link from "next/link"
import { GraduationCap, FileText, UserCheck, HeadphonesIcon, ArrowRight } from "lucide-react"

export default function ForPatients() {
  const services = [
    { icon: GraduationCap, title: "Orientation vers des médecins diplômés et expérimentés" },
    { icon: FileText, title: "Informations claires sur les démarches médicales" },
    { icon: UserCheck, title: "Accompagnement discret et personnalisé" },
    { icon: HeadphonesIcon, title: "Support avant et après la mise en relation médicale" },
  ]

  return (
    <div className="min-h-screen bg-surface text-text">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Accompagnement des patients pour la{" "}
            <span className="text-brand">circoncision médicale</span>
          </h1>

          <div className="w-20 h-1 bg-brand rounded-full mb-8" />

          <p className="text-xl text-muted leading-relaxed">
            Centres Abraham accompagne les patients à chaque étape de leur démarche de circoncision médicale en France.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-linear-to-b from-transparent to-brand-soft">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light">Ce que nous proposons</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-surface border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-soft flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300">
                    <Icon className="w-7 h-7 text-brand group-hover:text-brand-foreground transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-medium text-text">{service.title}</h3>
                </div>
              )
            })}
          </div>

          {/* Note */}
          <div className="mt-12 bg-surface-2 rounded-2xl p-8 text-center border border-border">
            <p className="text-muted text-lg">
              Chaque intervention est réalisée par un médecin partenaire indépendant, responsable de ses actes médicaux.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-brand-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 group"
            >
              Prendre contact
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}