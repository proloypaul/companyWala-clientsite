import Image from 'next/image';
import logo from '../../../../public/Images/companyWalaLogo.png'
import Link from 'next/link';
import { FaCartArrowDown } from "react-icons/fa6";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { HiUser } from "react-icons/hi2";

const Navbar = () => {
    return (
        <nav className=' font-serif'>
            <header>
                <div className='sticky top-0 lg:flex justify-between items-center px-10 py-5'>
                    <div>
                        <Link href="/">
                            <Image src={logo} alt='Empty!' width={200} height={100}/>
                        </Link>
                    </div>
                    <div className=''>
                        <ul className='flex justify-center items-center w-full'>
                            <li><Link href="/explore">Explore</Link></li>
                            <li className='mx-3'><Link href="/company">Company</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li className='ml-3'><Link href="/offers">offers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <li className='relative'><Link href="/" className='px-4 text-primery text-3xl flex'><FaCartArrowDown /></Link> </li>
                            <li className='mx-3'><Link href="/" className='py-3 px-6 bg-primery border-0 rounded-tl-lg rounded-br-lg text-white'>LogIn</Link></li>
                            <li><Link href="/"  className='py-3 px-3 text-3xl text-secondary border-0 rounded-full flex'><HiUser/></Link></li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div className='flex items-center justify-center'>
                        <input placeholder='Search grocery Items..'  className='border-2 border-primery rounded-tl-lg font-normal text-0 text-black rounded-bl-lg py-1 px-4 w-1/3'/>
                        <span className='py-2 px-8 bg-primery border-0 rounded-tr-lg rounded-br-lg text-white text-xl cursor-pointer'><BiSolidSearchAlt2 /></span>
                    </div>
                    
                </div>
               
            </header>  
        </nav>
    );
};

export default Navbar;