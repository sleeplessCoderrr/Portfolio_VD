import { Flex, Text } from "@chakra-ui/react";

function Footer(){
    return(
        <Flex direction="row" justify="center" alignItems="center">
            <Text> © {new Date().getFullYear()} Vincent Devin. All rights reserved.</Text>
        </Flex>
    );
}

export default Footer;