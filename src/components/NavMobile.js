import React from 'react';
import { navData } from '../data';
import Socials from './Socials';

const NavMobile = ({ setNavMobile }) => {
  const { items } = navData;
  return (
    <nav
      className="w-full h-full flex justify-around flex-col overflow-hidden
   "
    >
      <ul className="flex flex-col items-center justify-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li onClick={() => setNavMobile(false)} key={index}>
              <a className="text-2xl font-primary uppercase" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
