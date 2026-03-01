import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border">
      <div className="h-fit max-w-6xl mx-auto px-6 pt-12 pb-4 grid grid-rows-4 text-center items-center gap-4 md:pt-16 lg:grid-cols-4 lg:grid-rows-1 lg:items-start lg:justify-center">
        <div className="">
          {/* Brand */}
             {/* Logo */}
            <Link href="/" className="flex flex-row items-center w-fit mx-auto pb-2">
              <Image
                src="/logo-centres-abraham.webp"
                alt="logo-centres-abraham"
                width={40}
                height={40}
                priority
              />
              <p className="font-bold">Centres Abraham</p>
            </Link>

            <p className="text-muted text-sm leading-relaxed">
              Service d&apos;orientation et d&apos;accompagnement pour la
              circoncision médicale en France.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted hover:text-brand transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/qui-sommes-nous"
                className="text-sm text-muted hover:text-brand transition-colors"
              >
                Qui sommes-nous
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted hover:text-brand transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted hover:text-brand transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-muted">
              <a
                href="tel:0183805249"
                className="block hover:text-brand transition-colors"
              >
                01 83 80 52 49
              </a>

              <a
                href="mailto:centresabraham@gmail.com"
                className="block hover:text-brand transition-colors"
              >
                centresabraham@gmail.com
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-sm font-semibold text-text text-center uppercase tracking-wider mb-4">
              Localisation
            </h4>

            <div className="rounded-lg overflow-hidden shadow-sm border border-border w-[200px] h-[150px] m-auto">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-5.1413%2C41.3338%2C9.5619%2C51.0891&layer=mapnik&marker=46.7111%2C2.2104"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 sm:mx-30 py-7 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Centres Abraham. Tous droits réservés.
          </p>

          <Link
            href="/mentions-legales"
            className="text-sm text-muted hover:text-brand transition-colors"
          >
            Mentions légales
          </Link>
        </div>

    </footer>
  )
}