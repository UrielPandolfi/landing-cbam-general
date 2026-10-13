import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coldwell Banker Franquicias | Tu próximo gran negocio",
  description: "Explora tu próxima franquicia: mercado internacional, propiedades premium, exclusivas y acompañamiento. Construye tu escenario y prepara una sesión con Coldwell Banker.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased">{children}</body>
    </html>
  );
}
