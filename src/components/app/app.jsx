import { GlobalStyle } from './style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from '../../scroll-to-top';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import Main from '../pages/main/main';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<PageWrapper />} >
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
