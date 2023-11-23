import { Box, Card, Center, Grid, GridItem, Heading, Image, Flex } from "@chakra-ui/react";

export default function CancionItem() {
    return (
        <Box position="relative" w="100%" marginY={2}>
            <Card h="10vh" w="100%" minWidth="205px" minHeight="93px" borderRadius="35px" p={4}>
                <Grid templateColumns='repeat(10, 1fr)' gap={0}>
                    <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' marginStart={3}>
                        <Flex align="center" justify="center" h="100%">
                            <Image
                                borderRadius='full'
                                h="8"
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhgym4kW-5jjHNHZGCngIruP-9rhgz42PDw'
                            />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={8} h='10'>
                        <>
                            <Heading size="md"> Título de la canción </Heading>
                            <Heading size="sm"> Artista </Heading>
                        </>
                    </GridItem>
                </Grid>
            </Card>
        </Box>
    );
}
