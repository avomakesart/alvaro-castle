import React from 'react';

interface CardProps {}

export const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className='lg:col-end-7 col-span-full lg:col-span-1 '>
      <div className='flex flex-wrap h-full p-8 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 sm:py-5 xl:px-10 '>
        <div className='w-full mt-6 text-left '>
          <h1 className='mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-cyan-500'>
            Colors &amp; Fonts
          </h1>
          <p className='text-sm leading-relaxed text-gray-400'>
            Latest SideProject
          </p>
          <p className='text-xs leading-relaxed text-gray-400'> Since 2018</p>
          <p className='mt-8 font-normal leading-relaxed tracking-tighter text-gray-900 text-md xl:mt-12 dark:text-gray-100'>
            Color &amp; typography tools for web developers and digital
            designers.
          </p>
          <p className='mt-4 text-sm leading-relaxed tracking-tighter text-gray-500 dark:text-gray-100'>
            Find colors and typography combinations ready to copy paste in one
            click.
          </p>
          <button className='px-4 py-2 mt-6 text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl'>
            <a
              href='http://colorsandfonts.com/'
              target='_blank'
              className='flex items-center font-semibold leading-relaxed tracking-tighter text-md focus:outline-none'
            >
              See Project
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ml-2'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <line x1='15' y1='16' x2='19' y2='12'></line>
                <line x1='15' y1='8' x2='19' y2='12'></line>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
