import sedona from '../assets/portfolio/logo-sedona.png';
import catenergy from '../assets/portfolio/logo-catenergy.png';
import kekstagram from '../assets/portfolio/logo-kekstagram.png';
import farmerproducts from '../assets/portfolio/logo-farmerproducts.png';
import mysite from '../assets/portfolio/logo-mySite.png';

const portfolioList = [
  {
    id: 0,
    title: 'Седона',
    text: 'Простой проект на вёрстку',
    description: {
      level: 'Easy',
      text: 'Мой первый учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
      images: [
        {
          id: 0,
          link: '/',
        },
      ],
    },
    logo: sedona,
    to: 'sedona',
    link: 'https://gregarious-cannoli-38ccfd.netlify.app',
  },
  {
    id: 1,
    title: 'Cat Energy',
    text: 'Проект с препроцессором Less',
    description: {
      level: 'Medium',
      text: 'Мой второй учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
      images: [
        {
          id: 0,
          link: '/',
        },
      ],
    },
    logo: catenergy,
    to: 'catenergy',
    link: 'https://precious-chimera-27ad7c.netlify.app',
  },
  {
    id: 2,
    title: 'Kekstagram',
    text: 'Проект на JavaScript',
    description: {
      level: 'Medium',
      text: 'Мой третий учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
      images: [
        {
          id: 0,
          link: '/',
        },
      ],
    },
    logo: kekstagram,
    to: 'kekstagram',
    link: 'https://joyful-crisp-07726d.netlify.app',
  },
  {
    id: 3,
    title: 'Фермерские продукты',
    text: 'Простой проект на ReactJS',
    description: {
      level: 'Easy',
      text: 'Мой четвертый учебный проект, разработан в рамках курса ReactJs-разработчик от HTML Academy.',
      images: [
        {
          id: 0,
          link: '/',
        },
      ],
    },
    logo: farmerproducts,
    to: 'farmerproducts',
    link: 'https://peppy-jelly-63aca8.netlify.app',
  },
  {
    id: 4,
    title: 'My website',
    text: 'Проект на ReactJs',
    description: {
      level: 'Medium',
      text: 'Проект моего личного сайта-резюме.',
      images: [
        {
          id: 0,
          link: '/',
        },
      ],
    },
    logo: mysite,
    to: '/',
    link: '/',
  },
  {
    id: 5,
    title: 'Киноман',
    text: 'Проект на ReactJs',
    description: {
      level: 'Medium',
      text: 'Мой пятый учебный проект, разработан в рамках курса ReactJs-разработчик от HTML Academy.',
      images: [
        {
          id: 0,
          link: '/',
        },
      ],
    },
    logo: '/',
    to: '/',
    link: '/',
  },
];

export default portfolioList;
