import { characters } from '../services/exports';
import { useEffect, useState } from 'react';

export default function useCharacters(page = 1) {
  const [characterList, setCharList] = useState([]);
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
