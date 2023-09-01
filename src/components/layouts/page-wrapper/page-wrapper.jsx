import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

export default function PageWrapper({...props}) {
  return (
    <>
      <Header />
        <Outlet/>
      <Footer/>
    </>
  )
}
