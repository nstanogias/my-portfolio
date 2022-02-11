import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 px-48 my-14'>
      <div className='col-span-12 font-bold bg-white lg:col-span-3 rounded-2xl'>Sidebar</div>
      <div className='bg-white lg:col-span-9 rounded-2xl'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;