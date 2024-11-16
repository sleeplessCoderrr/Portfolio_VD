import { Flex, Heading, Text, Button } from '@chakra-ui/react';

function Header() {
    return (
        <Flex direction={"row"} justify={"center"} gap={24} marginTop={8}>
            <Flex gap={8} direction={"row"} justify={"right"} align={"center"}>
                <Flex justify={"center"} align={"center"}>
                    <img
                        src={'../../public/logo_light.png'}
                        alt="VD"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <Heading>Vincent Devin</Heading>
                </Flex>
                <Text _hover={{ color: 'teal.500' }}>Wallpaper</Text>
                <Text _hover={{ color: 'teal.500' }}>Works</Text>
                <Text _hover={{ color: 'teal.500' }}>Source</Text>
            </Flex>

            <Flex justify={"right"}>
                <Button>
                    {/*<MoonIcon />*/}
                </Button>
            </Flex>
        </Flex>

    );
}

export default Header;
