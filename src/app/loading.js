'use client'
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className='min-h-screen flex justify-center items-center text-primery'><RotatingLines
    visible={true}
    height="96"
    width="96"
    color="text-primery"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  }