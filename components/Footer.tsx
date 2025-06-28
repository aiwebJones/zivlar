'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-gray-600">
          &copy; {currentYear} AI Whimsy Gallery (Operated by Zivlar.com). All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Crafted with pixels and prompts.
        </p>
        <div className="mt-4 space-x-4">
          <a 
            href="#privacy-policy" 
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a 
            href="#terms-of-service" 
            className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}