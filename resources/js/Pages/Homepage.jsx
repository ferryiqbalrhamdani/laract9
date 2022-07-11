import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <div>
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className='p-4 m-2 bg-white text-black shadow-md border'>
                            <p className='text-2xl'>{data.title}</p>
                            <p className='text-sm'>{data.description}</p>
                            <i>{data.category}</i>
                            <i>{data.author}</i>
                        </div>
                    )
                }): <p>Saat ini belum ada berita</p>}
            </div>
        </div>
    )
}