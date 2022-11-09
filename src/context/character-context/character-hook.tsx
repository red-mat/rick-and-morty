import { useContext } from 'react';
import characterContext from './character-context';
import { iCharacterContext } from './types';

export default function useCharacterContext(): iCharacterContext {
  return useContext(characterContext);
}
