import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agranel Alimentos',
  description: 'Created with Tomas FErrer',
  generator: 'Tomas Ferrer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
