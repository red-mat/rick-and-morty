import './characterList.css';

import { CharacterCard } from '../index';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

type tCardClick = (image: string) => void;
interface iProps {
  characterList: iCharacterApiResult[];
  cardClick: tCardClick;
}

// Retorna la lista de personaje
export default function CharacterList({
  characterList,
  cardClick,
}: iProps): JSX.Element {
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
