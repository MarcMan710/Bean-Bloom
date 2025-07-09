import React from 'react';

const LocationSection: React.FC = () => {
    return (
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
    );
};

export default LocationSection; 