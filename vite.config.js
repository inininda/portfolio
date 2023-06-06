import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import WindiCSS from 'vite-plugin-windicss'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import nodePolyfills from 'rollup-plugin-polyfill-node'

import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const config = defineConfig({
    plugins: [
      vue(),
      vuetify({ autoImport: true }),
      eslintPlugin(),
      WindiCSS(),
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      }),
      nodePolyfills({
        protocolImports: true
      })
    ],
    build: {
      rollupOptions: {
        plugins: [nodePolyfills()]
      },
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        util: 'rollup-plugin-node-polyfills/polyfills/util',
        buffer: 'Buffer',
        stream: 'rollup-plugin-node-polyfills/polyfills/stream'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import 'vuetify/lib/styles/settings/_variables.scss';
            @import './src/assets/icomoon/variables';
            @import './src/styles/variables';
            @import './src/styles/mixins';
            @import './src/styles/functions';
            @import 'compass-mixins/lib/compass/css3';
            @import 'compass-mixins/lib/animation/core';
            @import 'compass-mixins/lib/animation/animate';
          `
        }
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true
          })
        ]
      }
    }
  })

  if (process.env.VITE_APP_ENV === 'production') {
    config.esbuild = {}
    config.esbuild.drop = ['console', 'debugger']
    config.base = 'https://inininda.github.io/portfolio/'
  }

  return config
}
