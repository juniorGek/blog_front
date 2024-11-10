"use client";

import { postUnSubscribe } from '@/helpers/backend_helper';
import { message as antdMessage } from 'antd'; // Renomme `message` de antd
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UnSubscribePage = () => {
    const searchParam = useSearchParams();
    const email = searchParam.get('email');
    const [responseMessage, setResponseMessage] = useState(''); // Renomme `message` en `responseMessage`

    useEffect(() => {
        if (email) {
            postUnSubscribe({ email })
                .then((res) => {
                    console.log('res', res);
                    setResponseMessage(res?.msg);
                })
                .catch((err) => {
                    setResponseMessage(err?.msg || 'An error occurred');
                });
        }
    }, [email]);

    return (
        <div className='flex flex-col h-screen w-screen justify-center items-center'>
            <h2 className='header_2'>
                {responseMessage}
            </h2>
            <Link className='header_4 text-Primary_Color mt-4' href="/">
                Return Home
            </Link>
        </div>
    );
};

export default UnSubscribePage;
