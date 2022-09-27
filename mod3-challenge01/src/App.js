import './css/App.css';
import { useState } from 'react';

import CharacterSelected from './components/character-selected/characterSelected';
import CharacterList from './components/character-list/characterList';

import default_character from './assets/default-character.png';
import Container from './components/container/Container';

function App() {
  const [character_img, setImageURL] = useState(default_character);

  return (
    <div className='App'>
      <Container>
        <CharacterSelected characterImg={character_img} />
        <CharacterList setImageURL={setImageURL} />
      </Container>
    </div>
  );
}
export default App;
