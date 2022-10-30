import './navigation.css';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import ImageContainer from '../../components/image-container/image-container';

interface iProps {
  character: string;
}
function Navigation({ character }: iProps): JSX.Element {
  return (
    <Fragment>
      <header id='header' className='header'>
        {character !== '' ? <ImageContainer src={character} /> : null}
      </header>

      <Outlet />
    </Fragment>
  );
}

export default Navigation;
