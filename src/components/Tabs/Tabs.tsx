import React, { useState } from 'react';
import { Image } from '..';

interface TabsProps {
  color: string;
}

export const Tabs: React.FC<TabsProps> = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal ' +
                  (openTab === 1
                    ? 'text-white border-b-2 border-' + color + '-600'
                    : 'text-white bg-transparent')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Tech Stack
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal ' +
                  (openTab === 2
                    ? 'text-white border-b-2 border-' + color + '-600'
                    : 'text-white bg-transparent')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                Styles
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal ' +
                  (openTab === 3
                    ? 'text-white border-b-2 border-' + color + '-600'
                    : 'text-white bg-transparent')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Databases
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal ' +
                  (openTab === 4
                    ? 'text-white border-b-2 border-' + color + '-600'
                    : 'text-white bg-transparent')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Tools
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal ' +
                  (openTab === 5
                    ? 'text-white border-b-2 border-' + color + '-600'
                    : 'text-white bg-transparent')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                UX
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-transparen text-whitet w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <div className='grid grid-cols-3 gap-4'></div>
                  <section className='text-gray-700 body-font'>
                    <div className='container px-8 mx-auto py-36 lg:px-4'>
                      <div className='flex flex-wrap text-left'>
                        <div className='px-8 py-6 lg:w-1/4 md:w-full'>
                          <Image
                            src='https://res.cloudinary.com/bluecatencode/image/upload/v1595454589/Icons/javascript_yhicga.png'
                            alt='JavaScript'
                            width='20'
                          />
                          <h2 className='mb-3 text-lg font-semibold text-white mt-4 lg:text-2xl title-font'>
                            Information 1
                          </h2>
                        </div>
                        <div className='px-8 py-6 lg:w-1/4 md:w-full'>
                          <Image
                            src='https://res.cloudinary.com/bluecatencode/image/upload/v1595454589/Icons/reactjs_ockado.png'
                            alt='JavaScript'
                            width='20'
                          />
                          <h2 className='mb-3 text-lg font-semibold text-white mt-4 lg:text-2xl title-font'>
                            {' '}
                            Information 2
                          </h2>
                        </div>
                        <div className='px-8 py-6 lg:w-1/4 md:w-full'>
                          <Image
                            src='https://res.cloudinary.com/bluecatencode/image/upload/v1595454590/Icons/graphql_iygn5k.png'
                            alt='JavaScript'
                            width='20'
                          />
                          <h2 className='mb-3 text-lg font-semibold text-white mt-4 lg:text-2xl title-font'>
                            {' '}
                            Information 3
                          </h2>
                        </div>
                        <div className='px-8 py-6 lg:w-1/4 md:w-full'>
                          <Image
                            src='https://res.cloudinary.com/bluecatencode/image/upload/v1595454589/Icons/wordpress_tt0aje.png'
                            alt='JavaScript'
                            width='20'
                          />
                          <h2 className='mb-3 text-lg font-semibold text-white mt-4 lg:text-2xl title-font'>
                            {' '}
                            Information 4
                          </h2>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id='link3'>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'} id='link3'>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
