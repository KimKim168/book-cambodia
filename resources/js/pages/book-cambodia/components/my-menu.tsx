'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { AlignLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

const MyMenu = () => {
    const { t } = useTranslation();
    const [activePath, setActivePath] = useState('/');
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-koulen-regular' : '';
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActivePath(window.location.pathname);
        }
    }, []);

    const menuItems = [
        { id: 1, name: t('Home'), link: '/' },
        { id: 2, name: t('Books Collection'), link: '/books_collection' },
        { id: 3, name: t('Book By Category'), link: '/book_by_categories' },
        { id: 4, name: t('Support'), link: '/supports' },
    ];

    const getLinkClass = (linkPath: string) =>
        linkPath === activePath
            ? 'text-[#104674] font-semibold underline underline-offset-4'
            : 'text-black hover:text-[#104674] hover:underline hover:underline-offset-4 transition';

    return (
        <>
            {/* Desktop Menu */}
            <nav className="hidden py-3 xl:block">
                <ul className="flex items-center justify-center space-x-4 text-base text-black">
                    {menuItems.map((item, index) => (
                        <li key={item.id} className={`${fontClass} ${index !== menuItems.length - 1 ? 'border-r border-black pr-4' : ''}`}>
                            <Link href={item.link} className={getLinkClass(item.link)} aria-current={item.link === activePath ? 'page' : undefined}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="p-0">
                            <AlignLeft className="text-primary-two" width={35} height={35} aria-label="Toggle menu" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-background/20 backdrop-blur-xl">
                        <SheetHeader className="text-start">
                            <SheetTitle className="text-center text-white">Menu</SheetTitle>
                            <ul className="mt-4 flex flex-col justify-center space-y-4">
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className={getLinkClass(item.link)}
                                            aria-current={item.link === activePath ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default MyMenu;
