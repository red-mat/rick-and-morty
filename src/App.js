import './css/App.css';

import { useState } from 'react';
import { Home } from './pages/page-index';

import { HeaderApp } from './components/components-index';

import { useCharacters } from './modules/rick_and_morty_api/hooks/exports';

function App() {
  const [characterSelected, setImageURL] = useState();
  const [characterList, isLoading] = useCharacters();

  return (
    <div className='App'>
      <HeaderApp character={characterSelected} />
      <Home
        characterList={characterList}
        setImageURL={setImageURL}
        isLoading={isLoading}
      />
    </div>
  );
}
export default App;
