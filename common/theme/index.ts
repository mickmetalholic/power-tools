import { createTheme } from '@mui/material/styles'
import onedark from './colorScheme/onedark'

export const lightTheme = createTheme()

export const darkTheme = createTheme({
  palette: onedark,
})
