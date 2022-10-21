import { useState } from 'react';

import './css/App.css';

import {
  Container,
  LoadingScreen,
  CharacterSelected,
  CharacterList,
} from './components/components-index';

import { useCharacters } from './modules/rick_and_morty_api/hooks/exports';

function App() {
  const [characterSelected, setImageURL] = useState();
  const [characterList, isLoading] = useCharacters();

  return (
    <Container modifier='App'>
      {isLoading && <LoadingScreen isLoading={isLoading} />}
      <CharacterSelected characterImg={characterSelected} />
      <CharacterList characterList={characterList} cardClick={setImageURL} />
    </Container>
  );
}
export default App;
