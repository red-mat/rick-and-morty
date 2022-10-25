import { useState, useEffect } from 'react';
import { iTransition } from '../types';


type tUseSwapEffect = [object|null, object|null];

const useSwapEffect = (nextContent:object, styleEffect:iTransition): tUseSwapEffect=> {
  const [content, setContent] = useState<Object | null>(null);
  const [style, setStyle] = useState<Object | null>(styleEffect.seen);

  useEffect(() => {
    let timeoutEffect:ReturnType<typeof setTimeout>;

    if (nextContent!==null) {
      setStyle(styleEffect.unseen);

      timeoutEffect = setTimeout(() => {
        setContent(nextContent);
        setStyle(styleEffect.seen);
      }, styleEffect.time);
    }

    return () => {
      clearTimeout(timeoutEffect);
    };
  }, [nextContent]);

  return [content, style];
};

export default useSwapEffect;
