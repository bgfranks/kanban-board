import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import TopNav from './_components/Navigation/TopNav'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kanban',
  description: 'NextJS Kanban board application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} bg-black text-white`}>
        <TopNav />
        {children}
      </body>
    </html>
  )
}
