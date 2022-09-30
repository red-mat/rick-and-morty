import { useState } from 'react';

import './css/App.css';

import Container from './components/container/Container';
import LoadingScreen from './components/loading-screen/loadingScreen';
import CharacterSelected from './components/character-selected/characterSelected';
import CharacterList from './components/character-list/characterList';

import useFetchingCharacters from './hooks/useFetchingCharacters/useFetchingCharacters';



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
