import React from 'react';

const LogUp = () => {
    return (
        <section className='flex justify-center my-10'>
            <div className='py-20 text-center bg-personalWhite w-2/5 border-0 rounded-lg my-10 shadow shadow-2xl'>
                <form>
                    <div>
                        <input type='text' placeholder='Enter Your Name' name='name' className='py-2 px-5 bg-bgColor border-0 rounded-full w-3/5 shadow shadow-inner hover:shadow-xl'/>
                    </div>
                    <div className='py-3'>
                        <input type='number' placeholder='Enter Your Number' name='phone' className='py-2 px-5 bg-bgColor border-0 rounded-full w-3/5 shadow shadow-inner hover:shadow-xl'/>
                    </div>
                    <div className='pb-3'>
                        <select className='py-2 px-5 bg-bgColor border-0 rounded-full w-3/5 shadow shadow-inner hover:shadow-xl' name='role'>
                            <option selected>Select Your Role</option>
                            <option value="company">Company</option>
                            <option value="shopkeeper">ShopKeeper</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div>
                    <div>
                        <input type='email' placeholder='abc@gmail.com' name='email' className='py-2 px-5 bg-bgColor border-0 rounded-full w-3/5 shadow shadow-inner hover:shadow-xl'/>
                    </div>
                    <div className='py-3'>
                        <input type='password' placeholder='Enter YOur Password' name='password' className='py-2 px-5 bg-bgColor border-0 rounded-full w-3/5 shadow shadow-inner hover:shadow-xl'/>
                    </div>
                    <div className='py-3'>
                        <input type='radio' value="Male" name='gender' />Male
                        <input type='radio' value="Female" name='gender' className='ml-3'/>Female
                        <input type='radio' value="Other" name='gender'  className='ml-3'/>Other
                    </div>

                    <div>
                        <button className='py-2 px-5 bg-primery text-white border-0 rounded-full w-3/5 shadow shadow-inner hover:shadow-xl'>Register</button>
                    </div>
                </form>
            </div>
            
            
        </section>
    );
};

export default LogUp;