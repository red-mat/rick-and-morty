const RICK_MORTY_API='https://rickandmortyapi.com/api/'

export const getCharacters = async () => {
    try {
      const response = await fetch(RICK_MORTY_API+'character');
      return response.json();
    } catch {
      throw new Error('could not fetch the default price');
    }
  };
  