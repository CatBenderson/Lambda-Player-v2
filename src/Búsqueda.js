import { useEffect, useState } from 'react';
import { Box, Card, CardBody, CardHeader, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import CancionItem from "./CancionItem";

export default function Busqueda({ songsProp }) {
    const [busqueda, setBusqueda] = useState("")

    const cancionesFiltradas = songsProp.filter(song =>
        song.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <Box boxShadow='dark-lg' borderRadius="35px" position="relative" w="58%">
            <Card h="61vh" w="100%" minWidth="350px" minHeight="360px" borderRadius="35px" paddingBottom={5} >
                <CardHeader >
                    <InputGroup >
                        <InputLeftElement height="100%" display="flex" alignItems="center" justifyContent="center" >
                            <Search2Icon color="#ED4937" />
                        </InputLeftElement>
                        <Input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} _placeholder={{ color: "#544C46" }} borderRadius="35px" height="7vh" minHeight="36px" focusBorderColor='#ED8936' borderColor="#544C46" color="#ED8936" placeholder='Buscar canción' />
                    </InputGroup>
                </CardHeader>
                <CardBody overflowY="scroll" css={{
                    '&::-webkit-scrollbar': {
                        "display": "none"
                    }
                }}>
                    {cancionesFiltradas.map((song) => (                        
                        <CancionItem song={song} key={song.titulo} /> 
                    ))}
                </CardBody>
            </Card>
        </Box>
    );
}