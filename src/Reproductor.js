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
} from '@chakra-ui/react';

export default function Reproductor() {
    const inicio = "0:00";
    const fin = "1:30";
    const duracion = 90;

    return (
        <Box p={30}>
            <Center>
                <Card w="100vw" h="18vh" borderRadius="35px" minHeight="90px">
                    <CardBody>
                        <Center h="50%">
                            <Text as="b" fontSize="lg">
                                {inicio}
                            </Text>
                            <Slider w="80vw" marginX={5} min={0} max={duracion} colorScheme="orange" defaultValue={45}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                            <Text as="b" fontSize="lg">
                                {fin}
                            </Text>
                        </Center>
                        <Center h="50%">
                            <Button variant='ghost' marginX="1vw">|◀</Button>
                            <Button variant='ghost' marginX="1vw">▶</Button>
                            <Button variant='ghost' marginX="1vw">▶|</Button>
                        </Center>
                    </CardBody>
                </Card>
            </Center>
        </Box>
    );
}
