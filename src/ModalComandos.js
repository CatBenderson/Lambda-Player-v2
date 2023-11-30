import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

export default function ModalComandos() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button size="sm" backgroundColor="#ED4937" color="white" onClick={onOpen}>Comandos</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Comandos de voz</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text m={2}><b>"Reproducir" - </b> Quita la pausa </Text>
                        <Text m={2}><b>"Detener" - </b> Poner pausa </Text>
                        <Text m={2}><b>"Número de canción - "</b> Reproduce la canción con el número dicho</Text>
                        <Text m={2}><b>"Anterior" - </b>  Reproduce la canción anterior  </Text>
                        <Text m={2}><b>"Siguiente" - </b> Reproduce la siguiente canción </Text>
                        <Text m={2}><b>"Comenzar de nuevo" - </b> Reinciar canción actual </Text>
                        <Text m={2}><b>"Silenciar" - </b> Bajar volumen a 0 </Text>
                        <Text m={2}><b>"Bajar" - </b> Bajar volumen -10 </Text>
                        <Text m={2}><b>"Subir" - </b> Subir volumen +10 </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button backgroundColor="#ED4937" color="white" mr={3} onClick={onClose}>
                            Ok
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}