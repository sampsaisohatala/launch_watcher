import { useEffect, useState } from 'react';
import lowQualitySrc from '../media/rocket.png';

const useProgressiveImg = (highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};
export default useProgressiveImg;
