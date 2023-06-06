import 'vuetify/styles'
import '@mdi/font/scss/materialdesignicons.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'default',
    themes: {
      variables: {},
      default: {
        dark: true,
        colors: {
          background: '#243040',
          primary: '#0BB07B',
          secondary: '#0F5EDD',
          accent: '#0F5EDD',
          warning: '#FFBF47',
          success: '#20CE50',
          error: '#FF5D5D'
        }
      }
    }
  }
})
