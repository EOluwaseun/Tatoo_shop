import React, { useState, useEffect } from 'react';
import { headerData } from '../data';

import Nav from './Nav';
import NavMobile from './NavMobile';
import Socails from './Socials';

import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure
  const { logo } = headerData;

  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  // scroll event

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive
          ? ' h-[100px] lg:h-[110px] shadow-lg'
          : ' h-[120px] lg:h-[150px]'
      }
  fixed left-0 right-0 bg-white z-10 max-w-[1920px] w-full mx-auto transition-all 
  duration-300`}
    >
      <div className="h-full flex justify-between items-center pl-[50px] pr-[60px]">
        <a href="/">
          <img className="w-auto h-full" src={logo} alt="" />
        </a>
        {/* initially hidden on larger screen */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* menu btn also hidden on larger screen */}
        <div
          onClick={() => {
            setNavMobile(!navMobile);
          }}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>
        {/* logic */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} 
      ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top[150px]'}
      fixed w-full bg-white h-full left-0 -z-10 transition-all
      duration-300ms`}
        >
          <NavMobile setNavMobile={setNavMobile}/>
        </div>
        <div className="hidden xl:flex">
          <Socails />
        </div>
      </div>
    </header>
  );
};

export default Header;
