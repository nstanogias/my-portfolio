import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { fadeInUp, routeFade, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import Head from 'next/head';
const About = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1 '
      variants={routeFade}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Head>
        <title>Nikolaos Stanogias | Web Developer | About</title>
      </Head>
      <h4 className='my-3'>
        Passionate web developer with 7 years of experience, having worked in numerous projects within Finance, Telecom
        and eCommerce industries. I never stop learning and always try to keep myself up-to-date with latest trends and
        technologies. Lately, I have keen interest for blockchain and Web3 DApps.
      </h4>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className='my-3 text-xl font-semibold tracking-wide text-gray-600'>What I am doing</h4>

        <motion.div className='grid gap-6 my-3 md:grid-cols-2' variants={stagger} animate='animate' initial='initial'>
          {services.map((service) => (
            <motion.div
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 '
              key={service.title}
              variants={fadeInUp}
              // animate="animate"
              // initial="initial"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48
// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
