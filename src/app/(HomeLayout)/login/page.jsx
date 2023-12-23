import { IoLogoGoogle } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";


const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center font-serif'>
            <div>
                <form>
                    <label className="block">
                        <input type='number' placeholder='+88' className="transition ease-in-out  w-full py-2 px-8 bg-personalWhite border-0 rounded-tl-full rounded-br-full shadow shadow-inner hover:shadow-xl duration-300"/>
                    </label >
                    <label >
                        <input type='password' placeholder='Enter Password' className="transition ease-in-out  w-full py-2 px-8 bg-personalWhite border-0 rounded-tl-full rounded-br-full my-3 shadow shadow-inner hover:shadow-xl duration-300"/>
                    </label >
                    <button type="submit" className="transition ease-in-out py-2 w-full bg-primery border-0  rounded-tl-full rounded-br-full text-personalWhite font-bold hover:text-secondary duration-300">LogIn</button>
                    <label  className="text-5xl mt-3 flex justify-around items-center">
                        <button className="transition ease-in-out py-2 px-4 bg-personalWhite text-primery border-0  rounded-br-lg rounded-tl-lg font-bold shadow shadow-inner hover:shadow-xl hover:text-secondary duration-300"><IoLogoGoogle /></button>
                        <button className="transition ease-in-out py-2 px-4 bg-personalWhite text-primery border-0  rounded-br-lg rounded-tl-lg font-bold shadow shadow-inner hover:shadow-xl hover:text-secondary duration-300"><BsGithub /></button>
                    </label >
                </form>
                <p className="my-6">New to companyWala <Link href="/logup" className="text-blue-500 font-bold">Register here</Link></p>
            </div>
        </div>
    );
};

export default Login;