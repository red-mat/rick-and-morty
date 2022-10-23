import './header-app.css';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { CharacterSelected } from '../components-index';

function HeaderApp({ character }) {
  return (
    <Fragment>
      <header id='header' className='header'>
        <CharacterSelected characterImg={character} />
      </header>

      <Outlet />
    </Fragment>
  );
}

export default HeaderApp;
