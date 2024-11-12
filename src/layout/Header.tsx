import { Button, Flex, Heading, Text } from "@chakra-ui/react";

function Header(){
    return (
        <Flex direction={"row"} justify={"center"} gap={24} marginTop={8}>
            <Flex gap={8} direction={"row"} justify={"center"} align={"center"}>
                <Heading>Vincent Devin</Heading>
                <Text _hover={{color: "teal.500"}}>Works</Text>
                <Text _hover={{color: "teal.500"}}>Wallpaper</Text>
                <Text _hover={{color: "teal.500"}}>Source</Text>
            </Flex>

            <Flex>
                <Button>
                    <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-onkibi" aria-hidden="true"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></g></svg>
                </Button>
            </Flex>
        </Flex>
    );
}

export default Header; 