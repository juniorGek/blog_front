"use client";

import { postUnSubscribe } from '@/helpers/backend_helper';
import { message } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UnSubscribePage = () => {
    const searchParam = useSearchParams()
    const email = searchParam.get('email')
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (email) {
            postUnSubscribe({ email })
                .then((res) => {
                    console.log('res', res)
                    setMessage(res?.msg)
                })
                .catch((err) => {
                    setMessage(res?.msg)
                })

        }
    }, [email])



    return (
        <div className='flex flex-col h-screen w-screen justify-center items-center ' >
            {/* <Image src='/404.svg' width={400} height={400} /> */}
            <h2 className='header_2' >
                {message}
            </h2>
            <Link className='header_4 text-Primary_Color mt-4' href="/">
                Return Home</Link>
        </div>
    );
};

export default UnSubscribePage;