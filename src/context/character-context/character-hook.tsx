import { useContext } from 'react';
import characterContext, { iContext } from './character-context';

export default function useCharacterContext(): iContext {
  return useContext(characterContext);
}
