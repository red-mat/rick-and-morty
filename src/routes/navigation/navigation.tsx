import './navigation.css';

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { CharacterCard } from '../../components';
import useCharacterContext from '../../state_management/character-context/character-hook';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

function Navigation(): JSX.Element {
  const { character } = useCharacterContext();
  return (
    <Fragment>
      <header id='header' className='header'>
        {character.image !== undefined ? (
          <CharacterCard character={character as iCharacterApiResult} />
        ) : null}
      </header>

      <Outlet />
    </Fragment>
  );
}

export default Navigation;
