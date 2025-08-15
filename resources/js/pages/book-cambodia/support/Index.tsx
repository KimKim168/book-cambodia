import { Mail, MapPin, Phone } from 'lucide-react';
import Layout from '../bookCamboLayout/layout';

const Index = () => {
    return (
        <Layout>
            <div className="mx-auto flex flex-col items-center px-4 mt-10">
                <h2 className={`text-[#134571] mb-2 text-center text-base font-bold`}>Contact Us</h2>
                <p className={`mb-5 max-w-3xl text-center text-lg font-bold text-gray-700 sm:text-xl xl:mb-10 dark:text-gray-200`}>
                    Let’s connect and explore how we can help achieve your business goals.
                </p>
            </div>
            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:px-20">
                {/* Email */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-[#134571] p-4 text-white">
                        <Mail className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Our Email</h4>
                        <p className="text-gray-600">
                            {/* {application_info?.email} */}
                            info@Example.org
                        </p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-[#134571] p-4 text-white">
                        <Phone className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">
                            {/* {application_info?.phone} */}
                            010*******
                        </p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-[#134571] p-4 text-white">
                        <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">
                            {/* {application_info?.address} */}
                            123 Main St, Phnom Penh, Cambodia
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
