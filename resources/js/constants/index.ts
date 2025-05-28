import { MenuCategory, Event, TeamMember, Testimonial } from '../types';

export const BUSINESS_INFO = {
    name: 'Bean & Bloom',
    address: '123 Coffee Street',
    city: 'City, State 12345',
    phone: '(555) 123-4567',
    email: 'hello@beanandbloom.com',
    hours: {
        weekdays: '7:00 AM - 8:00 PM',
        weekends: '8:00 AM - 6:00 PM'
    }
};

export const MENU_CATEGORIES: MenuCategory[] = [
    {
        title: 'Coffee',
        items: [
            {
                name: 'Espresso',
                description: 'Rich and bold single shot',
                price: '$3.50',
                dietary: ['vegan']
            },
            {
                name: 'Cappuccino',
                description: 'Espresso with steamed milk and foam',
                price: '$4.50',
                dietary: ['vegetarian']
            },
            {
                name: 'Pour Over',
                description: 'Single origin coffee, hand-poured',
                price: '$5.00',
                dietary: ['vegan']
            }
        ]
    },
    {
        title: 'Tea',
        items: [
            {
                name: 'Earl Grey',
                description: 'Classic black tea with bergamot',
                price: '$3.50',
                dietary: ['vegan', 'gluten-free']
            },
            {
                name: 'Chai Latte',
                description: 'Spiced tea with steamed milk',
                price: '$4.50',
                dietary: ['vegetarian']
            }
        ]
    },
    {
        title: 'Pastries',
        items: [
            {
                name: 'Croissant',
                description: 'Buttery, flaky pastry',
                price: '$3.75',
                dietary: ['vegetarian']
            },
            {
                name: 'Vegan Muffin',
                description: 'Daily selection of vegan muffins',
                price: '$4.00',
                dietary: ['vegan']
            }
        ]
    },
    {
        title: 'Seasonal Specials',
        items: [
            {
                name: 'Pumpkin Spice Latte',
                description: 'Espresso with pumpkin spice and steamed milk',
                price: '$5.50',
                dietary: ['vegetarian']
            },
            {
                name: 'Maple Pecan Scone',
                description: 'House-made scone with maple glaze',
                price: '$4.25',
                dietary: ['vegetarian']
            }
        ]
    }
];

export const EVENTS: Event[] = [
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

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Sarah Johnson',
        role: 'Owner & Head Barista',
        image: '/images/team/sarah.jpg',
        bio: 'With over 10 years of experience in specialty coffee, Sarah brings her passion for perfect brews to every cup.'
    },
    {
        name: 'Michael Chen',
        role: 'Coffee Roaster',
        image: '/images/team/michael.jpg',
        bio: 'Michael sources and roasts our beans, ensuring each batch meets our high standards for quality and flavor.'
    },
    {
        name: 'Emma Rodriguez',
        role: 'Pastry Chef',
        image: '/images/team/emma.jpg',
        bio: 'Emma creates our daily selection of fresh pastries, combining traditional recipes with innovative flavors.'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'The best coffee shop in town! The atmosphere is cozy, and the staff is incredibly friendly.',
        author: 'David Thompson',
        role: 'Regular Customer'
    },
    {
        quote: 'I love their commitment to sustainability and local sourcing. Plus, the coffee is amazing!',
        author: 'Lisa Chen',
        role: 'Coffee Enthusiast'
    },
    {
        quote: 'Bean & Bloom has become my second office. The perfect place to work and enjoy great coffee.',
        author: 'James Wilson',
        role: 'Remote Worker'
    }
]; 