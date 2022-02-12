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
    Icon: FaServer,
    title: 'Backend  Development',
    about: 'handle database, server, api using <b>Spring Boot </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'Develop robust  REST API using <b>Spring Boot</b>  & <b>Node API</b> ',
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
    name: 'Java',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Javascript',
    level: '90',
  },
  {
    Icon: BsCircleFill,
    name: 'Typescript',
    level: '90',
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
];
