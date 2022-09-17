import './App.css';
import {useState} from 'react';

import Image from './components/Image';
import CharacterList from './components/CharacterList'

function App() {
  const [imageURL, setImageURL] = useState('')

  return (
    <div className='App'>
      <Image src={imageURL}/>
      <CharacterList setImageURL={setImageURL}/>
    </div>
  );
}

export default App;
