import React, { ReactNode } from 'react';

interface ContainerProps {
  title?: string;
  children?: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <div className='container w-full p-20 m-4 mx-auto my-16 text-center bg-transparent h-96'>
      <h1 className='text-7xl text-white'>{title}</h1>
      <div className='mt-20'>{children}</div>
    </div>
  );
};
