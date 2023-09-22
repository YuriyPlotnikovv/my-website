import sedona from '../assets/portfolio/sedona/sedona-logo.png';
import sedonaFirst from '../assets/portfolio/sedona/sedona-catalog.png';
import sedonaSecond from '../assets/portfolio/sedona/sedona-features.png';
import sedonaThird from '../assets/portfolio/sedona/sedona-cards.png';
import sedonaFourth from '../assets/portfolio/sedona/sedona-filter.png';
import sedonaFifth from '../assets/portfolio/sedona/sedona-footer.png';
import sedonaSixth from '../assets/portfolio/sedona/sedona-modal.png';

import catenergy from '../assets/portfolio/catenergy/catenergy-logo.png';
import catenergyFirst from '../assets/portfolio/catenergy/catenergy-catalog.png';
import catenergySecond from '../assets/portfolio/catenergy/catenergy-features.png';
import catenergyThird from '../assets/portfolio/catenergy/catenergy-additional.png';
import catenergyFourth from '../assets/portfolio/catenergy/catenergy-footer.png';
import catenergyFifth from '../assets/portfolio/catenergy/catenergy-program.png';

import kekstagram from '../assets/portfolio/kekstagram/kekstagram-logo.png';
import kekstagramFirst from '../assets/portfolio/kekstagram/kekstagram-sorting.png';
import kekstagramSecond from '../assets/portfolio/kekstagram/kekstagram-photo.png';
import kekstagramThird from '../assets/portfolio/kekstagram/kekstagram-comments.png';
import kekstagramFourth from '../assets/portfolio/kekstagram/kekstagram-download.png';
import kekstagramFifth from '../assets/portfolio/kekstagram/kekstagram-popup.png';

import farmerproducts from '../assets/portfolio/farmerproducts/farmerproducts-logo.png';
import farmerproductsFirst from '../assets/portfolio/farmerproducts/farmerproducts-features.png';
import farmerproductsSecond from '../assets/portfolio/farmerproducts/farmerproducts-catalog.png';
import farmerproductsThird from '../assets/portfolio/farmerproducts/farmerproducts-order.png';
import farmerproductsFourth from '../assets/portfolio/farmerproducts/farmerproducts-slider.png';
import farmerproductsFifth from '../assets/portfolio/farmerproducts/farmerproducts-card.png';

import mysite from '../assets/portfolio/logo-mySite.png';
import kinoman from '../assets/portfolio/logo-kinoman.png';

const portfolioList = [
  {
    id: 0,
    title: 'Седона',
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
          'Страница "О Седоне", все скрипты, открытие и закрытие модального окна, слайдер в каталоге, сортировка и вид карточек в каталоге, динамическая загрузка карточек, адаптивность',
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
          'Адаптив под телефон, планшет и десктоп, подключены интерактивные карты от Яндекса, отправка формы заявки на подбор программы, сборка и оптимизация через Gulp',
      },
      {
        id: 4,
        name: 'Не реализовано',
        description:
          'Слайдер на главной странице, корзина, загрузка ассортимента продукции',
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
        description: 'Главная, модальное окно загрузки фотографий',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description:
          'Подключены валидатор и слайдер, загрузка данных с сервера, фильтры изображения, сортировка отображения на сайте, попап статуса загрузки, динамическая подгрузка комментариев и данных фотографий',
      },
      {
        id: 3,
        name: 'Не реализовано',
        description: 'Добавление комментария к фотографиям',
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
    title: 'Фермерские продукты',
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
          'Слайдер в каталоге, привязка слайдера к чекбоксам выбора продукта, табы в описании продукта, оформленный заказ отправляется в Alert на сайте',
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
          'Главная, Обо мне, Портфолио, Контакты и страницы каждого проекта',
      },
      {
        id: 3,
        name: 'Дополнительно',
        description:
          'Подключен слайдер, все данные передаются из data-файлов и элементы отрисовываются по шаблонам',
      },
      {
        id: 4,
        name: 'Не реализовано',
        description: 'Адаптивность',
      },
    ],
    images: [
      {
        id: 0,
        img: '/',
      },
    ],
    logo: mysite,
    to: '',
    deploy: '/',
    repository: 'https://github.com/YuriyPlotnikovv/my-website',
  },
  {
    id: 5,
    title: 'Киноман',
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
