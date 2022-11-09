import React, { createContext } from 'react';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

type tCharacterContext = iCharacterApiResult | null;
export interface iContext {
  character: tCharacterContext;
  selectCharacter: React.Dispatch<tCharacterContext>;
}
export const characterContext = createContext<iContext>({
  character: null,
  selectCharacter: () => {},
});
export default characterContext;
