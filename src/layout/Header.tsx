import { Flex, Heading, Text, Button } from '@chakra-ui/react'
import {useState} from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    return (
        <Flex
            position={"static"}
            direction={"row"}
            justify={"center"}
            gap={24}
            marginTop={8}>
            <Flex
                gap={8}
                direction={"row"}
                justify={"right"}
                align={"center"}>
                <Flex
                    justify={"center"}
                    align={"center"}
                    gap={2}>
                    <img
                        src={'../../public/logo_light.png'}
                        alt="VD"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <Heading
                        fontFamily={"mono"}>
                        Vincent Devin
                    </Heading>
                </Flex>
                <Text
                    _hover={{ color: 'teal.500' }}>
                    Wallpaper
                </Text>
                <Text
                    _hover={{ color: 'teal.500' }}>
                    Works
                </Text>
                <Text
                    _hover={{ color: 'teal.500' }}>
                    Source
                </Text>
            </Flex>

            <Flex
                justify={"right"}>
                <Button onClick={() => {toggleDarkMode()}}>
                    Switch to {darkMode ? "Dark" : "Light"} Mode
                </Button>
            </Flex>
        </Flex>

    );
}

export default Header;
