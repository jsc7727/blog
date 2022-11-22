import { useState, useEffect, useMemo, useRef } from 'react';
import throttle from 'lodash/throttle';

export default function useScrollPercentage(tag = 'body') {
  const [isTabnavOn, setIsTabnavOn] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const tabSelectorRef = useRef<HTMLBodyElement | HTMLDivElement | null>(
    typeof window !== 'undefined' ? window.document.querySelector(tag) : null,
  );

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (tabSelectorRef.current === null) return;
        const nextTabnavOn = window.scrollY > tabSelectorRef.current.offsetTop + 50;
        if (nextTabnavOn !== isTabnavOn) {
          setIsTabnavOn(nextTabnavOn);
        }

        setPercentage(
          (window.scrollY / (tabSelectorRef.current.scrollHeight - tabSelectorRef.current.offsetHeight)) * 100,
        );
      }, 100),
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
