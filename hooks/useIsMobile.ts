import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    function detectMobile() {
      const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    }
    setMobile(detectMobile());
  }, []);
  return isMobile;
};
export default useIsMobile;
