import { PaletteOptions } from '@mui/material'

export enum ONE_DARK {
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
  Comment_Grey = '#5c6370'
}

const options: PaletteOptions = {
  mode: 'dark',
  error: {
    main: ONE_DARK.Light_Red,
    dark: ONE_DARK.Dark_Red,
  },
}

export default options
