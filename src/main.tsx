import App from "./App.tsx";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
         <Provider>
            <ColorModeProvider>
                <App />
            </ColorModeProvider>
        </Provider>
    </StrictMode>
);
