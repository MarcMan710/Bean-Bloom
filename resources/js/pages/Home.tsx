import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/components/Layout';

const Home: React.FC = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative h-[600px] rounded-lg overflow-hidden mb-12">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="/images/coffee-shop-hero.jpg"
                    alt="Bean & Bloom Coffee Shop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
                    <div className="max-w-3xl px-4">
                        <h1 className="text-5xl md:text-6xl font-handwriting mb-6">
                            Welcome to Bean & Bloom
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Where every cup tells a story
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/menu"
                                className="bg-[#4A3C31] hover:bg-[#3A2C21] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
                            >
                                View Menu
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white hover:bg-gray-100 text-[#4A3C31] px-8 py-3 rounded-full text-lg font-medium transition-colors"
                            >
                                Visit Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-handwriting mb-4">Fresh Coffee</h3>
                    <p className="text-gray-600">
                        Locally roasted beans, brewed to perfection every time.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-handwriting mb-4">Cozy Atmosphere</h3>
                    <p className="text-gray-600">
                        A warm, inviting space to work, meet, or simply relax.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-handwriting mb-4">Community Events</h3>
                    <p className="text-gray-600">
                        Join us for open mic nights, art classes, and more.
                    </p>
                </div>
            </div>

            {/* Hours Section */}
            <div className="bg-[#4A3C31] text-white rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-handwriting mb-6 text-center">Opening Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <div>
                        <h3 className="text-xl mb-4">Weekdays</h3>
                        <p className="text-[#D4B996]">Monday - Friday</p>
                        <p>7:00 AM - 8:00 PM</p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-4">Weekends</h3>
                        <p className="text-[#D4B996]">Saturday - Sunday</p>
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Location Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-handwriting mb-6 text-center">Find Us</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.71277937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564759146!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p className="text-center text-gray-600">
                    123 Coffee Street, City, State 12345
                </p>
            </div>
        </Layout>
    );
};

export default Home; 