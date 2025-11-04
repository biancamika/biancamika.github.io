import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Bianca Aguilar'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-black relative">
        {/* Background gradient */}
        <div tw="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"></div>
        
        {/* Content */}
        <div tw="flex flex-col items-center justify-center text-center px-12 relative z-10">
          <h1 tw="text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
            {title}
          </h1>
          <p tw="text-2xl text-gray-300 mb-8">
            Cultivating budding ideas and minds through design and research
          </p>
          <div tw="flex items-center text-gray-400 text-xl">
            <span tw="mr-2">🌱</span>
            <span>Bianca Aguilar</span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div tw="absolute top-10 right-10 w-24 h-24 bg-pink-500/30 rounded-full"></div>
        <div tw="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/30 rounded-full"></div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
