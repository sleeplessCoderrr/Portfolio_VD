import Navbar from "@/component/navbar.tsx";
import Footer from "@/component/footer.tsx";
import {Text, Flex, Heading, Box} from "@chakra-ui/react";

function Home(){
    return(
        <Flex
            direction="column"
            minHeight={"100vh"}>
            <Navbar/>

            <Flex
                flex={1}
                direction="column"
                justify="center"
                alignItems="center"
                gap={12}>

                <Box
                    bg="orange.100"
                    borderRadius={"md"}
                    px={4} h={8}>
                    <Text
                        fontSize={20}
                        color="gray.800">
                        Hello, I'm a frontend developer based in Jakarta!
                    </Text>
                </Box>

                <Flex
                    direction={"column"}>
                    <Heading
                        fontSize={32}>
                        Vincentius Devin Agung Oktara
                    </Heading>
                    <Text>
                        Digital Craftsman ( Developer / Designer )
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    width="25%"
                    gap={2}>
                    <Text
                        bg={'orange.100'}
                        color={"gray.800"}
                        width={"-webkit-fit-content"}
                        borderRadius={"md"}
                        padding={1}>
                        About.
                    </Text>
                    <Text
                        textAlign="justify">
                        I'm constantly diving into the fascinating world of algorithms, data structures, and programming languages. My mind acts like a sophisticated compiler, breaking down complex problems into manageable parts and translating them into elegant lines of code. With each line I write, I'm laying the groundwork for digital innovation, blending logic and creativity to craft solutions that push the boundaries of what's possible.
                    </Text>
                </Flex>

            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Home;