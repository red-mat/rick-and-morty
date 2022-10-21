import './characterSelected.css';

import { Container } from '../components-index';

import { useSwapEffect } from '../../modules/transitions_effects/hook/exports';
import { opacity_transition } from '../../modules/transitions_effects/effects/exports';

export default function CharacterSelected({ characterImg }) {
  const [character_avatar, opacity_avatar] = useSwapEffect(
    characterImg,
    opacity_transition(350)
  );

  if (!character_avatar) {
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
