import { GlobalStyle } from './style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from '../../scroll-to-top';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contacts from '../pages/contacts/contacts';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<PageWrapper />} >
            <Route index element={<Main />} />
            <Route path='about' element={<About />} />
            <Route path='portfolio' element={<Portfolio />}>
              <Route path='sedona' element={''} />
              <Route path='catenergy' element={''} />
              <Route path='kekstagram' element={''} />
              <Route path='kinoman' element={''} />
            </Route>
            <Route path='contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
