import React from 'react';
import { ArrowMedium } from '../../assets/icons/ArrowMedium';
import { useHover } from '../../hooks';
import 'animate.css';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  const [hoverRef, isHovered] = useHover() as any;

  return (
    <div className='container max-w-lg px-4 py-32 mx-auto mt-6 text-left md:max-w-none md:text-left'>
      <h1 className='text-5xl font-extrabold leading-10 tracking-tight text-left md:text-left md:ml-10 md:text-6xl lg:text-7xl'>
        <span className='inline text-transparent leading-tight bg-clip-text bg-gradient-to-br from-white to-gray-700 md:block'>
          Alvaro Castillo is a creative
        </span>
        <span className='relative ml-5 mt-2 text-transparent bg-clip-text bg-gradient-to-br from-white leading-tight to-gray-700 md:ml-0 md:leading-tight md:inline-block'>
          focused Software Engineer
        </span>
      </h1>
      <div className='flex'>
        <button
          ref={hoverRef}
          id=''
          className='inline-flex items-center px-8 py-4 md:ml-10 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent border shadow-xl focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'
        >
          Get started
        </button>
        {isHovered && (
          <ArrowMedium
            color='white'
            size='12'
            marginTop='6'
            marginLeft='4'
            animationIn='fadeIn animate__delay-0.5s'
            animationOut='fadeOut'
          />
        )}
      </div>
    </div>
  );
};
