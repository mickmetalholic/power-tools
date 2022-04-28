import { Plugin } from '@nuxt/types'

// https://github.com/joshdick/onedark.vim/blob/main/colors/onedark.vim
enum ONE_DARK {
  Black = '#282c34',
  White = '#abb2bf',
  Light_Red = '#e06c75',
  Dark_Red = '#be5046',
  Green = '#98c379',
  Light_Yellow = '#e5c07b',
  Dark_Yellow = '#d19a66',
  Blue = '#61afef',
  Magenta = '#c678dd',
  Cyan = '#56b6c2',
  Gutter_Grey = '#4b5263',
  Comment_Grey = '#5c6370',
}

declare module 'vue/types/vue' {
  interface Vue {
    $themeOneDark: ONE_DARK
    $colorScheme: ONE_DARK
  }
}

const colorSchemePlugin: Plugin = (_, inject) => {
  inject('themeOneDark', ONE_DARK)
  inject('colorScheme', ONE_DARK)
}

export default colorSchemePlugin
