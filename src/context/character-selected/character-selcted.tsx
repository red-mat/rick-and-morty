import React, { createContext, useState } from 'react';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

interface iContext {
  character: iCharacterApiResult | null;
  selectCharacter: React.Dispatch<iCharacterApiResult | null>;
}
const characterContext = createContext<iContext | null>(null);
export default characterContext;

interface iProps {
  children: JSX.Element;
}
export function CharacterProvider(props: iProps): JSX.Element {
  const [character, setCharacter] = useState<iCharacterApiResult | null>(null);
  const CC = characterContext;
  const value: iContext = {
    character,
    selectCharacter: setCharacter,
  };

  return <CC.Provider value={value}>{props.children}</CC.Provider>;
}
