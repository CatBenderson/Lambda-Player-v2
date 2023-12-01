import React, { useState, useEffect } from "react";
import {Box} from '@chakra-ui/react'

import Reproductor from "./Reproductor"
import Song from './Song';
import Busqueda from './Búsqueda';

import Cancion1SRC from "./Assets/Music/After Dark.mp3"
import Cancion2SRC from "./Assets/Music/Y lloro - Junior H.mp3"
import Cancion3SRC from "./Assets/Music/Red Swan - Yoshiki feat Hyde.mp3"
import Cancion4SRC from "./Assets/Music/Come Alive - Jackson Wang.mp3"

import img1 from "./Assets/Images/AfterDark.jpeg"
import img2 from "./Assets/Images/YLloro.jpg"
import img3 from "./Assets/Images/RedSwan.jpg"
import img4 from "./Assets/Images/ComeAlive.jpg"
import NavBar from "./NavBar";

const Home = () => {
    const [song, setSong] = useState(null);

    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const loadSongs = () => {
        const song1 = {
            index: 1,
            titulo: "After Dark",
            artista: "Mr.Kitty",
            album: "TIME",
            anio: "2015",
            duracion: 257.28,
            portada: img1,
            src: Cancion1SRC
        };

        const song2 = {
            index: 2,
            titulo: "Y lloro",
            artista: "Junior h",
            album: "$ad Boyz 4 Life II",
            anio: "2023",
            duracion: 180.58449,
            portada: img2,
            src: Cancion2SRC
        };

        const song3 = {
            index: 3,
            titulo: "Red Swan",
            artista: "Yoshiki feat Hyde",
            album: "進撃の巨人",
            anio: "2018",
            duracion: 269.374694,
            portada: img3,
            src: Cancion3SRC
        };

        const song4 = {
            index: 4,
            titulo: "Come Alive",
            artista: "Jackson Wang",
            album: "physical",
            anio: "2022",
            duracion: 172.46405,
            portada: img4,
            src: Cancion4SRC
        };
        setSongs([song1, song2, song3, song4]);
    }

    const updateCurrentSongIndex = (index) => {
        setCurrentSongIndex(index);
    }

    useEffect(() => {
        loadSongs();
    }, [])

    useEffect(() => {
        setSong(songs[currentSongIndex])
    }, [songs, currentSongIndex])

    return (
        <>
            <Box backgroundColor="#665F5A" w="100%" h="100%" minHeight="100vh">
                <NavBar/>
                <Box display="flex" marginX={30}>
                    {song && <Song songProp={song} />}
                    {songs && <Busqueda songsProp={songs} />}
                </Box>
                {song && <Reproductor songProp={song} updateCurrentSongIndex={updateCurrentSongIndex} songsLength={songs.length} currentSongIndex={currentSongIndex} />}
            </Box>
        </>
    );
}

export default Home;
