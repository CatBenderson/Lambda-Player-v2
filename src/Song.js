import { CalendarIcon, InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Center, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Duration } from "luxon";
import { useEffect, useState } from "react";

export default function Song({songProp}) {   
  const [song, setSong] = useState({
    titulo: "",
    artista: "",
    album: "",
    anio: "",
    duracion: 0.0,
    portada: "",
    src: ""});

  const fuenteResponsiva = {
    '@media screen and (max-width: 890px), (max-height: 580px)': {
      fontSize: "20px",
    },
    '@media screen and (max-width: 800px)': {
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

  useEffect(()=>{    
    setSong(songProp)
  },[songProp])

  return (
    <Box boxShadow='dark-lg' borderRadius="35px" position="relative" marginRight={30} w="40%">
      <Card h="61vh" w="100%" minWidth="205px" minHeight="360px" borderRadius="35px" >
        <CardBody>
          <Center>
            <Box >
              <Image
                
                minWidth="100px"
                minHeight="100px"
                borderRadius='full'
                height="24vh"
                width="24vh"
                src={song.portada}
              />
            </Box>
          </Center>
          <Center>
            <Heading as="b" size="xl" color="#332D27">{song.titulo}</Heading>
          </Center>
          <Center>
            <Heading as="b" size="md" color="#544C46">{song.artista}</Heading>
          </Center>
          <Center>
            <Grid templateColumns='repeat(10, 1fr)' gap={1}>
              <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' >
                <InfoOutlineIcon h='10'  color="#ED4937" />
              </GridItem>
              <GridItem colSpan={4} h='10' >
                <Text fontSize='2xl ' as="b" marginX="5%" color="#332D27" css={fuenteResponsiva}>Album</Text>
              </GridItem>
              <GridItem colSpan={5} h='10' >
                <Text fontSize='xl' marginLeft="5%" color="#544C46" css={fuenteResponsiva}>{song.album}</Text>
              </GridItem>
              <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' >
                <CalendarIcon h='10' marginTop={2}  color="#ED4937"/>
              </GridItem>
              <GridItem colSpan={4} h='10' marginTop={2}>
                <Text fontSize='2xl' as="b" marginX="5%" color="#332D27" css={fuenteResponsiva}>Año</Text>
              </GridItem>
              <GridItem colSpan={5} h='10' marginTop={2}>
                <Text fontSize='2xl' marginLeft="5%" color="#544C46" css={fuenteResponsiva}>{song.anio}</Text>
              </GridItem>
              <GridItem colSpan={1} maxWidth="10" minWidth="10" h='10' >
                <TimeIcon h='10'  color="#ED4937"/>
              </GridItem>
              <GridItem colSpan={4} h='10' >
                <Text fontSize='2xl' as="b" marginX="5%" color="#332D27" css={fuenteResponsiva}>Duración</Text>
              </GridItem>
              <GridItem colSpan={5} h='10' >
                <Text fontSize='2xl' marginLeft="5%" color="#544C46" css={fuenteResponsiva}>{Duration.fromObject({seconds: song.duracion}).toFormat('m:ss')}</Text>
              </GridItem>
            </Grid>
          </Center>
        </CardBody>
      </Card>
    </Box>
  );
}
