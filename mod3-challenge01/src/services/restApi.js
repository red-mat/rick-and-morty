const RICK_MORTY_API='https://rickandmortyapi.com/api/'

export const getCharacters = async (page=1) => {
    try {
      const response = await fetch(RICK_MORTY_API+`character?page=${page}`);
      return response.json();
    } catch {
      throw new Error('could not fetch the default price');
    }
  };
  