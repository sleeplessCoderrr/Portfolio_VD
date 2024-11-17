import { Flex, Heading, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon} from "@chakra-ui/icons";

function Navbar() {
    const { toggleColorMode }  = useColorMode();
    const logoSrc = useColorModeValue('../../public/logo_light.png', '../../public/logo_dark.png');
    const Icon = useColorModeValue(MoonIcon, SunIcon);

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
                        src={logoSrc}
                        alt="VD"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <Heading fontFamily={"mono"}>
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

            <Flex justify={"right"}>
                <Button onClick={toggleColorMode}>
                    <Icon/>
                </Button>
            </Flex>
        </Flex>
    );
}

export default Navbar;
