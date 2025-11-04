export default function manifest() {
  return {
    name: 'Bianca Aguilar - Portfolio',
    short_name: 'Bianca Aguilar',
    description: 'Cultivating budding ideas and minds through design and research.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon?<generated>',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon?<generated>',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}