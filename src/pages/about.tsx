import NextLink from 'next/link';
import React from 'react';
import { Container } from '../components';
import { Card } from '../components/Card/Card';
import { Tabs } from '../components/Tabs/Tabs';

interface aboutProps {}

const About: React.FC<aboutProps> = ({}) => {

  return (
    <Container title='About'>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <img
          src='https://alvarocastle.com/static/media/self-cut.ca820aad.png'
          alt='profile'
          className='max-full w-72'
        />
        <p className='text-white max-w-xl mt-10 md:mt-0 md:ml-16 text-2xl text-left'>
          I am a software engineer based in Guadalajara, Jalisco. I create web
          apps and cool software, focused on the best design patterns and
          creating stories visually, through enjoyable and meaningful
          experiences.
        </p>
      </div>

      <div className='mt-32'>
        <h1 className='text-5xl text-white text-left  mb-16'>
          Professional Skills
        </h1>
        <Tabs color='white' vertical />
      </div>

      <div className='mt-32'>
        <h1 className='text-5xl text-white text-left  mb-16'>Experience</h1>
      </div>

      <div className='mt-32'>
        <h1 className='text-5xl text-white text-left  mb-16'>Certificates</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>

      <div className='mt-32 flex justify-center'>
        <h1 className='cursor-pointer text-5xl text-white text-center mb-16 border-b-4 border-white w-72'>
          <NextLink href='/contact'>Contact me</NextLink>
        </h1>
      </div>
    </Container>
  );
};

export default About;
