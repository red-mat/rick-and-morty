import { characters } from '../services';
import { useEffect, useState } from 'react';

import { iCharacterApiResult } from '../services/types';

type UseCharacters = [iCharacterApiResult[], boolean];

export default function useCharacters(page = 1): UseCharacters {
  const [characterList, setCharList] = useState<iCharacterApiResult[]>([]);
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
