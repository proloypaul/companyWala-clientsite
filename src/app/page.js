import HomePage from '@/Components/Shared/HomePage/HomePage'
import Navbar from '@/Components/Shared/Navbar/Navbar'
import Company from './(HomeLayout)/company/page'
import Explore from './(HomeLayout)/explore/page'
import Products from './(HomeLayout)/products/page'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Explore/>
      <Products/>
      <Company/>
  
    </>
  )
}
