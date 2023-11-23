import { CalendarIcon, InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Center, Heading, Image, Text } from "@chakra-ui/react";

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
                    <Center >
                        <Box display="block" >
                            <Box display="flex">
                                <InfoOutlineIcon />
                                <Text fontSize='2xl' as="b" marginX="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Album</Text>
                                <Text fontSize='2xl' marginLeft="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Nombre del album</Text>
                            </Box>
                            <Box display="flex" >
                                <CalendarIcon />
                                <Text fontSize='2xl' as="b" marginX="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Año</Text>
                                <Text fontSize='2xl' marginLeft="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>2004</Text>
                            </Box>
                            <Box display="flex" >
                                <TimeIcon />
                                <Text fontSize='2xl' as="b" marginX="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>Duración</Text>
                                <Text fontSize='2xl' marginLeft="5%" css={{
                                    '@media screen and (max-width: 730px) , (max-height: 580px)': {
                                        fontSize: "20px"
                                    },
                                }}>3:00</Text>
                            </Box>
                        </Box>
                    </Center>
                </CardBody>
            </Card>
        </Box>
    );
}