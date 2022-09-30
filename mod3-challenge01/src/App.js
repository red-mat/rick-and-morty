import { useState } from 'react';

import './css/App.css';

import {
  Container,
  LoadingScreen,
  CharacterSelected,
  CharacterList
} from './components/components-index';

import {useFetchingCharacters} from './hooks/hooks-index';



function App() {
  const [characterSelected, setImageURL] = useState();
  const [characterList, isLoading] = useFetchingCharacters();

  return (
    <Container modifier='App'>
    {isLoading&&<LoadingScreen isLoading={isLoading}/>}
      <CharacterSelected characterImg={characterSelected} />
      <CharacterList characterList={characterList} cardClick={setImageURL} />
    </Container>
  );
}
export default App;
