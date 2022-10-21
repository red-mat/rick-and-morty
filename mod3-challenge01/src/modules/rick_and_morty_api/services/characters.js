const API = 'https://rickandmortyapi.com/api/character?';

const characters = async (page = 1) => {
  const response = await fetch(API + `page=${page}`);
  return response.json();
};

export default characters;
