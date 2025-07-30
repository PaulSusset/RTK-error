import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
// import basicSsl from '@vitejs/plugin-basic-ssl'

import * as node_fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // basicSsl(),
    // splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      // src: 'src/*',
      // '~': 'node_modules',
      // components: 'src/components',
      // assets: 'src/assets',
      // // Je ne sais pas pourquoi @ est nécessaire
      // '@hooks': 'src/hooks/',
      // utils: 'src/utils',
      // redux: 'src/redux',
      // myTypes: path.resolve(__dirname, 'src/types'),
    },
  },
})
