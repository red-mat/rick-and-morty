import './css/App.css';

import { Route, Routes, Navigate } from 'react-router-dom';

import { useState } from 'react';
import { Home } from './pages/page-index';

import { HeaderApp } from './components/index';
import useCharacters from './modules/rick_and_morty_api/hooks/characters';

const HOME_PATH = '/rick-and-morty';

function App(): JSX.Element {
  const [characterSelected, setImageURL] = useState('');
  const [characterList, isLoading] = useCharacters();

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to={HOME_PATH} />} />
        <Route
          path={HOME_PATH}
          element={<HeaderApp character={characterSelected} />}
        >
          <Route
            index
            element={
              <Home
                characterList={characterList}
                setImageURL={setImageURL}
                isLoading={isLoading}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
