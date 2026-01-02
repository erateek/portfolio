export default function manifest() {
  return {
    name: 'إراتيك - وكالة رقمية',
    short_name: 'إراتيك',
    description: 'وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة في اليمن وصنعاء',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

