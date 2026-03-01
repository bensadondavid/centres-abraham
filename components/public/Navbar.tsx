"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type NavItem = { name: string; href: string }

export default function NavBar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation: NavItem[] = [
    { name: "Accueil", href: "/" },
    { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
    { name: "Comment ça fonctionne", href: "/comment-ca-fonctionne" },
    { name: "Pour les patients", href: "/pour-les-patients" },
    { name: "Pourquoi nous choisir", href: "/pourquoi-nous-choisir" },
    { name: "Médecins partenaires", href: "/medecins-partenaires" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  const scrollToTop = ()=>(window.scrollTo({top : 0, behavior : "smooth"}))

  const isActive = (href: string) => pathname === href

  // “soft bg” basé sur l’alpha dans :root
      const activeClass =
        "text-[#006747] bg-[#006747]/10"

      const inactiveClass =
        "text-muted hover:text-brand hover:bg-surface-2"

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-row gap-2 items-center" onClick={scrollToTop}>
              <Image
                src="/logo-centres-abraham.webp"
                alt="logo-centres-abraham"
                width={40}
                height={40}
                priority
              />
              <p className="font-bold">Centres Abraham</p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigation.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive(item.href)
                      ? activeClass
                      : inactiveClass,
                  ].join(" ")}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}

              {/* “Plus” */}
              <div className="relative group">
                <button
                  type="button"
                  className="px-4 py-2 rounded-full text-sm font-medium text-muted hover:text-brand hover:bg-surface-2 transition-all duration-300"
                >
                  Plus
                </button>

                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-surface rounded-2xl shadow-xl border border-border py-2 min-w-50">
                    {navigation.slice(5).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          "block px-4 py-2 text-sm transition-colors",
                          isActive(item.href)
                            ? activeClass
                            : inactiveClass
                        ].join(" ")}
                        onClick={scrollToTop}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0183805249"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand text-brand-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                01 83 80 52 49
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-2 transition-colors"
                aria-label="Ouvrir le menu"
              >
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-muted" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-muted" />
                  </motion.div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="xl:hidden overflow-hidden bg-surface border-t border-border"
            >
              <div className="px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {setMobileMenuOpen(false) ; scrollToTop() }}
                    className={[
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? activeClass
                        : inactiveClass
                    ].join(" ")}
                  >
                    {item.name}
                  </Link>
                ))}

                <a
                  href="tel:0183805249"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-brand text-brand-foreground rounded-xl text-sm font-medium mt-4"
                >
                  <Phone className="w-4 h-4" />
                  01 83 80 52 49
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      </>
  )
}