import React from 'react';
import { Link } from '@inertiajs/react';

const HeroSection: React.FC = () => {
    return (
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
    );
};

export default HeroSection; 