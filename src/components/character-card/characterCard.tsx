import './characterCard.css';

import { Container } from '../index';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

type tOneClick = () => void;
interface iProps {
  character: iCharacterApiResult;
  onClick: tOneClick;
}

function CharacterCard({ character, onClick }: iProps): JSX.Element {
  return (
    <Container onClick={onClick} modifier='character-card'>
      <img src={character.image} alt='' className='characterCard__avatar' />
      <p>{character.name}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </Container>
  );
}

export default CharacterCard;
