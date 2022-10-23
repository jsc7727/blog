import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactElement;
  selector: string;
};

const Portal = ({ children, selector }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (mounted === false) return null;

  const element = document.querySelector(selector);
  return element && children ? createPortal(children, element) : null;
};

export default Portal;
