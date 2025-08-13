import React from 'react';
import Link from 'next/link';
import Layout from '../bookCamboLayout/layout';

const relatedItems = [
    { id: '1', imageUrl: 'book1.jpg' },
    { id: '2', imageUrl: 'book2.jpg' },
    { id: '3', imageUrl: 'book3.jpg' },
    { id: '4', imageUrl: 'book4.jpg' },
    { id: '5', imageUrl: 'book5.jpg' },
    { id: '6', imageUrl: 'book6.jpg' },
];

const Detail = () => {
    return (
        <Layout>
            <div className='max-w-screen-2xl mx-auto px-4 sm:px-10 xl:px-20 mt-4 flex flex-col lg:flex-row gap-8'>
                <div className='lg:flex-1'>
                    <div>Your Content</div>
                </div>

                <div className='lg:w-[300px]'>
                    <h2 className='text-xl font-bold'>Related</h2>
                    <div className='my-2 w-16 border border-[#fd7600] border-dashed'></div>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2'>
                        {relatedItems.map((item) => (
                            <a
                                key={item.id}
                                href={`/detail/${item.id}`}
                                className="group relative w-full overflow-hidden shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-300/50 dark:bg-black dark:shadow-black/20 dark:hover:border-gray-700 dark:hover:shadow-black/40"
                            >
                                <img src={`/assets/demo-images/${item.imageUrl}`} className="aspect-[6/9] h-auto w-full object-cover" alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Detail;