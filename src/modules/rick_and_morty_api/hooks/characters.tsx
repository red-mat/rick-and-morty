import { characters } from '../services/exports';
import { useEffect, useState } from 'react';

import { CharacterApiResult } from '../services/types';

type UseCharacters = [CharacterApiResult[], Boolean];

export default function useCharacters(page = 1):UseCharacters {
  const [characterList, setCharList] = useState<CharacterApiResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    characters(page)
      .then(data => setCharList(data.results))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [page]);

  return [characterList, isLoading];
}
