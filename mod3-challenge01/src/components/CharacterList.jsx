import { useEffect, useState } from 'react';
import { getCharacters } from '../services/restApi';

import '../css/characterList.css'

function CharacterCard({ imgURL,name, specie, status,  setImageURL }) {
  return (
    <div onClick={() => setImageURL(imgURL)} className='characterCard'>
      <img src={imgURL} alt='' />
      <p>{name}</p>
      <p>{specie}</p>
      <p>{status}</p>
    </div>
  );
}

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
      {isLoading ? (
        <h1 className='loading-text'>Loading...</h1>
      ) : (
        <div>
          {characterList.map((character) => (
            <CharacterCard 
                key={character.id}
                imgURL={character.image}
                name={character.name}
                specie={character.species}
                status={character.status}
                setImageURL={setImageURL}
            />
          ))}
        </div>
      )}
    </div>
  );
}
