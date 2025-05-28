export interface MenuItem {
    name: string;
    description: string;
    price: string;
    dietary: string[];
}

export interface MenuCategory {
    title: string;
    items: MenuItem[];
}

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    rsvpLink: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
} 