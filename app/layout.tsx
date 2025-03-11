import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'San Valentine',
  description: 'Created by Alejandro D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <link rel="icon"  href="https://i.gifer.com/hcA.gif" />
      <body>{children}</body>
    </html>
  )
}
