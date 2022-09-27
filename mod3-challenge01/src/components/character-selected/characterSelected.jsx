import { useState } from 'react';
import { useEffect } from 'react';
import default_character from './assets/default-character.png';
import './characterSelected.css';



export default function CharacterSelected({nextImage}){
    const [character_avatar, setCharacterAvatar] = useState(default_character);
    const [opacity_avatar, setOpacityAvatar] = useState({opacity:1});

    useEffect(() => {
        let timeout_opacity;
        if (nextImage){
            setOpacityAvatar({opacity:0});

            timeout_opacity = setTimeout(() => {
                setCharacterAvatar(nextImage);
                setOpacityAvatar({opacity:1});
            },400);
        }

        return () => {
            clearTimeout(timeout_opacity)
        }
    },[nextImage])


    return (
        <div className='container'>
            <img className='container__avatar' src={character_avatar} alt="avatar" style={opacity_avatar}/>
        </div>
    )
}