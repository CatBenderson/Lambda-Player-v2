import {
    Box,
    Card,
    CardBody,
    Center,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,
    Heading,
} from '@chakra-ui/react';

export default function Reproductor() {
    const inicio = "0:00";
    const fin = "1:30";
    const duracion = 90;

    return (
        <Box boxShadow='dark-lg' borderRadius="35px" m={30} >
            <Center>
                <Card w="100vw" h="18vh" borderRadius="35px" minHeight="90px" >
                    <CardBody>
                        <Center h="50%">
                            <Text color="#332D27" as="b" fontSize="lg">
                                {inicio}
                            </Text>
                            <Slider w="80vw" marginX={5} min={0} max={duracion} defaultValue={45}>
                                <SliderTrack>
                                    <SliderFilledTrack backgroundColor="#ED8936" />
                                </SliderTrack>
                                <SliderThumb backgroundColor="#ED8936" />
                            </Slider>
                            <Text color="#332D27" as="b" fontSize="lg">
                                {fin}
                            </Text>
                        </Center>
                        <Center h="50%" paddingX="2vw">
                            <Center w="20%">
                                <Heading size="md" color="#332D27">♫</Heading>
                                <Slider w="90%" marginX={2} min={0} max={100} defaultValue={50}>
                                    <SliderTrack>
                                        <SliderFilledTrack backgroundColor="#ED4937" />
                                    </SliderTrack>
                                    <SliderThumb backgroundColor="#ED4937" />
                                </Slider>
                                <Heading size="sm" color="#332D27">100</Heading>
                            </Center>
                            <Center w="60%">
                                <Button variant='ghost' marginX="1vw" color="#332D27">|◀</Button>
                                <Button variant='ghost' marginX="1vw" color="#332D27">▶</Button>
                                <Button variant='ghost' marginX="1vw" color="#332D27">▶|</Button>
                            </Center>
                            <Box w="20%"></Box>
                        </Center>
                    </CardBody>
                </Card>
            </Center>
        </Box>
    );
}
