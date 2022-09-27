import './css/App.css';
import { useState } from 'react';

import CharacterSelected from './components/character-selected/characterSelected';
import CharacterList from './components/character-list/characterList';

import default_character from './assets/default-character.png';

function App() {
  const [character_img, setImageURL] = useState(default_character);

  return (
    <div className='App'>
      <CharacterSelected characterImg={character_img} />
      <CharacterList setImageURL={setImageURL} />
    </div>
  );
}
export default App;
