// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       keyframes: {
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//       animation: {
//         scroll: 'scroll 30s linear infinite',
//       },
//     },
//   },
//   plugins: [
//     react(),
//     tailwindcss(),
//     require('tailwind-scrollbar-hide'),
//   ],
  
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
