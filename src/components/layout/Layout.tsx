import Header from '../header/Header'
import Footer from '../footer/Footer'
import PageScrollTop from '../pageScrollTop/PageScrollTop'


import { Outlet } from 'react-router-dom'

export default function Layout(){
  return (
    <>
      <PageScrollTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
