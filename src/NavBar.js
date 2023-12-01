import { Box, Heading, Grid, GridItem, AbsoluteCenter, Text } from '@chakra-ui/react'
import ModalComandos from "./ModalComandos";

export default function NavBar() {
    return (
        <Box width="100vw" backgroundColor="#332D27" marginBottom={2}>
            <Grid p="1%" templateColumns='repeat(10, 1fr)' gap={0}>
                <GridItem colSpan={8} >                
                        <Heading size="2xl" color="white" >LambdaPlayer</Heading>                
                </GridItem>
                <GridItem colSpan={2} >            
                        <ModalComandos />
                </GridItem>
            </Grid>
        </Box>
    );
}