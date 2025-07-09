import React from 'react';
import Layout from '@/components/Layout';

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    rsvpLink: string;
}

const events: Event[] = [
    {
        id: 1,
        title: 'Open Mic Night',
        date: 'Every Friday',
        time: '7:00 PM - 9:00 PM',
        description: 'Join us for an evening of local talent! Musicians, poets, and comedians welcome.',
        rsvpLink: 'https://forms.google.com/open-mic'
    },
    {
        id: 2,
        title: 'Latte Art Workshop',
        date: 'March 15, 2024',
        time: '2:00 PM - 4:00 PM',
        description: 'Learn the art of creating beautiful designs in your coffee. All skill levels welcome!',
        rsvpLink: 'https://forms.google.com/latte-art'
    },
    {
        id: 3,
        title: 'Coffee Tasting',
        date: 'March 20, 2024',
        time: '6:00 PM - 8:00 PM',
        description: 'Explore different coffee origins and brewing methods with our expert baristas.',
        rsvpLink: 'https://forms.google.com/coffee-tasting'
    },
    {
        id: 4,
        title: 'Book Club',
        date: 'Last Sunday of Every Month',
        time: '3:00 PM - 5:00 PM',
        description: 'Join our monthly book discussion. This month: "The Coffee Trader" by David Liss.',
        rsvpLink: 'https://forms.google.com/book-club'
    }
];

const Events: React.FC = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-handwriting text-center mb-12 text-gray-800">Upcoming Events</h1>

                {/* Events List */}
                <div className="space-y-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h2 className="text-2xl font-handwriting text-gray-800">{event.title}</h2>
                                    <div className="mt-2 md:mt-0 text-[#4A3C31]">
                                        <p className="font-medium">{event.date}</p>
                                        <p>{event.time}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">{event.description}</p>
                                <a
                                    href={event.rsvpLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#4A3C31] hover:bg-[#3A2C21] text-white px-6 py-2 rounded-full transition-colors"
                                >
                                    RSVP Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calendar Section */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-handwriting mb-6 text-gray-800">Event Calendar</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=beanandbloom%40gmail.com&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
                            style={{ border: 0 }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>

                {/* Host Your Event */}
                <div className="mt-12 bg-white rounded-lg p-8">
                    <h2 className="text-2xl font-handwriting mb-4 text-gray-800">Host Your Event</h2>
                    <p className="mb-6 text-gray-800">
                        Want to host your own event at Bean & Bloom? We offer a cozy space for:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-800">
                        <li>Book clubs and reading groups</li>
                        <li>Art workshops and exhibitions</li>
                        <li>Small business meetings</li>
                        <li>Birthday celebrations</li>
                    </ul>
                    <a
                        href="mailto:events@beanandbloom.com"
                        className="inline-block bg-[#4A3C31] hover:bg-[#3A2C21] text-white px-6 py-2 rounded-full transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Events; 