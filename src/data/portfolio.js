import sedona from '../assets/portfolio/sedona/sedona-logo.webp';
import sedonaFirst from '../assets/portfolio/sedona/sedona-catalog.webp';
import sedonaSecond from '../assets/portfolio/sedona/sedona-features.webp';
import sedonaThird from '../assets/portfolio/sedona/sedona-cards.webp';
import sedonaFourth from '../assets/portfolio/sedona/sedona-filter.webp';
import sedonaFifth from '../assets/portfolio/sedona/sedona-footer.webp';
import sedonaSixth from '../assets/portfolio/sedona/sedona-modal.webp';

import catenergy from '../assets/portfolio/catenergy/catenergy-logo.webp';
import catenergyFirst from '../assets/portfolio/catenergy/catenergy-catalog.webp';
import catenergySecond from '../assets/portfolio/catenergy/catenergy-features.webp';
import catenergyThird from '../assets/portfolio/catenergy/catenergy-additional.webp';
import catenergyFourth from '../assets/portfolio/catenergy/catenergy-footer.webp';
import catenergyFifth from '../assets/portfolio/catenergy/catenergy-program.webp';

import kekstagram from '../assets/portfolio/kekstagram/kekstagram-logo.webp';
import kekstagramFirst from '../assets/portfolio/kekstagram/kekstagram-sorting.webp';
import kekstagramSecond from '../assets/portfolio/kekstagram/kekstagram-photo.webp';
import kekstagramThird from '../assets/portfolio/kekstagram/kekstagram-comments.webp';
import kekstagramFourth from '../assets/portfolio/kekstagram/kekstagram-download.webp';
import kekstagramFifth from '../assets/portfolio/kekstagram/kekstagram-popup.webp';

import farmerproducts from '../assets/portfolio/farmerproducts/farmerproducts-logo.webp';
import farmerproductsFirst from '../assets/portfolio/farmerproducts/farmerproducts-features.webp';
import farmerproductsSecond from '../assets/portfolio/farmerproducts/farmerproducts-catalog.webp';
import farmerproductsThird from '../assets/portfolio/farmerproducts/farmerproducts-order.webp';
import farmerproductsFourth from '../assets/portfolio/farmerproducts/farmerproducts-slider.webp';
import farmerproductsFifth from '../assets/portfolio/farmerproducts/farmerproducts-card.webp';

import mysite from '../assets/portfolio/mywebsite/mywebsite-logo.webp';
import mysiteFirst from '../assets/portfolio/mywebsite/mywebsite-about.webp';
import mysiteSecond from '../assets/portfolio/mywebsite/mywebsite-portfolio.webp';
import mysiteThird from '../assets/portfolio/mywebsite/mywebsite-slider.webp';
import mysiteFourth from '../assets/portfolio/mywebsite/mywebsite-contacts.webp';
import mysiteFifth from '../assets/portfolio/mywebsite/mywebsite-project.webp';

import kinoman from '../assets/portfolio/logo-kinoman.webp';

const portfolioList = [
  {
    id: 0,
    title: 'Sedona',
    textOne: 'Простой проект на вёрстку',
    textTwo:
      'Первый учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
    features: [
      {
        id: 0,
        name: 'Сложность',
        description: 'Easy',
      },
      {
        id: 1,
        name: 'Использованные технологии',
        description: 'HTML - 55,4%, CSS - 44,6%',
      },
      {
        id: 2,
        name: 'Сверстанные страницы',
        description: 'Главная, Каталог, модальное окно',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description: 'Ручная оптимизация всех фотографий',
      },
      {
        id: 4,
        name: 'Не реализовано',
        description:
          'Страница "О Седоне"; Все скрипты, открытие и закрытие модального окна; Слайдер в каталоге; Сортировка и вид карточек в каталоге; Динамическая загрузка карточек; Адаптивность',
      },
    ],
    images: [
      {
        id: 0,
        img: sedonaFirst,
      },
      {
        id: 1,
        img: sedonaSecond,
      },
      {
        id: 2,
        img: sedonaThird,
      },
      {
        id: 3,
        img: sedonaFourth,
      },
      {
        id: 4,
        img: sedonaFifth,
      },
      {
        id: 5,
        img: sedonaSixth,
      },
    ],
    logo: sedona,
    to: '/sites/sedona',
    deploy: 'https://gregarious-cannoli-38ccfd.netlify.app',
    repository: 'https://github.com/YuriyPlotnikovv/sedona',
  },
  {
    id: 1,
    title: 'Cat Energy',
    textOne: 'Проект с препроцессором Less',
    textTwo:
      'Второй учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
    features: [
      {
        id: 0,
        name: 'Сложность',
        description: 'Medium',
      },
      {
        id: 1,
        name: 'Использованные технологии',
        description: 'HTML - 39,7%, LESS - 56,1%, JS - 4,2%',
      },
      {
        id: 2,
        name: 'Сверстанные страницы',
        description: 'Главная, Каталог, Подбор программы',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description:
          'Адаптив под телефон, планшет и десктоп; Подключены интерактивные карты от Яндекса; Отправка формы заявки на подбор программы; Сборка и оптимизация через Gulp',
      },
      {
        id: 4,
        name: 'Не реализовано',
        description:
          'Слайдер на главной странице; Корзина; Загрузка ассортимента продукции',
      },
    ],
    images: [
      {
        id: 0,
        img: catenergyFirst,
      },
      {
        id: 1,
        img: catenergySecond,
      },
      {
        id: 2,
        img: catenergyThird,
      },
      {
        id: 3,
        img: catenergyFourth,
      },
      {
        id: 4,
        img: catenergyFifth,
      },
    ],
    logo: catenergy,
    to: '/sites/catenergy',
    deploy: 'https://precious-chimera-27ad7c.netlify.app',
    repository: 'https://github.com/YuriyPlotnikovv/cat-energy',
  },
  {
    id: 2,
    title: 'Kekstagram',
    textOne: 'Проект на JavaScript',
    textTwo:
      'Третий учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
    features: [
      {
        id: 0,
        name: 'Сложность',
        description: 'Medium',
      },
      {
        id: 1,
        name: 'Использованные технологии',
        description: 'HTML - 8,4%, CSS - 19,2%, JS - 72,4%',
      },
      {
        id: 2,
        name: 'Сверстанные страницы',
        description: 'Главная, Модальное окно загрузки фотографий',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description:
          'Подключены валидатор и слайдер; Загрузка данных с сервера; Фильтры изображения; Сортировка отображения на сайте; Попап статуса загрузки; Динамическая подгрузка комментариев и данных фотографий',
      },
      {
        id: 3,
        name: 'Не реализовано',
        description:
          'Добавление комментария к фотографиям; Отображение загруженного изображения на сайте',
      },
    ],
    images: [
      {
        id: 0,
        img: kekstagramFirst,
      },
      {
        id: 1,
        img: kekstagramSecond,
      },
      {
        id: 2,
        img: kekstagramThird,
      },
      {
        id: 3,
        img: kekstagramFourth,
      },
      {
        id: 4,
        img: kekstagramFifth,
      },
    ],
    logo: kekstagram,
    to: '/sites/kekstagram',
    deploy: 'https://joyful-crisp-07726d.netlify.app',
    repository: 'https://github.com/YuriyPlotnikovv/kekstagram',
  },
  {
    id: 3,
    title: 'Farmer Products',
    textOne: 'Простой проект на ReactJS',
    textTwo:
      'Четвертый учебный проект, разработан в рамках курса ReactJs-разработчик от HTML Academy.',
    features: [
      {
        id: 0,
        name: 'Сложность',
        description: 'Easy',
      },
      {
        id: 1,
        name: 'Использованные технологии',
        description: 'HTML - 1,4%, JS - 98,6%',
      },
      {
        id: 2,
        name: 'Сверстанные страницы',
        description: 'Главная, Каталог',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description:
          'Слайдер в каталоге; Привязка слайдера к чекбоксам выбора продукта; Табы в описании продукта; Оформленный заказ отправляется в Alert на сайте (для наглядности)',
      },
      {
        id: 4,
        name: 'Не реализовано',
        description: 'Полноценное оформление заказа с отправкой на сервер',
      },
    ],
    images: [
      {
        id: 0,
        img: farmerproductsFirst,
      },
      {
        id: 1,
        img: farmerproductsSecond,
      },
      {
        id: 2,
        img: farmerproductsThird,
      },
      {
        id: 3,
        img: farmerproductsFourth,
      },
      {
        id: 4,
        img: farmerproductsFifth,
      },
    ],
    logo: farmerproducts,
    to: '/sites/farmerproducts',
    deploy: 'https://peppy-jelly-63aca8.netlify.app',
    repository: 'https://github.com/YuriyPlotnikovv/farmer-products',
  },
  {
    id: 4,
    title: 'My website',
    textOne: 'Проект на ReactJs',
    textTwo: 'Проект моего личного сайта-резюме.',
    features: [
      {
        id: 0,
        name: 'Сложность',
        description: 'Medium',
      },
      {
        id: 1,
        name: 'Использованные технологии',
        description: 'HTML - 1,2%, JS - 98,8%',
      },
      {
        id: 2,
        name: 'Сверстанные страницы',
        description:
          'Главная, Обо мне, Портфолио, Контакты и страницы для каждого проекта',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description:
          'Подключен слайдер; Данные передаются из data.js-файлов и элементы отрисовываются по шаблонам',
      },
      {
        id: 4,
        name: 'Не реализовано',
        description:
          'Адаптивность через React-responsive; Анимации; Форма отправки сообщения на почту (временно реализовано через ссылку)',
      },
    ],
    images: [
      {
        id: 0,
        img: mysiteFirst,
      },
      {
        id: 1,
        img: mysiteSecond,
      },
      {
        id: 2,
        img: mysiteThird,
      },
      {
        id: 3,
        img: mysiteFourth,
      },
      {
        id: 4,
        img: mysiteFifth,
      },
    ],
    logo: mysite,
    to: '/sites/mywebsite',
    deploy: '/',
    repository: 'https://github.com/YuriyPlotnikovv/my-website',
  },
  {
    id: 5,
    title: 'Cinemaddict',
    textOne: 'Проект на ReactJs',
    textTwo:
      'Пятый учебный проект, разработан в рамках курса Frontend-разработчик от HTML Academy.',
    features: [
      {
        id: 0,
        name: 'Сложность',
        description: 'Medium',
      },
    ],
    images: [
      {
        id: 0,
        img: '/',
      },
    ],
    logo: kinoman,
    to: '',
    deploy: '/',
    repository: 'https://github.com/YuriyPlotnikovv/kinoman',
  },
];

export default portfolioList;
