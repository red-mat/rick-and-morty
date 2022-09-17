import perfil from '../assets/default-character.png'
import '../css/image.css'

export default function Image({src}){
    return (
        <img src={perfil} alt="Seleccione Personaje" srcSet={src} className='image' />
    )
}