import React from 'react';
import NextLink from 'next/link';

export const NavBar: React.FC<{}> = () => {
  return (
    <>
      <div className='text-white bg-black body-font'>
        <div className='flex flex-col flex-wrap p-8 mx-auto md:items-center md:flex-row'>
          <NextLink href='/'>
            <div className='cursor-pointer pr-2 lg:pr-8 lg:px-6 focus:outline-none'>
              <div className='inline-flex items-center'>
                <div className='w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500'></div>
                <h2 className='font-semibold tracking-wider transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-2xl text-bold lg:mr-8'>
                  Alvaro Castle
                </h2>
              </div>
            </div>
          </NextLink>
          <nav className='hidden md:flex flex-wrap items-center justify-center text-base md:ml-auto'>
            <NextLink href='/'>
              <span className='cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400'>
                Home
              </span>
            </NextLink>
            <NextLink href='/about'>
              <span className='cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400'>
                About
              </span>
            </NextLink>
            <NextLink href='/work'>
              <span className='cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400'>
                Work
              </span>
            </NextLink>
            <NextLink href='/contact'>
              <span className='cursor-pointer mr-10 text-lg tracking-wide font-normal from-white to-gray-600 hover:text-gray-400'>
                Contact
              </span>
            </NextLink>
          </nav>
        </div>
      </div>
    </>
  );
};
