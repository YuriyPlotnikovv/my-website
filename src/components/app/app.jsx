import { GlobalStyle } from './style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from '../../scroll-to-top';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contacts from '../pages/contacts/contacts';
import SiteCard from '../pages/project-page/project-page';

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
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='sites/'>
              <Route path='sedona' element={<SiteCard id={0} />} />
              <Route path='catenergy' element={<SiteCard id={1} />} />
              <Route path='kekstagram' element={<SiteCard id={2} />} />
              <Route path='farmerproducts' element={<SiteCard id={3} />} />
              <Route path='mywebsite' element={<SiteCard id={4} />} />
            </Route>
            <Route path='contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
