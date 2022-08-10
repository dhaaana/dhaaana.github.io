import { useState } from 'preact/hooks';
import { experience } from '../../content/experiences/data';

export default function Experiences() {
  const [jobs] = useState(experience);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];
  return (
    <div className='sm:h-[24rem]'>
      <div className='flex sm:flex-row flex-col h-full gap-x-2 gap-y-4'>
        {/* btn container */}
        <div className='bg-white/[69%] shadow-lg p-3 rounded-md sm:hidden block'>
          <select
            name='company'
            id='company'
            onChange={(e) => setValue(e.target.value)}
            className='w-full p-3 rounded-md bg-gradient-to-r from-violet-100 to-violet-200 text-violet-700 font-semibold focus:outline-none focus:ring-4 focus:ring-violet-200'
          >
            {jobs.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.company}
                </option>
              );
            })}
          </select>
        </div>
        <div className='hidden sm:block relative'>
          <div className='sticky top-[4rem] flex sm:flex-col items-center justify-center bg-white/[69%] shadow-lg p-3 rounded-md gap-y-2'>
            {jobs.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`${
                    index === value &&
                    'bg-gradient-to-r from-violet-500 to-violet-700 text-white'
                  } py-2 px-3 whitespace-nowrap font-semibold rounded-md w-full transition focus:outline-none focus:ring-4 focus:ring-violet-200 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-700`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
        </div>
        {/* job info */}
        <article className='px-5 sm:px-8 py-6 bg-white/[69%] h-full rounded-md shadow-lg'>
          <div className='flex flex-col sm:flex-row items-center justify-between sm:items-start gap-y-2 mb-4'>
            <div className='sm:text-left text-center'>
              <h2 className='font-semibold'>{title}</h2>
              <h4>{company}</h4>
            </div>
            <p className='bg-violet-200 text-violet-700 px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg'>
              {dates}
            </p>
          </div>
          <ul className='space-y-2'>
            {duties.map((duty, index) => {
              return (
                <li key={index} className='flex gap-x-3 sm:text-base text-sm'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <p>{duty}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );
}
