import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SideBar />
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 min-h-screen bg-slate-50">          
          <div className="pt-3">
            {children}
          </div>
        </div>
        {/* <script src="./node_modules/preline/dist/preline.js"></script> */}
      </body>
    </html>
  )
}