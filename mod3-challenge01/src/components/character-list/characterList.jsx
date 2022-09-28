import './characterList.css';


import CharacterCard from '../character-card/characterCard';


//Retorna la lista de personaje
export default function CharacterList({ characterList, cardClick }) {
  return (
    <div>
      {characterList.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character}
          onClick={cardClick}
        />
      ))}
    </div>
  );
}
