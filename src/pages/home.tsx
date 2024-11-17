import Navbar from "@/component/navbar.tsx";
import Footer from "@/component/footer.tsx";
import { Box } from "@chakra-ui/react";

function Home(){
    return(
        <Box>
            <Navbar/>
            <Footer/>
        </Box>
    )
}

export default Home;