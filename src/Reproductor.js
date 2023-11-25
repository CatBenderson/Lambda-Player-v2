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
import { Duration } from 'luxon';
import { useEffect, useRef, useState } from 'react';

export default function Reproductor({songProp, updateCurrentSongIndex, songsLength, currentSongIndex}) {
    const [song, setSong] = useState({src:songProp.src, duration:songProp.duracion})
    const [counter, setCounter]=useState(0);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const playPauseHandler = () =>{
        if(isReady){
            if(isPlaying){
                audioRef.current.pause();
            }else{
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying)
        }
    }

    const nextSong = () =>{
        audioRef.current.currentTime = 0;
        updateCurrentSongIndex((prevIndex)=>(prevIndex+1) % songsLength);
        setCounter(0);
        setIsReady(false);
    }

    const backSong = () =>{
        audioRef.current.currentTime = 0;
        if(currentSongIndex !== 0){
            updateCurrentSongIndex((prevIndex)=>(prevIndex-1));
        }
        setCounter(0);
        setIsReady(false);
    }

    const loadDataHandler = () =>{
        setIsReady(true);
    }

    const sliderOnChange = (e) =>{
        if(e != null){
            setSliderValue(e);
        }
    }
    
    useEffect(()=>{        
        setSong({src:songProp.src, duration:songProp.duracion})
        if(isPlaying && isReady){
            audioRef.current.play();
        }
    },[songProp, isReady, isPlaying])

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(isPlaying){
                setCounter((time)=>{
                    return time+1;
                });                                                      
            }            
        },1000)
        return () =>{
            clearInterval(interval);
        }
    },[isPlaying])

    useEffect(()=>{
        if(counter >= audioRef.current.duration){
            nextSong()
            setCounter(0);
        }
    },[counter])

    useEffect(()=>{
        audioRef.current.currentTime = sliderValue;
        setCounter(sliderValue)
    },[sliderValue])

    return (
        <>
        <audio ref={audioRef} src={song.src} onLoadedData={loadDataHandler}/>        
        <Box boxShadow='dark-lg' borderRadius="35px" m={30} >
            <Center>
                <Card w="100vw" h="18vh" borderRadius="35px" minHeight="90px" >
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
                                <Slider w="90%" marginX={2} min={0} max={100} defaultValue={50}>
                                    <SliderTrack>
                                        <SliderFilledTrack backgroundColor="#ED4937" />
                                    </SliderTrack>
                                    <SliderThumb backgroundColor="#ED4937" />
                                </Slider>
                                <Heading size="sm" color="#332D27">100</Heading>
                            </Center>
                            <Center w="60%">
                                <Button variant='ghost' marginX="1vw" color="#332D27" onClick={backSong}>|◀</Button>
                                <Button variant='ghost' marginX="1vw" color="#332D27" onClick={playPauseHandler}>▶</Button>
                                <Button variant='ghost' marginX="1vw" color="#332D27" onClick={nextSong}>▶|</Button>
                            </Center>
                            <Box w="20%"></Box>
                        </Center>
                    </CardBody>
                </Card>
            </Center>
        </Box></>
    );
}
