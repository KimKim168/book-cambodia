import { PhotoProvider, PhotoView } from 'react-photo-view';
import Layout from '../bookCamboLayout/layout';
import MyDownloadButton from './components/my-download-button';
import MyReadMoreButton from './components/my-read-more-button';
import MySearchDetial from './components/my-search-detail';

const relatedItems = [
    { id: '1', imageUrl: 'book1.jpg' },
    { id: '2', imageUrl: 'book2.jpg' },
    { id: '3', imageUrl: 'book3.jpg' },
    { id: '4', imageUrl: 'book4.jpg' },
    { id: '5', imageUrl: 'book5.jpg' },
    { id: '6', imageUrl: 'book6.jpg' },
    { id: '7', imageUrl: 'book1.jpg' },
    { id: '12', imageUrl: 'book2.jpg' },
    { id: '13', imageUrl: 'book3.jpg' },
    { id: '14', imageUrl: 'book4.jpg' },
    { id: '15', imageUrl: 'book5.jpg' },
    { id: '16', imageUrl: 'book6.jpg' },
];

const Detail = () => {
    return (
        <Layout>
            <MySearchDetial />
            <div className="mx-auto mt-6 max-w-screen-2xl px-4 sm:px-10 xl:px-20">
                {/* Main Section */}
                <div className="flex flex-col gap-10 md:flex-row">
                    {/* Left: Book Cover */}
                    <div className="flex flex-col">
                        <div className="mx-auto w-full max-w-sm">
                            {' '}
                            {/* Example responsive container */}
                            <PhotoProvider>
                                <PhotoView src={`/assets/demo-images/book3.jpg`} >
                                    <img
                                        src={`/assets/demo-images/book3.jpg`}
                                        className="aspect-[6/9] w-full object-cover"
                                        alt="Winning Marketing Strategies Using Generative AI book cover"
                                    />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                        {/* Book Information */}
                        <div>
                            <h3 className="my-4 text-lg font-bold text-gray-900 dark:text-white">Book Details</h3>

                            <div className="overflow-hidden border-gray-200 dark:border-gray-700">
                                <dl className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {[
                                        ['Copyright Year', '2025'],
                                        ['Pub Date', 'October 18, 2024'],
                                        ['Pages', '125'],
                                        ['ISBN', '9781637427309'],
                                        ['EISBN', '9781637427316'],
                                    ].map(([label, value], index) => (
                                        <div
                                            key={label}
                                            className={`grid grid-cols-2 gap-4 px-4 py-3 ${
                                                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/40' : 'bg-white dark:bg-gray-900'
                                            }`}
                                        >
                                            <dt className="font-medium text-gray-700 dark:text-gray-300">{label}</dt>
                                            <dd className="text-gray-600 dark:text-gray-400">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* Right: Book Details */}
                    <div className="flex-1">
                        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Winning Marketing Strategies Using Generative AI</h1>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Unlock Brilliant Strategies with AI-Enhanced Marketing
                        </h2>
                        <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                            Discover the future of marketing with our comprehensive guide that introduces the MVOSSTE framework. Augmented by
                            cutting-edge generative AI, this book offers a clear roadmap from mission to execution, empowering you to craft innovative
                            and effective marketing strategies. Perfect for marketers eager to stay ahead of the curve, our guide transforms complex
                            concepts into actionable insights for unparalleled success.
                        </p>

                        {/* Buttons */}

                        <div className="mt-6">
                            <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">ALSO AVAILABLE FROM</p>
                            <img src="/assets/demo-images/amazon.png" alt="Amazon" className="h-6" />
                        </div>

                        <div className="mt-6">
                            <p className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Share this book</p>
                            <div className="flex gap-2">
                                {/* Facebook */}
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-blue-600 transition hover:bg-blue-600 hover:text-white dark:border-gray-600 dark:hover:bg-blue-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 320 512">
                                        <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 
        52.24-50.06h40.42V6.26S293.48 0 268.18 0c-73.36 
        0-121.33 44.38-121.33 124.72v70.62H86.41V288h60.44v224h92.66V288z"
                                        />
                                    </svg>
                                </a>

                                {/* X (Twitter) */}
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-black transition hover:bg-black hover:text-white dark:border-gray-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 512 512">
                                        <path
                                            d="M389.2 48H463.7L305.6 224.2L492 464H345.8L229.8 
        315.3L98.6 464H24.1L192 275.8L14.1 48H164.5L267.5 
        181.7L389.2 48ZM364.4 421.8H405.7L150.3 90.3H106.6L364.4 
        421.8Z"
                                        />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-blue-700 transition hover:bg-blue-700 hover:text-white dark:border-gray-600 dark:hover:bg-blue-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 448 512">
                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zm-46.44-341.7c-29.5 
        0-53.4-23.9-53.4-53.4S24.34 0 53.84 0s53.4 
        23.9 53.4 53.4-23.9 53.4-53.4 53.4zM447.9 
        448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 
        0-37.8 16-44 31.4-2.3 5.4-2.9 12.9-2.9 
        20.4V448h-92.4s1.2-269.4 0-297.1h92.4v42.1c12.3-19 
        34.3-46.1 83.6-46.1 61 0 106.7 39.8 106.7 
        125.2V448z"
                                        />
                                    </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-green-600 transition hover:bg-green-600 hover:text-white dark:border-gray-600 dark:hover:bg-green-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 448 512">
                                        <path
                                            d="M380.9 97.1C339-2.9 224.6-33 135.5 
        18.1c-89.1 51.1-119.2 165.5-68.1 254.6L7.5 
        482l214.4-57.4c82.4 45.9 187.2 20.3 243.5-55.8 
        56.2-76.2 43.5-182.2-29.1-247.7zM224 
        384c-88.2 0-160-71.8-160-160s71.8-160 
        160-160 160 71.8 160 160-71.8 160-160 160zm78.3-112.6c-3.3-1.6-19.4-9.5-22.4-10.6-3-.9-5.2-1.6-7.5 
        1.6-2.3 3.3-8.6 10.6-10.5 12.9-1.9 
        2.3-3.9 2.6-7.2 1-3.3-1.6-13.9-5.1-26.5-16.2-9.8-8.7-16.4-19.4-18.3-22.7-1.9-3.3-.2-5.1 
        1.4-6.7 1.5-1.5 3.3-3.9 4.9-5.9 1.6-2 
        2.3-3.3 3.5-5.6 1.2-2.3.6-4.3-.3-5.9-.9-1.6-7.5-18.1-10.3-24.8-2.7-6.4-5.4-5.5-7.5-5.6-1.9-.1-4.3-.1-6.6-.1s-6.1.9-9.3 
        4.3c-3.3 3.3-12.8 12.5-12.8 30.5s13.1 35.4 
        14.9 37.8c1.9 2.3 25.8 39.4 62.5 55.3 8.7 3.8 
        15.5 6.1 20.8 7.8 8.7 2.7 16.6 2.3 22.8 
        1.4 7-1 19.4-7.9 22.1-15.5 2.7-7.6 2.7-14.1 
        1.9-15.5-.8-1.4-3-2.3-6.3-3.9z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <MyReadMoreButton />
                            <MyDownloadButton />
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-2xl dark:text-white">All Related Books</h2>
                    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
};

export default Detail;
