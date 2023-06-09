import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Footer'
import NoticeSection from './components/NoticeSection'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
      <NoticeSection/>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
