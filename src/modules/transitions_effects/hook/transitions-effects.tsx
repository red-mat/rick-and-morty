import { useState, useEffect, CSSProperties } from 'react';
import { iTransition } from '../types';

type tContent = object | string | null | undefined;
type tUseSwapEffect = [tContent, CSSProperties];

const useSwapEffect = (
  nextContent: tContent,
  styleEffect: iTransition
): tUseSwapEffect => {
  const [content, setContent] = useState<tContent>(null);
  const [style, setStyle] = useState<CSSProperties>(styleEffect.seen);

  useEffect(() => {
    let timeoutEffect: ReturnType<typeof setTimeout>;

    if (nextContent !== null) {
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
