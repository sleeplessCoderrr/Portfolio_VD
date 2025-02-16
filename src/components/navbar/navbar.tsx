import { ColorModeButton } from '@/components/ui/color-mode';
import { Flex, Heading, Text } from '@chakra-ui/react';

function Navbar() {
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

                <Flex justify={"center"} align={"center"} gap={1}>
                    <Heading fontFamily={"mono"} fontSize={24}>
                        Vincent Devin
                    </Heading>
                </Flex>

                <Text fontSize={18} _hover={{ color: 'teal.500' }}>
                    Wallpaper
                </Text>
                <Text fontSize={18} _hover={{ color: 'teal.500' }}>
                    Works
                </Text>
                <Text fontSize={18} _hover={{ color: 'teal.500' }}>
                    Source
                </Text>
            </Flex>

            <Flex justify={"right"}>
                <ColorModeButton />
            </Flex>

        </Flex>
    );
}

export default Navbar;
