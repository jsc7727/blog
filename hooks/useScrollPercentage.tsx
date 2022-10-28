import { useState, useEffect, useMemo } from 'react';
import throttle from 'lodash/throttle';

export default function useScrollPercentage() {
  const [isTabnavOn, setIsTabnavOn] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const tabSelectorRef = window.document.querySelector('HTML') as any;
        if (!tabSelectorRef) return;
        const nextTabnavOn = window.scrollY > tabSelectorRef.offsetTop + 100;
        if (nextTabnavOn !== isTabnavOn) {
          setIsTabnavOn(nextTabnavOn);
        }
        // console.log('scrollY', window.scrollY);
        // console.log('scrollHeight', tabSelectorRef.scrollHeight);
        // console.log('clientHeight', tabSelectorRef.clientHeight);
        // console.log('offsetHeight ', tabSelectorRef.offsetHeight);
        setPercentage((window.scrollY / (tabSelectorRef.scrollHeight - tabSelectorRef.offsetHeight)) * 100);
      }, 300),
    [isTabnavOn],
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);
  return { isTabnavOn, percentage };
}
