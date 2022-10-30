import './css/App.css';

import { Route, Routes, Navigate } from 'react-router-dom';

import { useState } from 'react';
import { Home, Navigation } from './routes/index';

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
          element={<Navigation character={characterSelected} />}
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
