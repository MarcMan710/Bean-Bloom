import React from 'react';
import Layout from '@/components/Layout';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

const teamMembers: TeamMember[] = [
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

const testimonials: Testimonial[] = [
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

const About: React.FC = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                {/* Our Story Section */}
                <div className="mb-16">
                    <h1 className="text-4xl font-handwriting text-center mb-8">Our Story</h1>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="prose max-w-none">
                            <p className="text-lg mb-6">
                                Bean & Bloom began as a dream to create a community space where people could gather,
                                connect, and enjoy exceptional coffee. Founded in 2020, our coffee shop has grown
                                from a small local spot to a beloved neighborhood destination.
                            </p>
                            <p className="text-lg mb-6">
                                We believe in more than just serving great coffee. Our commitment to sustainability,
                                ethical sourcing, and community engagement sets us apart. Every cup we serve
                                represents our dedication to quality and our passion for creating meaningful
                                connections.
                            </p>
                            <p className="text-lg">
                                From our carefully selected beans to our house-made pastries, every detail is
                                crafted with care and attention. We're proud to be part of this community and
                                look forward to serving you for years to come.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-handwriting text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-handwriting mb-2">{member.name}</h3>
                                    <p className="text-[#4A3C31] font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-handwriting text-center mb-8">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author} className="bg-white rounded-lg shadow-md p-6">
                                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-[#4A3C31] text-white rounded-lg p-8">
                    <h2 className="text-3xl font-handwriting text-center mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-handwriting mb-4">Quality</h3>
                            <p>We source the finest beans and ingredients to ensure every cup is perfect.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-handwriting mb-4">Sustainability</h3>
                            <p>We're committed to eco-friendly practices and ethical sourcing.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-handwriting mb-4">Community</h3>
                            <p>We create a welcoming space where everyone feels at home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About; 