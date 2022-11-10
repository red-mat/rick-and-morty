import { useState } from 'react';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';
import CC from './character-context';

interface iProps {
  children: JSX.Element;
}

export default function CharacterProvider(props: iProps): JSX.Element {
  const [character, setCharacter] = useState<Partial<iCharacterApiResult>>({});

  return (
    <CC.Provider
      value={{
        character,
        selectCharacter: setCharacter,
      }}
    >
      {props.children}
    </CC.Provider>
  );
}
