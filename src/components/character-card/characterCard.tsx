import './characterCard.css';

import { Container } from '../index';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

interface iProps {
  character: iCharacterApiResult;
}

function CharacterCard({ character }: iProps): JSX.Element {
  return (
    <Container modifier='character-card'>
      <img src={character.image} alt='' className='characterCard__avatar' />
      <p className='character-card__text'>{character.name}</p>
      <p className='character-card__text'>{character.species}</p>
      <p className='character-card__text'>{character.status}</p>
    </Container>
  );
}

export default CharacterCard;
