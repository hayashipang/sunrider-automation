import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sunrider Automation - AI & 自動化整合解決方案',
  description: '專業的AOI、AI、機器手臂、軟體整合服務，提供完整的自動化解決方案',
  keywords: 'AOI, AI, 機器手臂, 自動化, 軟體整合, 視覺檢測',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
