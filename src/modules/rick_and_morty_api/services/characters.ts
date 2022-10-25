import { CharactersApiResult } from './types';

const API = 'https://rickandmortyapi.com/api/character?';

const characters = async (page: number = 1): Promise<CharactersApiResult> => {
  const response = await fetch(API + `page=${page}`);
  return await response.json();
};

export default characters;
