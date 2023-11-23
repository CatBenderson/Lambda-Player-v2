import { Box, Card, Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

export default function CancionItem() {
    return (
        <Box position="relative" w="100%" marginY={2}>
            <Card h="10vh" w="100%" minWidth="205px" minHeight="93px" borderRadius="35px" p={4}>
                <Grid templateColumns='repeat(10, 1fr)' gap={0}>
                    <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' bg='tomato' marginStart={3}>
                        <Center>
                            <Image
                                h="10"
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhgym4kW-5jjHNHZGCngIruP-9rhgz42PDw'></Image>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={8} h='10'>
                        <Box>
                            <Heading size="md"> Titulo de la canción </Heading>
                        </Box>
                        <Box>
                            <Heading size="sm"> Artista </Heading>
                        </Box>
                    </GridItem>
                </Grid>
            </Card>
        </Box>
    );
}