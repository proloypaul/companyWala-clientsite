import Image from 'next/image';
import logo from '../../../../public/Images/companyWalaLogo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='py-4 font-serif'>
            <header>
                <div className='flex justify-between items-center text-primery px-10'>
                    <Link href="/">
                        <Image src={logo} alt='Empty!' width={200} height={100}/>
                    </Link>
                    <div>
                        <ul className='flex items-center'>
                            <li><Link href="/" className='py-3 px-6 bg-primery border-0 rounded-tl-lg rounded-br-lg text-white'>Cart</Link></li>
                            <li className='mx-3'><Link href="/" className='py-3 px-6 bg-primery border-0 rounded-tl-lg rounded-br-lg text-white'>LogIn</Link></li>
                            <li><Link href="/"  className='py-3 px-5 bg-primery border-0 rounded-full text-white'>PP</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center py-3  px-10  text-primery'>
                    <div>
                        <input placeholder='Search grocery Items..'  className='border-2 border-primery rounded-lg py-2 px-4'/>
                        <span className=''>Serach</span>
                    </div>
                    <div>
                        <ul className='flex items-center'>
                            <li><Link href="/explore">Explore</Link></li>
                            <li className='mx-3'><Link href="/company">Company</Link></li>
                            <li><Link href="/products">Products</Link></li>
                        </ul>
                    </div>
                </div>
               
            </header>  
        </nav>
    );
};

export default Navbar;