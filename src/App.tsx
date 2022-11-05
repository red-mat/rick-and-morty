import './css/App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Navigation } from './routes/index';

function App(): JSX.Element {
  const HOME_PATH = '/rick-and-morty';

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to={HOME_PATH} />} />
        <Route path={HOME_PATH} element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
