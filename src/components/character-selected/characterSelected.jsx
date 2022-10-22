import './characterSelected.css';

import { Container } from '../components-index';

import { useSwapEffect } from '../../modules/transitions_effects/hook/exports';
import { opacityTransition } from '../../modules/transitions_effects/effects/exports';

export default function CharacterSelected({ characterImg }) {
  const [characterAvatar, opacityAvatar] = useSwapEffect(
    characterImg,
    opacityTransition(350)
  );

  if (!characterAvatar) {
    return null;
  }

  return (
    <Container>
      <img
        className='character-image'
        style={opacityAvatar}
        src={characterAvatar}
        alt='avatar'
      />
    </Container>
  );
}
