import Header from '../header/Header'
import Footer from '../footer/Footer'
import ScrollToTop from '../scrollTotopTemp/ScrollToTop.tsx'


import { Outlet } from 'react-router-dom'

export default function Layout(){
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
