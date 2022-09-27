import './css/App.css';
import {useState} from 'react';

import CharacterSelected from './components/character-selected/characterSelected';
import CharacterList from './components/character-list/characterList'

function App() {
  const [imageURL, setImageURL] = useState('')

  return (
    <div className='App'>
      <CharacterSelected nextImage={imageURL}/>
      <CharacterList setImageURL={setImageURL}/>
    </div>
  );
}
export default App;
