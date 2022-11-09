import React from 'react';
import { iCharacterApiResult } from '../../modules/rick_and_morty_api/services/types';

export interface iCharacterContext {
  character: Partial<iCharacterApiResult>;
  selectCharacter: React.Dispatch<Partial<iCharacterApiResult>>;
}
