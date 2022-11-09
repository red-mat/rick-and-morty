import { createContext } from 'react';
import { iCharacterContext } from './types';

export const characterContext = createContext<iCharacterContext>({
  character: {},
  selectCharacter: () => {},
});
export default characterContext;
