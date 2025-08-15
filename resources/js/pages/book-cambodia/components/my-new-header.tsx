import { usePage } from '@inertiajs/react';
import MyMenu from './my-menu';

const MyNewHeader = () => {
    const  application_info = 'BookCamboLogo.png';
    return (
        <div>
            {/* nav and slide */}
            <div className="mt-1 ">
                <div className="mx-auto flex max-w-screen-2xl gap-2 items-center px-3 py-5 sm:px-10 xl:px-20">
                    <a href="/" className="flex flex-1 items-center gap-2 text-center text-base md:text-xl lg:text-xl">
                        <img
                            src={`/assets/demo-images/${application_info}`}
                            alt="logo"
                            className="w-26 md:w-30 object-cover"
                        />
                    </a>
                    <MyMenu />
                </div>
            </div>
        </div>
    );
};

export default MyNewHeader;
