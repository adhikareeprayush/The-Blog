import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavLinkKey = 'blog' | 'projects' | 'about' | 'newsletter';

type NavLink = {
  name: string;
  url: string;
};

const navLinks: Record<NavLinkKey, NavLink> = {
  blog: { name: 'Blog', url: '/blog' },
  projects: { name: 'Projects', url: '/projects' },
  about: { name: 'About', url: '/about' },
  newsletter: { name: 'Newsletter', url: '/newsletter' },
};

type NavProps = {
  links?: Record<string, NavLink>;
  className?: string;
};

const Nav: React.FC<NavProps> = ({ links = navLinks, className = '' }) => {
  let activeMenu = useLocation().pathname;
  console.log(activeMenu);

  return (
    <nav className={`w-full flex justify-between items-center xl:py-8 ${className} bg-white`}>
      <Link to="/" className="text-xl font-bold tracking-tighter">
        My Blog
      </Link>
      <div className="flex items-center gap-8 font-normal">
        {Object.entries(links).map(([key, { name, url }]) => {
          const isActive = activeMenu === url || activeMenu.startsWith(url + "/");
          return (
            <Link
              key={key}
              to={url}
              className={`hover:underline ${isActive ? 'text-blue-800 underline font-bold' : 'text-black'}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
