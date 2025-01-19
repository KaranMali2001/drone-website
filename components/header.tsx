import { Phone, Mail } from 'lucide-react'
import Link from "next/link"

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            DroneX
          </span>
        </Link>
        <div className="flex items-center space-x-6 text-sm">
          <a href="mailto:contact@dronex.com" className="flex items-center space-x-2 hover:text-sky-500 transition-colors">
            <Mail className="h-4 w-4" />
            <span>contact@dronex.com</span>
          </a>
          <a href="tel:833.814.4413" className="flex items-center space-x-2 hover:text-sky-500 transition-colors">
            <Phone className="h-4 w-4" />
            <span>833.814.4413</span>
          </a>
        </div>
      </div>
    </div>
  )
}

