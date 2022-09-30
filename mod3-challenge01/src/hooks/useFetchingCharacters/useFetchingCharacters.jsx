import { getCharacters } from "../../services/restApi";
import { useEffect, useState } from "react";

export default function useFetchingCharacters(page=1) {
    const [characterList, setCharList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      getCharacters(page)
        .then((data) => setCharList(data.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, [page]);

    return [characterList, isLoading]
};
