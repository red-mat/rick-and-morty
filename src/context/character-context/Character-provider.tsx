import React, { useState } from 'react';
import { tCharacterContext, characterContext as CC } from './character-context';

interface iProps {
  children: JSX.Element;
}

export default function CharacterProvider(props: iProps): JSX.Element {
  const [character, setCharacter] = useState<tCharacterContext>(null);

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
