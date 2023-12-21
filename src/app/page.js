import HomePage from '@/Components/Shared/HomePage/HomePage'
import Navbar from '@/Components/Shared/Navbar/Navbar'
import Company from './(HomeLayout)/company/page'
import Explore from './(HomeLayout)/explore/page'
import Products from './(HomeLayout)/products/page'
import Banner from '@/Components/Banner/Banner'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Explore/>
      <Products/>
      <Company/>
  
    </>
  )
}
