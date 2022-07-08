import { RiComputerLine } from 'react-icons/ri';
import { FaServer, FaAws } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { IProject, IService, ISkill } from './types';

import { BsCircleFill } from 'react-icons/bs';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'Build a beautiful, scalable and responsive SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> or <b>Angular.js</b>',
  },
  {
    Icon: AiOutlineApi,
    title: 'Web3 Development',
    about: 'Develop robust DApps on blockchain using <b>ethers</b>, <b>Moralis</b>,  <b>Thirdweb</b> & other tools',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about: 'Handle database and server api using <b>Spring Boot</b>, <b>NodeJS </b> & other popular frameworks',
  },
  {
    Icon: FaAws,
    title: 'Cloud Development',
    about: 'Use core <b>AWS</b> services for developing, deploying and building an app ',
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Javascript',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'Typescript',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'Angular',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'Java',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Spring Boot',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '85',
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Git',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'VsCode',
    level: '95',
  },
  {
    Icon: BsCircleFill,
    name: 'Maven / Gradle',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Docker',
    level: '70',
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: 'Crypto OrderBook',
    description:
      'Display a realtime orderbook. User is able to switch between bitcoin/usd and eth/usd market data by clicking on a button',
    image_path: '/images/orderbook.png',
    deployed_url: 'https://my-orderbook.vercel.app/',
    github_url: 'https://github.com/nstanogias/my-orderbook',
    category: ['react'],
    key_techs: ['React', 'Styled Components', 'Websocket API', 'Webworker'],
  },
  {
    id: 1,
    name: 'Expensify',
    description: 'MERN app to track your expenses',
    image_path: '/images/expensify.png',
    deployed_url: 'https://mern-expensify.herokuapp.com/',
    github_url: 'https://github.com/nstanogias/react-expensify',
    category: ['node', 'mongo', 'react'],
    key_techs: ['React', 'Context API', 'Node', 'Express', 'Mongo', 'REST API'],
  },

  {
    id: 2,
    name: 'Tournament portal',
    description: 'CRUD app displaying tournament cards',
    image_path: '/images/tourPortal.png',
    deployed_url: 'https://tournament-portal.herokuapp.com/',
    github_url: 'https://github.com/nstanogias/react-tournament-portal',
    category: ['react'],
    key_techs: ['React', 'Redux', 'Styled Components'],
  },

  {
    id: 3,
    name: 'Date App',
    description: 'Fullstack app build with Angular and Spring Boot',
    image_path: '/images/dateapp.png',
    deployed_url: 'https://angular-dateapp.herokuapp.com/',
    github_url: 'https://github.com/nstanogias/dateapp-frontend',
    category: ['angular', 'spring'],
    key_techs: ['Angular', 'Spring Boot'],
  },
  {
    id: 4,
    name: 'Task App',
    description: 'CRUD app with angular',
    image_path: '/images/taskCrud.png',
    deployed_url: 'https://my-angular-task-project.herokuapp.com/',
    github_url: 'https://github.com/nstanogias/angular-task-frontend',
    category: ['angular', 'spring'],
    key_techs: ['Angular', 'Spring Boot'],
  },
  {
    id: 5,
    name: 'Massage Salon',
    description: 'Small react app using styled components',
    image_path: '/images/massage.png',
    deployed_url: '#',
    github_url: 'https://github.com/nstanogias/react-massage-salon',
    category: ['react'],
    key_techs: ['React', 'Styled Components'],
  },
  {
    id: 6,
    name: 'Ski Store',
    description: 'Ecommerce app built with Angular and Spring Boot',
    image_path: '/images/skistore.png',
    deployed_url: '#',
    github_url: 'https://github.com/nstanogias/ski-store-client',
    category: ['angular', 'spring'],
    key_techs: ['Angular', 'Spring Boot'],
  },
  {
    id: 7,
    name: 'Realand',
    description: 'Real Estate Forum',
    image_path: '/images/realand.png',
    deployed_url: 'https://realand-nstanogias.vercel.app/',
    github_url: 'https://github.com/nstanogias/realand',
    category: ['react'],
    key_techs: ['React', 'NextJS'],
  },
  {
    id: 8,
    name: 'Amazon',
    description: 'amazon blockchain where you can buy digital assets with amazon crypto coins',
    image_path: '/images/amazon_blockchain.png',
    deployed_url: 'https://amazon-moralis-blockchain.vercel.app/',
    github_url: 'https://github.com/nstanogias/amazon-moralis-blockchain',
    category: ['blockchain'],
    key_techs: ['React', 'NextJS', 'Moralis', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 9,
    name: 'Coinbase',
    description:
      'coinbase dashboard where users can exchange tokens. Tech: Next.js, sanity CMS, thirdweb SDK, styled components',
    image_path: '/images/coinbase_blockchain.png',
    deployed_url: 'https://coinbase-blockchain-seven.vercel.app/',
    github_url: 'https://github.com/nstanogias/coinbase-blockchain',
    category: ['blockchain'],
    key_techs: ['React', 'NextJS', 'Typescript', 'Styled Components'],
  },
  {
    id: 10,
    name: 'Coinmarketcap',
    description:
      'coinmarketcap clone using moralis as a web3 development framework. token exchange functionality and chat functionality using gun.js lib',
    image_path: '/images/coinmarketcap_blockchain.png',
    deployed_url: 'https://coinmarketcap-moralis.vercel.app/',
    github_url: 'https://github.com/nstanogias/coinmarketcap-moralis',
    category: ['blockchain'],
    key_techs: ['React', 'NextJS', 'Coinmarketcap API', 'TailwindCSS'],
  },
  {
    id: 11,
    name: 'Erc20-staking',
    description: '',
    image_path: '/images/erc20-staking.png',
    deployed_url: 'https://erc20-staking-dapp.vercel.app/',
    github_url: 'https://github.com/nstanogias/erc20-staking-dapp',
    category: ['blockchain'],
    key_techs: ['React', 'NextJS', 'Thirdweb', 'Solidity', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 12,
    name: 'Imdb',
    description: 'Real Estate Forum',
    image_path: '/images/imdb_clone.png',
    deployed_url: 'https://imdb-nextjs-roan.vercel.app/',
    github_url: 'https://github.com/nstanogias/imdb-nextjs',
    category: ['react'],
    key_techs: ['React', 'NextJS', 'TailwindCSS'],
  },
  {
    id: 13,
    name: 'Movies',
    description: '',
    image_path: '/images/next_movies.png',
    deployed_url: 'https://movies-nextjs-strapi.vercel.app/',
    github_url: 'https://github.com/nstanogias/movies-nextjs-frontend',
    category: ['react'],
    key_techs: ['React', 'NextJS', 'TailwindCSS'],
  },
  {
    id: 14,
    name: 'NFT Marketplace',
    description: 'nft marketplace with nextjs, tailwindCSS, thirdweb sdk, sanity',
    image_path: '/images/nft-marketplace.png',
    deployed_url: 'https://nft-marketplace-ruddy.vercel.app/',
    github_url: 'https://github.com/nstanogias/nft-marketplace',
    category: ['blockchain'],
    key_techs: ['React', 'NextJS', 'Thirdweb', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 15,
    name: 'Spotify Clone',
    description: 'spotify clone with nextjs, nextauth, recoil state management and spotify api',
    image_path: '/images/spotify_clone.png',
    deployed_url: 'https://spotify-clone-nstanogias.vercel.app/',
    github_url: 'https://github.com/nstanogias/spotify-clone',
    category: ['react'],
    key_techs: ['React', 'NextJS', 'Nextauth', 'Typescript', 'TailwindCSS'],
  },
];
