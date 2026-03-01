"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Send } from "lucide-react"

type FormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
  privacyAccepted: boolean
}

const initialState: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  privacyAccepted: false,
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    return (
      formData.firstName.trim().length > 0 &&
      formData.lastName.trim().length > 0 &&
      formData.phone.trim().length > 0 &&
      isValidEmail(formData.email) &&
      formData.message.trim().length > 0 &&
      formData.privacyAccepted
    )
  }, [formData])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!canSubmit) {
      setError("Merci de compléter tous les champs et d’accepter la politique de confidentialité.")
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          privacyAcceptedAt: new Date().toISOString(), // preuve de consentement
          privacyPolicyVersion: "1.0", // optionnel
        }),
      })

      if (!res.ok) throw new Error("Request failed")

      setSuccess(true)
      setFormData(initialState)
      setTimeout(() => setSuccess(false), 6000)
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {success && (
        <div className="mb-6 p-4 rounded-xl bg-brand-soft border border-border text-brand">
          Merci ! Votre message a été envoyé avec succès.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-surface-2 border border-border text-text">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Prénom</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
              autoComplete="given-name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Nom</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Téléphone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
            autoComplete="tel"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        {/* RGPD */}
        <div className="flex items-start gap-3 pt-2">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-brand"
            required
          />
          <label htmlFor="privacyAccepted" className="text-sm text-muted leading-relaxed">
            J’accepte la{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-brand underline hover:opacity-80"
              target="_blank"
            >
              politique de confidentialité
            </Link>{" "}
            et le traitement de mes données personnelles.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !canSubmit}
          className="w-full h-12 bg-brand text-brand-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? (
            "Envoi en cours..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </>
  )
}