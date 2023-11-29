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
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Duration } from 'luxon';
import { useEffect, useRef, useState } from 'react';
import ModalComandos from './ModalComandos';

export default function Reproductor({ songProp, updateCurrentSongIndex, songsLength, currentSongIndex }) {

    const fuenteResponsivaT = {
        '@media screen and (max-width: 700px)': {
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

    const {
        transcript,
        listening,
        resetTranscript,
    } = useSpeechRecognition();

    const [song, setSong] = useState({ src: songProp.src, duration: songProp.duracion })
    const [counter, setCounter] = useState(0);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [volumen, setVolumen] = useState(10);

    const playPauseHandler = () => {
        if (isReady) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying)
        }
    }

    const nextSong = () => {
        audioRef.current.currentTime = 0;
        updateCurrentSongIndex((prevIndex) => (prevIndex + 1) % songsLength);
        setCounter(0);
        setIsReady(false);
    }

    const backSong = () => {
        audioRef.current.currentTime = 0;
        if (currentSongIndex !== 0) {
            updateCurrentSongIndex((prevIndex) => (prevIndex - 1));
        }
        setCounter(0);
        setIsReady(false);
    }

    const loadDataHandler = () => {
        SpeechRecognition.startListening({continuous:true})
        setIsReady(true);
    }

    const sliderOnChange = (e) => {
        if (e != null) {
            setSliderValue(e);
        }
    }

    const volumenOnChange = (e) => {
        if (e != null) {
            setVolumen(e);
        }
    }

    useEffect(() => {
        setSong({ src: songProp.src, duration: songProp.duracion })
        if (isPlaying && isReady) {
            audioRef.current.play();
        }
    }, [songProp, isReady, isPlaying])

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
                setCounter((time) => {
                    return time + 1;
                });
            }
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [isPlaying])

    useEffect(() => {
        if (counter >= audioRef.current.duration) {
            SpeechRecognition.stopListening()
            SpeechRecognition.startListening({continuous:true})
            setCounter(0);
        }
    }, [counter])

    useEffect(() => {
        audioRef.current.currentTime = sliderValue;
        setCounter(sliderValue)
    }, [sliderValue])

    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volumen / 100;
        }
      }, [volumen, audioRef]);



    useEffect(() => {        
        if (transcript == "siguiente") {
            nextSong()
        } else if (transcript == "anterior") {
            backSong()
        }else if(transcript=="uno"){            
            updateCurrentSongIndex(0)
        }else if(transcript=="dos"){            
            updateCurrentSongIndex(1)
        }else if(transcript=="tres"){            
            updateCurrentSongIndex(2)
        }else if(transcript=="cuatro"){            
            updateCurrentSongIndex(3)
        }else if(transcript=="reproducir" ){    
            if (!isPlaying){
                playPauseHandler()
            }                   
        }else if(transcript=="subir"){     
            var x =  volumen + 10
            if (x<=100){
                setVolumen(x)
            }
            setVolumen();
        }else if(transcript=="bajar"){
            var x =  volumen - 10
            if (x>=0){
                setVolumen(x)
            }
            setVolumen();
        }else if(transcript=="silenciar"){
            setVolumen(0);
        }else if(transcript=="comenzar"){
            setSliderValue(0);
            setCounter(0);
            audioRef.current.currentTime=sliderValue;
        }else if (transcript=="detener"){
            if (isPlaying) {
                playPauseHandler()
            }                  
        }

        
        resetTranscript()

    }, [transcript]);



    return (
        <>
            <audio ref={audioRef} src={song.src} onLoadedData={loadDataHandler} />
            <Box boxShadow='dark-lg' borderRadius="35px" m={30}  >
                <Center>
                    <Card w="100vw" h="18vh" borderRadius="35px" minHeight="90px" minWidth="300px" >
                        <CardBody>
                            <Center h="50%">
                                <Text color="#332D27" as="b" fontSize="lg">
                                    {Duration.fromObject({ seconds: counter }).toFormat('m:ss')}
                                </Text>
                                <Slider w="80vw" marginX={5} min={0} max={song.duration} value={counter} onChange={sliderOnChange}>
                                    <SliderTrack>
                                        <SliderFilledTrack backgroundColor="#ED8936" />
                                    </SliderTrack>
                                    <SliderThumb backgroundColor="#ED8936" />
                                </Slider>
                                <Text color="#332D27" as="b" fontSize="lg">
                                    {Duration.fromObject({ seconds: song.duration }).toFormat('m:ss')}
                                </Text>
                            </Center>
                            <Center h="50%" paddingX="2vw">
                                <Center w="20%">
                                    <Heading size="md" color="#332D27">♫</Heading>
                                    <Slider w="90%" marginX={2} min={0} max={100} value={volumen} onChange={volumenOnChange}>
                                        <SliderTrack>
                                            <SliderFilledTrack backgroundColor="#ED4937" />
                                        </SliderTrack>
                                        <SliderThumb backgroundColor="#ED4937" />
                                    </Slider>
                                    <Heading size="sm" color="#332D27">{volumen}</Heading>
                                </Center>
                                <Center marginX="3%" w="30%">
                                    <Button variant='ghost' marginX="1vw" color="#332D27" onClick={backSong}>|◀</Button>
                                    <Button variant='ghost' marginX="1vw" color="#332D27" onClick={playPauseHandler}>{isPlaying ? '| |' : '▶'}</Button>
                                    <Button variant='ghost' marginX="1vw" color="#332D27" onClick={nextSong}>▶|</Button>
                                </Center>
                                <Box w="20%">
                                    <Text as="b" color="#ED4937" css={fuenteResponsivaT}> {listening ? ' Te estoy escuchando' : 'No recibo tus indicaciones'}</Text>                                    
                                </Box>
                                <Box w="20%" maxWidth="10%">
                                    <ModalComandos></ModalComandos>
                                </Box>
                            </Center>
                        </CardBody>
                    </Card>
                </Center>
            </Box></>
    );
}
