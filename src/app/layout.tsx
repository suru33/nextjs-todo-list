import './globals.css'
import React from "react";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo App using next.js',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={`${inter.className} flex p-10 min-h-screen flex-col items-start bg-slate-800 text-gray-50`}>
    {children}
    </body>
    </html>
  )
}
