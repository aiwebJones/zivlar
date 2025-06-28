export default function HeroSection() {
  const scrollToGame = () => {
    const gameSection = document.getElementById('game-embed')
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 text-center bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Whimsy Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Unleash your creativity by sketching imaginative art from hilariously absurd AI-generated prompts!
        </p>
        <button
          onClick={scrollToGame}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Creating
        </button>
      </div>
    </section>
  )
}