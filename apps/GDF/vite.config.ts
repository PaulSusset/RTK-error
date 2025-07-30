import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ loose: true }),
    basicSsl(),
    // splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      // // src: 'src/*',
      // '~': 'node_modules',
      // components: 'src/components',
      // routes: 'src/routes',
      // assets: 'src/assets',
      // hooks: 'src/hooks',
      // modules: 'src/modules',
      // '@myTypes': path.resolve(__dirname, '../../shared/src/types'),
      // '@redux': path.resolve(__dirname, '../../shared/src/redux'),
      // '@components': path.resolve(__dirname, '../../shared/src/components'),
      // '@utils': path.resolve(__dirname, '../../shared/src/utils'),
      // '@hooks': path.resolve(__dirname, '../../shared/src/hooks'),
    },
  },
  server: {
    // fs: { allow: ['..', './'], strict: false },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@mui')) {
              /**
               * Problème de séquence dans la construction. À investiguer
               */
              // if (id.includes('@mui/material')) {
              //   return '@mui/material'
              // }
              // if (id.includes('@mui/icons-material')) {
              //   return '@mui/icons-material'
              // }
              if (id.includes('@mui/lab')) {
                return '@mui/lab'
              }
              if (id.includes('@mui/x-date-pickers')) {
                return '@mui/x-date-pickers'
              }
            }

            if (id.includes('ag-grid-community')) {
              return 'ag-grid-community'
            }
          }
        },
      },
    },
  },
})
