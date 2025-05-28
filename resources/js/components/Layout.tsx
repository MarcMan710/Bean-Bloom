import React from 'react';
import { Link } from '@inertiajs/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Navigation */}
            <nav className="bg-[#4A3C31] text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-handwriting">
                                Bean & Bloom
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="hover:text-[#D4B996] px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/menu" className="hover:text-[#D4B996] px-3 py-2 rounded-md text-sm font-medium">
                                    Menu
                                </Link>
                                <Link href="/events" className="hover:text-[#D4B996] px-3 py-2 rounded-md text-sm font-medium">
                                    Events
                                </Link>
                                <Link href="/about" className="hover:text-[#D4B996] px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </Link>
                                <Link href="/contact" className="hover:text-[#D4B996] px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#4A3C31] text-white mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-handwriting mb-4">Bean & Bloom</h3>
                            <p className="text-sm">Your cozy corner for coffee and community.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-handwriting mb-4">Hours</h3>
                            <p className="text-sm">Monday - Friday: 7am - 8pm</p>
                            <p className="text-sm">Saturday - Sunday: 8am - 6pm</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-handwriting mb-4">Contact</h3>
                            <p className="text-sm">123 Coffee Street</p>
                            <p className="text-sm">City, State 12345</p>
                            <p className="text-sm">(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-[#D4B996] text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} Bean & Bloom. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout; 