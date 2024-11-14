import { Flex, Heading, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const hoverColor = useColorModeValue("teal.600", "teal.300");

    const logoSrc = useColorModeValue("../../public/logo_light.png", "../../public/logo_dark.png");

    return (
        <Flex direction={"row"} justify={"center"} gap={24} marginTop={8}>
            <Flex gap={8} direction={"row"} justify={"center"} align={"center"}>
                <Flex justify={"center"} align={"center"}>
                    <img
                        src={logoSrc}
                        alt="VD"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <Heading color={textColor}>Vincent Devin</Heading>
                </Flex>
                <Text color={textColor} _hover={{ color: hoverColor }}>Works</Text>
                <Text color={textColor} _hover={{ color: hoverColor }}>Wallpaper</Text>
                <Text color={textColor} _hover={{ color: hoverColor }}>Source</Text>
            </Flex>

            <Flex>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
        </Flex>
    );
}

export default Header;
