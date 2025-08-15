'use client';
import React from 'react';
import MyCategory from '../Home/components/my-category';
import ViewMore from './view-more';

interface NftCardProps {
    id: string;
    imageUrl: string;
}

interface CategoryProps {
    id: string;
    name: string;
    items: NftCardProps[];
    // children_items: NftCardProps[];
}

const categoriesWithItems: CategoryProps[] = [
    {
        id: 'newArrived',
        name: 'New Arrived',
        items: [
            { id: '1', imageUrl: 'book1.jpg' },
            { id: '2', imageUrl: 'book2.jpg' },
            { id: '3', imageUrl: 'book3.jpg' },
            { id: '4', imageUrl: 'book4.jpg' },
            { id: '5', imageUrl: 'book5.jpg' },
            { id: '6', imageUrl: 'book6.jpg' },
            { id: '10', imageUrl: 'book1.jpg' },
            { id: '11', imageUrl: 'book2.jpg' },
            { id: '13', imageUrl: 'book3.jpg' },
            { id: '14', imageUrl: 'book4.jpg' },
            { id: '15', imageUrl: 'book5.jpg' },
            { id: '16', imageUrl: 'book6.jpg' },
        ],
    },
    {
        id: 'law',
        name: 'Law',
        items: [
            { id: '1', imageUrl: 'book1.jpg' },
            { id: '2', imageUrl: 'book2.jpg' },
            { id: '3', imageUrl: 'book3.jpg' },
            { id: '4', imageUrl: 'book4.jpg' },
            { id: '5', imageUrl: 'book5.jpg' },
            { id: '6', imageUrl: 'book6.jpg' },
            { id: '10', imageUrl: 'book1.jpg' },
            { id: '11', imageUrl: 'book2.jpg' },
            { id: '13', imageUrl: 'book3.jpg' },
            { id: '14', imageUrl: 'book4.jpg' },
            { id: '15', imageUrl: 'book5.jpg' },
            { id: '16', imageUrl: 'book6.jpg' },
        ],
    },
    {
        id: 'economic',
        name: 'Economic',
        items: [
            { id: '1', imageUrl: 'book1.jpg' },
            { id: '2', imageUrl: 'book2.jpg' },
            { id: '3', imageUrl: 'book3.jpg' },
            { id: '4', imageUrl: 'book4.jpg' },
            { id: '5', imageUrl: 'book5.jpg' },
            { id: '6', imageUrl: 'book6.jpg' },
            { id: '10', imageUrl: 'book1.jpg' },
            { id: '11', imageUrl: 'book2.jpg' },
            { id: '13', imageUrl: 'book3.jpg' },
            { id: '14', imageUrl: 'book4.jpg' },
            { id: '15', imageUrl: 'book5.jpg' },
            { id: '16', imageUrl: 'book6.jpg' },
        ],
    },
];

const MyBookCard: React.FC = () => {
    return (
        <div className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8">
            {/* <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');`}</style> */}
            <div className="relative z-10 mx-auto w-full max-w-screen-2xl p-4 sm:px-10 xl:px-20">
                {categoriesWithItems.map((category) => (
                    <div key={category.id} className="mb-8">
                        {/* Category Header */}
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                            <MyCategory category={category.name} />
                            <ViewMore />
                        </div>
                        {/* Grid for Items */}
                        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {category.items.map((item) => (
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
                ))}
            </div>
            <style>{`
                @keyframes aurora {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .animate-aurora {
                  animation: aurora 20s linear infinite;
                }
                .font-space-grotesk {
                  font-family: 'Space Grotesk', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default MyBookCard;
