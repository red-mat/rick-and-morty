import './css/App.css';

import { useState } from 'react';

import {
  Container,
  LoadingScreen,
  CharacterList,
  HeaderApp,
} from './components/components-index';

import { useCharacters } from './modules/rick_and_morty_api/hooks/exports';

function App() {
  const [characterSelected, setImageURL] = useState();
  const [characterList, isLoading] = useCharacters();

  return (
    <div className='App'>
      {isLoading && <LoadingScreen isLoading={isLoading} />}
      <HeaderApp character={characterSelected} />
      <Container>
        <CharacterList characterList={characterList} cardClick={setImageURL} />
      </Container>
    </div>
  );
}
export default App;
