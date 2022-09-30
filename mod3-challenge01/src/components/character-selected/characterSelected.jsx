import './characterSelected.css';

import {Container} from '../components-index';

import {useTransitionEffect} from '../../hooks/hooks-index';
import {opacity_transition} from '../../hooks/useTransitionEffects/transitions-index';

export default function CharacterSelected({ characterImg }) {
  const [character_avatar, opacity_avatar] = useTransitionEffect(
    characterImg,
    opacity_transition(350)
  );
    
  if (!characterImg){
    return null;
  }
  
  return (
    <Container>
     <img
        className='character-image'
        style={opacity_avatar}
        src={character_avatar}
        alt='avatar'
      />
    </Container>
  );
}
