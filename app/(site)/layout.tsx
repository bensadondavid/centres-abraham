import type { Metadata } from "next";
import '@/app/globals.css'
import NavBar from '@/components/public/Navbar'
import Footer from "@/components/public/Footer";
import WhatsappBtn from "@/components/ui/WhatsappBtn";


export const metadata: Metadata = {
  title: "Centres Abraham",
  description: "Centre de circoncision",
  icons : '/logo-centres-abraham.webp'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <NavBar />
          <main>
            {children}
          </main>
          <WhatsappBtn />
        <Footer />
      </body>
    </html>
  );
}
