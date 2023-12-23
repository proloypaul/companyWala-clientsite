'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const LogUp = () => {
    const [role, setRole] = useState('')
    return (
        <section>
            <div>
                <div className='py-10'>
                    <ul className='flex justify-center cursor-pointer'>
                        <li><Link href="/logup/registerCompany">Company</Link></li>
                        <li className='mx-4'><Link href="/logup/shopKeeperRegister">Shopkeeper</Link></li>
                        <li><Link href="/logup/customarRegister">Customar</Link></li>
                    </ul>
                </div>
                <form>

                </form>
            </div>
            <h1>Registation section</h1>
        </section>
    );
};

export default LogUp;