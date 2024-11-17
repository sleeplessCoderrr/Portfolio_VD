import { Button, useColorMode } from '@chakra-ui/react';

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Button onClick={toggleColorMode}>
                Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
        </div>
    );
}

export default App;
