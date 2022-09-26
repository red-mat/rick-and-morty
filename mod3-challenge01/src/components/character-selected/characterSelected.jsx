import perfil from './assets/default-character.png';
import './characterSelected.css';

export default function CharacterSelected({src}){
    return (
        <img src={perfil} alt="Seleccione Personaje" srcSet={src} className='image' />
    )
}