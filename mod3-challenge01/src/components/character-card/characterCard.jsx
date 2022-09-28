import './characterCard.css';

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

export default CharacterCard;