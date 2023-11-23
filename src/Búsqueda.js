import { Box, Card, CardBody, CardHeader, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import CancionItem from "./CancionItem";

export default function Busqueda() {
    return (
        <Box position="relative" w="58%">
            <Card h="61vh" w="100%" minWidth="205px" minHeight="360px" borderRadius="35px" paddingBottom={3}>
                <CardHeader>
                    <InputGroup >
                        <InputLeftElement height="100%" display="flex" alignItems="center" justifyContent="center">
                            <Search2Icon />
                        </InputLeftElement>
                        <Input borderRadius="35px" height="7vh" minHeight="36px" focusBorderColor='orange.400' borderColor="black" placeholder='Buscar canción' />
                    </InputGroup>
                </CardHeader>
                <CardBody overflowY="scroll" css={{
                    '&::-webkit-scrollbar': {
                        "display": "none"
                    }
                }}>
                    <CancionItem></CancionItem>
                    <CancionItem></CancionItem>
                    <CancionItem></CancionItem>
                    <CancionItem></CancionItem>
                    <CancionItem></CancionItem>
                </CardBody>
            </Card>
        </Box>
    );
}