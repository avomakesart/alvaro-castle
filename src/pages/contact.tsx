import React, { useState } from 'react';
import { Container } from '../components';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
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
              className='bg-transparent text-white ml-6 border-b-2 border-white'
            />
          </div>

          <div className='flex flex-row items-center mb-10'>
            <p className='text-white text-4xl'>I'm contacting you regarding:</p>
            <input
              name='subject'
              id='subject'
              value={inputVal.subject}
              onChange={handleChange}
              className='bg-transparent text-white ml-6 border-b-2 border-white'
            />
          </div>

          <div className='flex flex-row items-center mb-10'>
            <p className='text-white text-4xl'>You can reach me at*:</p>
            <input
              name='details'
              id='details'
              value={inputVal.details}
              onChange={handleChange}
              className='bg-transparent text-white ml-6 border-b-2 border-white'
            />
          </div>

          <div className='flex flex-row items-center mb-10'>
            <p className='text-white text-4xl'>One more thing:</p>
            <input
              name='message'
              id='message'
              value={inputVal.message}
              onChange={handleChange}
              className='bg-transparent text-white ml-6 border-b-2 border-white'
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
