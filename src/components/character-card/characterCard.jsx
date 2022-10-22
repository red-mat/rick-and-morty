import './characterCard.css';

import { Container } from '../components-index';

function CharacterCard({ character, onClick }) {
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
