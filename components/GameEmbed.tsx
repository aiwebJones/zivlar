'use client'

import { useEffect, useState } from 'react'

export default function GameEmbed() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <section id="game-embed" className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Play Now!
        </h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow-2xl overflow-hidden relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200/75 backdrop-blur-sm z-10 transition-opacity duration-300 ease-in-out">
              <svg 
                className="animate-spin h-10 w-10 text-blue-600 mb-4" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="text-gray-700 font-medium">Loading the Whimsy... Please wait!</p>
            </div>
          )}
          <iframe
            className="w-full h-full absolute inset-0 z-0"
            src="about:blank" // TODO: Replace with your actual game URL
            title="AI Whimsy Gallery Interactive Game"
            frameBorder="0"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            onLoad={handleIframeLoad}
          >
            <div className="flex items-center justify-center h-full p-8">
              <p className="text-gray-600 text-center">
                Your game requires a modern browser with iframe support.
                <br /><br />
                (This is where the "AI Whimsy Gallery" game will be embedded.)
              </p>
            </div>
          </iframe>
        </div>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Game loading in the window above. If it doesn&apos;t start, please ensure JavaScript is enabled and try refreshing.
        </p>
      </div>
    </section>
  )
}