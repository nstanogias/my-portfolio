import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import Image from 'next/image';
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <Image width='128' height='128' src='/images/profile.jpg' alt='avatar' className='mx-auto border rounded-full ' />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-roboto'>
        <span className='text-green'>Nikolaos </span>Stanogias
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200'>Web Developer</p>
      {/* Resume */}
      <a
        href='/assets/cvNikolaosStanogias.pdf'
        download='cvNikolaosStanogias.pdf'
        className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200'
      >
        <GiTie className='w-6 h-6' />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
        <a href='https://www.facebook.com/nikos.stanogias/' aria-label='YouTube'>
          <AiFillFacebook className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/nikolaos-stanogias-7a359a50/' aria-label='Linkedin'>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://github.com/nstanogias' aria-label='GitHub'>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
        </a>
      </div>

      {/* Contact info */}
      <div className='py-4 my-5 bg-gray-200 dark:bg-black-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className='flex items-center justify-center'>
          <GoLocation className='mr-2' /> <span>Vienna, Austria</span>
        </div>
        <p className='my-2 '> nstanogias@gmail.com </p>
        <p className='my-2'> +45 52605885 </p>
      </div>
      <button
        className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
        onClick={() => window.open('mailto:nstanogias@gmail.com')}
      >
        Email me
      </button>
      <button
        onClick={changeMode}
        className='w-8/12 px-5 py-2 my-4 text-white rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 '
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
