import { Plugin } from '@nuxt/types'

interface UtilConfig {
  icon?: string
  title: string
  to?: string
  description?: string
  disabled?: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $utilConfigList: UtilConfig[]
  }
}

const utilConfigList: UtilConfig[] = [
  {
    icon: 'mdi-timer-outline',
    title: 'Timestamp Converter',
    to: '/converter/timestampconverter',
    description: 'Convert timestamp to human-readable date and vice versa',
  },
  {
    icon: 'mdi-typewriter',
    title: 'Typescript Interface Generator',
    to: '/generator/tsinterfacegenerator',
    description: 'Generate TypeScript interface from JSON',
  },
  {
    title: 'Color Converter',
    disabled: true,
    description: 'Comming soon...',
  },
  {
    title: 'JSON/XML/YAML Coverter',
    disabled: true,
    description: 'Comming soon...',
  },
  {
    title: 'URL Parser',
    disabled: true,
    description: 'Comming soon...',
  },
  {
    title: 'URL Encoder/Decoder',
    disabled: true,
    description: 'Comming soon...',
  },
  {
    title: 'JSON Formatter',
    disabled: true,
    description: 'Comming soon...',
  },
  {
    title: 'Text Diff',
    disabled: true,
    description: 'Comming soon...',
  },
]

const utilConfigPlugin: Plugin = (_, inject) => {
  inject('utilConfigList', utilConfigList)
}

export default utilConfigPlugin
