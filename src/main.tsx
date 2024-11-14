import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript, extendTheme } from '@chakra-ui/react'
import App from './App.tsx'

const theme = extendTheme ({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true,
    },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
