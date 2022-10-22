import { useState, useEffect } from 'react';

const useSwapEffect = (nextContent, styleEffect) => {
  const [content, setCharacterAvatar] = useState(null);
  const [style, setStyle] = useState(styleEffect.seen);

  useEffect(() => {
    let timeoutEffect;

    if (nextContent) {
      setStyle(styleEffect.unseen);

      timeoutEffect = setTimeout(() => {
        setCharacterAvatar(nextContent);
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
