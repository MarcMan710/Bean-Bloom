import React from 'react';

const HoursSection: React.FC = () => {
    return (
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
    );
};

export default HoursSection; 