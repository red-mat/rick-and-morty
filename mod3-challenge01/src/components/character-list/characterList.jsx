import { useEffect, useState } from 'react';
import { getCharacters } from '../../services/restApi';

import './characterList.css';


//Pantalla de carga: Es lo que se muestra mientras carga los datos
function LoadingScreen({ isLoading }) {
  if (isLoading) {
    return <h1 className='loading-text'>Loading...</h1>;
  }

  return null;
}

//Tarjeta de personaje: Muestra la informacion de un personaje
function CharacterCard({ character, onClick }) {
  return (
    <div onClick={() => onClick(character.image)} className='characterCard'>
      <img src={character.image} alt='' className='characterCard__img'/>
      <p>{character.name}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
  );
}


//Retorna la lista de personaje
export default function CharacterList({ setImageURL }) {
  const [characterList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

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
