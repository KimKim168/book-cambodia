import React from 'react';

// The data remains a simple, flat list.
const listData = [
    {
        id: 'csharp',
        title: 'C#',
    },
    {
        id: 'javascript',
        title: 'JavaScript',
    },
    {
        id: 'python',
        title: 'Python',
    },
    {
        id: 'java',
        title: 'Java',
    },
    {
        id: 'sql',
        title: 'SQL',
    },
    {
        id: 'go',
        title: 'Go (Golang)',
    },
];

// --- List Item Component with "Pill" Styling ---
const ListItem = ({ item, active = false }) => {
    // Define base, hover, and active styles
    const baseClasses = 'flex items-center w-full gap-3 rounded-lg p-2 font-medium transition-colors duration-200';
    
    const activeClasses = 'bg-blue-200 text-black shadow-sm';
    
    const inactiveClasses = 'text-gray-600 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200';

    return (
        <li>
            <a
                href="#"
                className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
            >
                {/* You could add an icon here if you wanted */}
                {/* <span className="size-5">Icon</span> */}
                <span>{item.title}</span>
            </a>
        </li>
    );
};

// --- Main Sidebar Component ---
const MyCollectionSidebar = () => {
    return (
        <div className="hidden w-full max-w-xs rounded-lg border bg-gray-100 p-2 font-sans md:block dark:border-gray-700 dark:bg-gray-900">
            <h2 className="px-2 pt-1 pb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Our Collection
            </h2>
            <nav>
                <ul className="space-y-1">
                    {/* For demonstration, the first item is marked as active */}
                    <ListItem key={listData[0].id} item={listData[0]} active={true} />
                    
                    {/* The rest of the items are rendered normally */}
                    {listData.slice(1).map((item) => (
                        <ListItem key={item.id} item={item} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MyCollectionSidebar;