import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraModeProvider } from '@/components/ui/color-mode'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={defaultSystem}>
            <div>test</div>
        </ChakraProvider>
    </StrictMode>
);
