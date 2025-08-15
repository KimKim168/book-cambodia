import Layout from '../bookCamboLayout/layout';
import MyCollectionSidebar from './components/my-collection-sidebar';
import MySearchCollection from './components/my-search-collection';

interface CategoryItem {
    id: string;
    imageUrl: string;
}

interface CategoryProps {
    id: string;
    name: string;
    items: CategoryItem[];
}
const Index = () => {
    const categoriesWithItems: CategoryProps[] = [
        {
            id: 'newArrived',
            name: 'New Arrived',
            items: [
                { id: '1', imageUrl: 'book1.jpg' },
                { id: '2', imageUrl: 'book2.jpg' },
                { id: '3', imageUrl: 'book3.jpg' },
            ],
        },
        {
            id: 'law',
            name: 'Law',
            items: [
                { id: '4', imageUrl: 'book4.jpg' },
                { id: '5', imageUrl: 'book5.jpg' },
                { id: '1', imageUrl: 'book1.jpg' },
                { id: '2', imageUrl: 'book2.jpg' },
                { id: '3', imageUrl: 'book3.jpg' },
            ],
        },
    ];
    return (
        <Layout>
          <MySearchCollection/>
            <div className="mx-auto mt-6 flex max-w-screen-2xl px-4 sm:px-10 md:gap-8 xl:px-20">
                <div className="md:w-64">
                    <MyCollectionSidebar />
                </div>
                <div className="w-full md:flex-1">
                    <div className="mb-4 border-b-4 border-[#104674] pb-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-2xl">All books</div>
                    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {categoriesWithItems.map((category) =>
                            category.items.map((book) => (
                                <a
                                    key={book.id}
                                    href={`/detail/${book.id}`}
                                    className="group relative w-full overflow-hidden shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-300/50 dark:bg-black dark:shadow-black/20 dark:hover:border-gray-700 dark:hover:shadow-black/40"
                                >
                                    <img src={`/assets/demo-images/${book.imageUrl}`} className="aspect-[6/9] h-auto w-full object-cover" alt="" />
                                </a>
                            )),
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
