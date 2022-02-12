import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeInUp, routeFade } from '../animations';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const Resume = () => {
  return (
    <motion.div className='px-6 py-2' variants={routeFade} initial='hidden' animate='visible' exit='exit'>
      <Head>
        <title>Nikolaos Stanogias | Web Developer</title>
      </Head>
      {/* //! Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='mt-2 text-xl font-bold'>Msc. Software Engineering</h5>
            <p className='font-semibold'>KTH Royal Institute of Technology (2013-2015)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Latest Experience</h5>
          <div>
            <h5 className='mt-2 text-xl font-bold'>Freelance Sr. Software Developer</h5>
            <div className='flex'>
              <span className='font-semibold'>RBI International,</span>
              <span className='ml-1 text-cadetblue'>Vienna, Austria</span>
            </div>
          </div>
          <div>
            <h5 className='mt-2 text-xl font-bold'>Freelance Web Developer</h5>
            <div className='flex'>
              <span className='font-semibold'>TDC Group</span>
              <span className='ml-1 text-cadetblue'>Copenhagen, Denmark</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
