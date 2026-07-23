import { useEffect } from 'react';
import { useLocation } from 'react-router';

// react-router non ripristina lo scroll da solo tra una route e l'altra.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
