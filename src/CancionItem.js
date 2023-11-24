import { AddIcon } from "@chakra-ui/icons";
import { Box, Card, Grid, GridItem, Heading, Image, Flex, AbsoluteCenter, Button } from "@chakra-ui/react";

export default function CancionItem() {
    const fuenteResponsivaT = {
        '@media screen and (max-width: 8px)': {
            fontSize: "16px",
        },
        '@media screen and (max-width: 715px)': {
            fontSize: "14px",
        },
        '@media screen and (max-width: 690px)': {
            fontSize: "12px",
        },
        '@media screen and (max-width: 623px)': {
            fontSize: "11px",
        },
    };

    return (
        <Box position="relative" w="100%" marginY={2}>
            <Card h="10vh" w="100%" minWidth="205px" minHeight="93px" borderRadius="35px" p={4} css={{
                boxShadow: '0 2px 7px #ED8936',
            }}>
                <Grid templateColumns='repeat(10, 1fr)' gap={0}  >
                    <GridItem colSpan={1} minWidth="10" marginStart={3}>
                        <AbsoluteCenter axis='vertical'>
                            <Flex align="center" justify="center">
                                <Image
                                    borderRadius='full'
                                    h="8"
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhgym4kW-5jjHNHZGCngIruP-9rhgz42PDw'
                                />
                            </Flex>
                        </AbsoluteCenter>
                    </GridItem>
                    <GridItem colSpan={7}  minWidth="70" >
                        <AbsoluteCenter axis='vertical'>
                            <Heading size="md" color="#332D27" css={fuenteResponsivaT}> Título de la canción  </Heading>
                            <Heading size="sm" color="#544C46"> Artista </Heading>
                        </AbsoluteCenter>
                    </GridItem>
                    <GridItem colSpan={1} minWidth="10" >
                        <AbsoluteCenter axis='vertical'>
                            <Button variant='ghost' color="#ED4937" size="lg" borderRadius="full">
                                <AddIcon></AddIcon>
                            </Button>
                        </AbsoluteCenter>
                    </GridItem>
                    <GridItem colSpan={1} minWidth="10">
                        <AbsoluteCenter axis='vertical'>
                            <Button variant='ghost' color="#ED4937" size="lg" borderRadius="full">❤</Button>
                        </AbsoluteCenter>
                    </GridItem>
                </Grid>
            </Card>
        </Box>
    );
}
