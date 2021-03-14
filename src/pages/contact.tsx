import React, { useState } from 'react';
import { Container } from '../components';
import 'animate.css';
import { useHover } from '../hooks';
import { ArrowMedium } from '../assets/icons/ArrowMedium';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const [hoverRef, isHovered] = useHover() as any;
  const [inputVal, setInputVal] = useState({
    fullname: '',
    subject: '',
    details: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setInputVal(e.target.value);
  };

  console.log(
    'Name: ',
    inputVal.fullname,
    'Subject: ',
    inputVal.subject,
    'Details: ',
    inputVal.details,
    'Message: ',
    inputVal.message
  );

  return (
    <Container>
      <div className='flex flex-col justify-center'>
        <form className='mx-auto'>
          <div className='flex flex-row items-center mb-10 -mt-10'>
            <p className='text-white text-4xl'>Hi My name is*:</p>
            <input
              name='fullname'
              id='fullname'
              value={inputVal.fullname}
              onChange={handleChange}
              className='bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-4xl border-white max-w-full min-w-48'
            />
          </div>

          <div className='flex flex-row items-center mb-10'>
            <p className='text-white text-4xl'>I'm contacting you regarding:</p>
            <input
              name='subject'
              id='subject'
              value={inputVal.subject}
              onChange={handleChange}
              className='bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-4xl border-white max-w-full min-w-48'
            />
          </div>

          <div className='flex flex-row items-center mb-10'>
            <p className='text-white text-4xl'>You can reach me at*:</p>
            <input
              name='details'
              id='details'
              value={inputVal.details}
              onChange={handleChange}
              className='bg-transparent text-white ml-6 border-b-2 p-2 focus:outline-none text-4xl border-white max-w-full min-w-48'
            />
          </div>

          <div className='flex flex-col items-left mb-10'>
            <p className='text-white text-4xl text-left'>One more thing:</p>
            <input
              name='message'
              id='message'
              value={inputVal.message}
              onChange={handleChange}
              className='bg-transparent text-white mt-1 p-2 focus:outline-none text-4xl border-b-2 border-white max-w-full min-w-48'
            />
          </div>

          <div className='flex'>
            <button
              ref={hoverRef}
              id=''
              className='border-none text-5xl text-white tracking-tight text-left justify-start mt-2'
            >
              Send
            </button>
            {isHovered && (
              <ArrowMedium
                color='white'
                size='12'
                marginTop='2'
                marginLeft='4'
                animationIn='fadeIn animate__delay-0.5s'
                animationOut='fadeOut'
              />
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
