import { CalendarIcon, InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Center, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function Song() {
    return (
        <Box position="relative" marginRight={30} w="40%">
            <Card h="61vh" w="100%" minWidth="205px" minHeight="360px" borderRadius="35px">
                <CardBody >
                    <Center>
                        <Box>
                            <Image
                                minWidth="100px"
                                minHeight="100px"
                                borderRadius='full'
                                height="24vh"
                                width="24vh"
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhgym4kW-5jjHNHZGCngIruP-9rhgz42PDw'
                            />
                        </Box>
                    </Center>
                    <Center>
                        <Heading as="b" size="xl">Título</Heading>
                    </Center>
                    <Center>
                        <Heading as="b" size="md">Artista</Heading>
                    </Center>
                    <Center>
                        <Grid templateColumns='repeat(10, 1fr)' gap={1}>
                            <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' >
                                <InfoOutlineIcon h='10' />
                            </GridItem>
                            <GridItem colSpan={4} h='10' >
                                <Text fontSize='2xl' as="b" marginX="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Album</Text>
                            </GridItem>
                            <GridItem colSpan={5} h='10' >
                                <Text fontSize='2xl' marginLeft="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Nombre del album</Text>
                            </GridItem>
                            <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' >
                            <CalendarIcon  h='10' />
                            </GridItem>
                            <GridItem colSpan={4} h='10' >
                                <Text fontSize='2xl' as="b" marginX="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Año</Text>
                            </GridItem>
                            <GridItem colSpan={5} h='10' >
                                <Text fontSize='2xl' marginLeft="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>2004</Text>
                            </GridItem>
                            <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' >
                            <TimeIcon  h='10' />
                            </GridItem>
                            <GridItem colSpan={4} h='10' >
                                <Text fontSize='2xl' as="b" marginX="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Duración</Text>
                            </GridItem>
                            <GridItem colSpan={5} h='10' >
                                <Text fontSize='2xl' marginLeft="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>3:00 min</Text>
                            </GridItem>
                        </Grid>
                    </Center>

                    
                </CardBody>
            </Card>
        </Box>
    );
}