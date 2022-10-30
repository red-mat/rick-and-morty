import './header-app.css';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import ImageContainer from '../image-container/image-container';

interface iProps {
  character: string;
}
function HeaderApp({ character }: iProps): JSX.Element {
  return (
    <Fragment>
      <header id='header' className='header'>
        {character !== '' ? <ImageContainer src={character} /> : null}
      </header>

      <Outlet />
    </Fragment>
  );
}

export default HeaderApp;
