import { Link, useLocation } from 'react-router';

// One link for every kind of href used on the site:
//  - '#section'  → home-page section; a plain anchor on the home page, a route link elsewhere
//  - '/path'     → client-side route
//  - anything else (mailto:, https:) → regular anchor
const SmartLink = ({ href, ...props }) => {
  const { pathname } = useLocation();

  if (href.startsWith('#')) {
    if (pathname === '/') return <a href={href} {...props} />;
    return <Link to={`/${href}`} {...props} />;
  }
  if (href.startsWith('/')) return <Link to={href} {...props} />;
  return <a href={href} {...props} />;
};

export default SmartLink;
