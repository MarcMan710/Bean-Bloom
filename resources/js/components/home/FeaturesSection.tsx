import React from 'react';

const FeaturesSection: React.FC = () => {
    return (
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
    );
};

export default FeaturesSection; 