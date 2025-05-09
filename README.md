<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Whimsy Gallery - Sketch Art from Creative AI Prompts!</title>
    <meta name="description" content="Unleash your inner artist with AI Whimsy Gallery! Get unique AI-generated prompts and sketch hilarious or imaginative art. Share your creations and explore a gallery of digital whimsy.">
    <link rel="canonical" href="https://www.zivlar.com/">

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png"> <link rel="manifest" href="/site.webmanifest"> <meta property="og:title" content="AI Whimsy Gallery - Sketch Art from Creative AI Prompts!">
    <meta property="og:description" content="Unleash your inner artist with AI Whimsy Gallery! Get unique AI-generated prompts and sketch hilarious or imaginative art. Share your creations and explore a gallery of digital whimsy.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.zivlar.com/">
    <meta property="og:image" content="https://www.zivlar.com/og-image.jpg"> <meta property="og:image:alt" content="A preview image of AI Whimsy Gallery gameplay or logo.">
    <meta property="og:site_name" content="AI Whimsy Gallery">
    <meta property="og:locale" content="en_US"> <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="AI Whimsy Gallery - Sketch Art from Creative AI Prompts!">
    <meta name="twitter:description" content="Unleash your inner artist with AI Whimsy Gallery! Get unique AI-generated prompts and sketch hilarious or imaginative art.">
    <meta name="twitter:image" content="https://www.zivlar.com/twitter-card-image.jpg"> <meta name="twitter:image:alt" content="A preview image of AI Whimsy Gallery gameplay or logo.">
    <script src="https://cdn.tailwindcss.com?plugins=typography,aspect-ratio"></script>
    <style>
        /* For better headline balancing on browsers that support it */
        h1, h2 {
            text-wrap: balance;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 font-sans antialiased">

    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="https://www.zivlar.com/" class="text-2xl font-bold text-gray-900">AI Whimsy Gallery</a>
            </div>
    </header>

    <main>
        <section class="py-16 md:py-24 text-center bg-white">
            <div class="container mx-auto px-6">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    AI Whimsy Gallery
                </h1>
                <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Unleash your creativity by sketching imaginative art from hilariously absurd AI-generated prompts!
                </p>
                <a href="#game-embed"
                   class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out">
                    Start Creating
                </a>
            </div>
        </section>

        <section id="game-embed" class="py-12 md:py-20">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">Play Now!</h2>
                <div class="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow-2xl overflow-hidden relative">
                    <div id="iframe-loader" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-200/75 backdrop-blur-sm z-10 transition-opacity duration-300 ease-in-out">
                        <svg class="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p class="text-gray-700 font-medium">Loading the Whimsy... Please wait!</p>
                    </div>
                    <iframe
                        id="game-iframe"
                        class="w-full h-full absolute inset-0 z-0"
                        src="about:blank" /* TODO: Replace with your actual game URL on zivlar.com or elsewhere */
                        title="AI Whimsy Gallery Interactive Game"
                        frameborder="0"
                        allowfullscreen
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        onload="document.getElementById('iframe-loader').style.opacity='0'; setTimeout(() => { document.getElementById('iframe-loader').style.display='none'; }, 300);"
                    >
                        <div class="flex items-center justify-center h-full p-8">
                            <p class="text-gray-600 text-center">
                                Your game requires a modern browser with iframe support.
                                <br><br>
                                (This is where the "AI Whimsy Gallery" game will be embedded.)
                            </p>
                        </div>
                    </iframe>
                </div>
                 <p class="text-center text-gray-500 mt-4 text-sm">Game loading in the window above. If it doesn't start, please ensure JavaScript is enabled and try refreshing.</p>
            </div>
        </section>

        <section class="py-12 md:py-20 bg-gray-100">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="text-blue-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.375a6.375 6.375 0 0 0 6.375-6.375h.038V10.5a8.25 8.25 0 0 0-16.5 0v1.5H2.625A6.375 6.375 0 0 0 9 18.375m3 0V10.5m0 7.875M3 10.5h18M9 18.375a6.375 6.375 0 0 0 3-5.625m3 5.625a6.375 6.375 0 0 1-3-5.625m0 0V10.5m0 2.25V10.5m0 2.25c0 1.804.735 3.46 1.925 4.675M12 12.75c-.665 0-1.285-.144-1.845-.411M9.925 10.5A6.375 6.375 0 0 0 12 12.75m5.075-2.25A6.375 6.375 0 0 1 12 12.75" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Spark Your Imagination</h3>
                        <p class="text-gray-600">Receive a unique, quirky prompt generated by our creative AI. Think "a cat surfing on a rainbow" or "a clock melting like ice cream."</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                         <div class="text-blue-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">2. Sketch Your Vision</h3>
                        <p class="text-gray-600">You get a simple canvas and limited time to bring the AI's vision to life. No artistic skills required – it's all about interpretation!</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div class="text-blue-600 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 0H11.55M12.75 6H16.5m0 0V2.25m0 3.75L13.5 4.5M12.75 6v4.5m0 0H8.25m4.5 0L12 12.75M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-18 0L5.25 9.75M18.75 16.5l-3-3.75m0 0L12.75 9.75M12.75 9.75L9.75 12.75" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">3. Share & Discover</h3>
                        <p class="text-gray-600">Submit your creation to the public gallery. Browse hilarious and inventive artworks from players worldwide and see how they interpreted similar prompts!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 md:py-20 bg-white">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why You'll Love AI Whimsy Gallery</h2>
                <div class="max-w-3xl mx-auto space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Endless Fun & Creativity</h3>
                            <p class="text-gray-600">With AI generating new, unpredictable prompts, the creative challenges never end. Every session is a fresh adventure!</p>
                        </div>
                    </div>
                     <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375.75.375.336.375.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Rediscover Simple Joy</h3>
                            <p class="text-gray-600">Tap into your inner child and enjoy the pure fun of drawing, combined with a dash of absurd humor. It's liberating!</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 text-blue-600 mt-1">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5S19.5 13.892 19.5 9.75 16.142 2.25 12 2.25Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75a2.25 2.25 0 0 1-2.248-2.216c0-.429.163-.847.437-1.164 1.089-1.265 2.903-1.265 3.992 0 .274.317.437.735.437 1.164A2.25 2.25 0 0 1 12 12.75Z" />
                           </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Connect, Share & Laugh</h3>
                            <p class="text-gray-600">Easily share your masterpieces (or happy accidents!) on social media. See what wacky ideas your friends come up with and share a laugh.</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 text-blue-600 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">No Pressure, Just Play</h3>
                            <p class="text-gray-600">Perfect for a quick break, a dose of creativity, or a good laugh. Easy to pick up, and delightfully engaging!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="border-t border-gray-200 bg-gray-100">
        <div class="container mx-auto px-6 py-8 text-center">
            <p class="text-gray-600">&copy; <script>document.write(new Date().getFullYear())</script> AI Whimsy Gallery (Operated by Zivlar.com). All rights reserved.</p>
            <p class="text-sm text-gray-500 mt-1">Crafted with pixels and prompts.</p>
            <div class="mt-4 space-x-4">
                <a href="#privacy-policy" class="text-xs text-gray-500 hover:text-blue-600">Privacy Policy</a>
                <a href="#terms-of-service" class="text-xs text-gray-500 hover:text-blue-600">Terms of Service</a>
            </div>
        </div>
    </footer>

</body>
</html>
