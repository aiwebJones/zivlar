import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          AI Whimsy Gallery
        </Link>
      </div>
    </header>
  )
}