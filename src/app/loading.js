'use client'
import Image from "next/image";
import { RotatingLines } from "react-loader-spinner";
import logo from '../../public/Images/companyWalaLogo.png'
import { useEffect, useState } from "react";

export default function Loading() {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [showLoading]);

  
    // You can add any UI inside Loading, including a Skeleton.
    return <> {showLoading && <div className='min-h-screen flex justify-center items-center text-primery'><RotatingLines
    visible={true}
    height="96"
    width="96"
    color="text-primery"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    <Image src={logo} alt='Empty!' width={200} height={100}/>
    </div>}
    </>
  }