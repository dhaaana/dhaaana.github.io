import { useState } from 'preact/hooks';
import { experience } from '../../content/experiences/data';

export default function Experiences() {
  const [jobs] = useState(experience);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='h-[24rem]'>
      <div className='flex h-full gap-x-2'>
        {/* btn container */}
        <div className='relative'>
          <div className='sticky top-[4rem] flex flex-col items-center justify-center bg-white/[69%] shadow-lg p-3 rounded-md gap-y-2'>
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
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
        <article className='px-8 py-6 bg-white/[69%] h-full rounded-md shadow-lg'>
          <div className='flex justify-between items-start mb-4'>
            <div>
              <h2 className='font-semibold'>{title}</h2>
              <h4>{company}</h4>
            </div>
            <p className='bg-violet-200 text-violet-700 px-3 py-1 text-sm font-semibold rounded-lg'>
              {dates}
            </p>
          </div>
          <ul className='space-y-2'>
            {duties.map((duty, index) => {
              return (
                <li key={index} className='flex gap-x-3'>
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
    </section>
  );
}
