import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Client-side navigation doesn't scroll by itself: jump to the top on a new
// route, or to the #hash target once the new page has rendered.
const ScrollManager = () => {
  const { key, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [key, hash]);

  return null;
};

export default ScrollManager;
