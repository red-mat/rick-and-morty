import './characterList.css';

import useFetchingCharacters  from '../../hooks/useFetchingCharacters/useFetchingCharacters';

import LoadingScreen from '../loading-screen/loadingScreen';
import CharacterCard from '../character-card/characterCard';


//Retorna la lista de personaje
export default function CharacterList({ setImageURL }) {
  const [characterList, isLoading] = useFetchingCharacters()

  return (
    <div>
      <LoadingScreen isLoading={isLoading}/>
      {characterList.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character}
          onClick={setImageURL}
        />
      ))}
    </div>
  );
}
