import Navbar from "@/component/navbar.tsx";
import Footer from "@/component/footer.tsx";
import { Text, Flex, Heading, Box } from "@chakra-ui/react";

function Home(){
    return(
        <Flex
            direction="column">
            <Navbar/>

            <Flex
                direction="column"
                justify="center"
                alignItems="center"
                gap={12}>

                <Box
                    bg="orange.100"
                    borderRadius={"md"}
                    px={4} h={10}>
                    <Text
                        alignSelf="center"
                        justifyContent="center"
                        color="gray.800">
                        Hello, I'm a frontend developer based in Jakarta!
                    </Text>
                </Box>

                <Flex
                    direction="column">
                    <Heading
                        fontSize={24}>
                        Vincentius Devin Agung Oktara
                    </Heading>
                    <Text>
                        Digital Craftsman ( Developer / Designer )
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    alignItems={"center"}>
                    <Box
                        bg={'orange.100'}
                        borderRadius={"md"}
                        px={4} h={6}>
                        <Text
                            color={"gray.800"}>
                            About.
                        </Text>
                    </Box>
                    <Text
                        noOfLines={240}
                        width="30%">
                        I'm constantly diving into the fascinating world of algorithms, data structures, and programming languages. My mind acts like a sophisticated compiler, breaking down complex problems into manageable parts and translating them into elegant lines of code. With each line I write, I'm laying the groundwork for digital innovation, blending logic and creativity to craft solutions that push the boundaries of what's possible.
                    </Text>
                </Flex>

            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Home;