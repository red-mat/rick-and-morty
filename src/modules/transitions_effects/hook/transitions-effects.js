import { useState } from 'react';
import { useEffect } from 'react';

const useSwapEffect = (nextContent, styleEffect) => {
  const [content, setCharacterAvatar] = useState(null);
  const [style, setStyle] = useState(styleEffect.seen);

  useEffect(() => {
    let timeout_effect;

    if (nextContent) {
      setStyle(styleEffect.unseen);

      timeout_effect = setTimeout(() => {
        setCharacterAvatar(nextContent);
        setStyle(styleEffect.seen);
      }, styleEffect.time);
    }
    return () => {
      clearTimeout(timeout_effect);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextContent]);

  return [content, style];
};

export default useSwapEffect;
