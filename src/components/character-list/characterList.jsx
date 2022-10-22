import './characterList.css';

import { CharacterCard } from '../components-index';

// Retorna la lista de personaje
export default function CharacterList({ characterList, cardClick }) {
  return (
    <div className='CharacterList'>
      {characterList.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={() => cardClick(character.image)}
        />
      ))}
    </div>
  );
}
