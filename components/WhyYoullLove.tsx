export default function WhyYoullLove() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: "Endless Fun & Creativity",
      description: "With AI generating new, unpredictable prompts, the creative challenges never end. Every session is a fresh adventure!"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375.75.375.336.375.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
        </svg>
      ),
      title: "Rediscover Simple Joy",
      description: "Tap into your inner child and enjoy the pure fun of drawing, combined with a dash of absurd humor. It's liberating!"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5S19.5 13.892 19.5 9.75 16.142 2.25 12 2.25Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 0 1-2.248-2.216c0-.429.163-.847.437-1.164 1.089-1.265 2.903-1.265 3.992 0 .274.317.437.735.437 1.164A2.25 2.25 0 0 1 12 12.75Z" />
        </svg>
      ),
      title: "Connect, Share & Laugh",
      description: "Easily share your masterpieces (or happy accidents!) on social media. See what wacky ideas your friends come up with and share a laugh."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      ),
      title: "No Pressure, Just Play",
      description: "Perfect for a quick break, a dose of creativity, or a good laugh. Easy to pick up, and delightfully engaging!"
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why You&apos;ll Love AI Whimsy Gallery
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 text-blue-600 mt-1 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}