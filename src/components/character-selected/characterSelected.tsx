import './characterSelected.css';

import { Container } from '../components-index';

import { useSwapEffect } from '../../modules/transitions_effects/hook/exports';
import { opacityTransition } from '../../modules/transitions_effects/effects/exports';

interface iProps {
  characterImg: string;
}

function CharacterSelected({ characterImg }: iProps): JSX.Element | null {
  const [characterAvatar, opacityAvatar] = useSwapEffect(
    characterImg,
    opacityTransition(350)
  );

  if (characterAvatar === null) {
    return null;
  }

  return (
    <Container>
      <img
        className='character-image'
        style={opacityAvatar}
        src={characterImg}
        alt='avatar'
      />
    </Container>
  );
}

export default CharacterSelected;
