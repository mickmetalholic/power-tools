import { Plugin } from '@nuxt/types'
import { copyTextToClipboard } from './copyTextToClipboard'
import { getLocalStorage, setLocalStorage } from './localStorage'

interface Utils {
  copyTextToClipboard: typeof copyTextToClipboard
  getLocalStorage: typeof getLocalStorage
  setLocalStorage: typeof setLocalStorage
}

declare module 'vue/types/vue' {
  interface Vue {
    $utils: Utils
  }
}

const utilsPlugin: Plugin = (_, inject) => {
  inject('utils', {
    copyTextToClipboard,
    getLocalStorage,
    setLocalStorage,
  })
}

export default utilsPlugin
