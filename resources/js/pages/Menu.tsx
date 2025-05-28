import React from 'react';
import Layout from '@/components/Layout';

interface MenuItem {
    name: string;
    description: string;
    price: string;
    dietary: string[];
}

interface MenuCategory {
    title: string;
    items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
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

const Menu: React.FC = () => {
    const getDietaryIcon = (dietary: string) => {
        switch (dietary) {
            case 'vegan':
                return '🌱';
            case 'vegetarian':
                return '🥬';
            case 'gluten-free':
                return '🌾';
            default:
                return '';
        }
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-handwriting text-center mb-12">Our Menu</h1>

                {/* Dietary Legend */}
                <div className="bg-white rounded-lg p-4 mb-8 shadow-md">
                    <h2 className="text-xl font-handwriting mb-4">Dietary Information</h2>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <span>🌱</span>
                            <span>Vegan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🥬</span>
                            <span>Vegetarian</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌾</span>
                            <span>Gluten-Free</span>
                        </div>
                    </div>
                </div>

                {/* Menu Categories */}
                {menuCategories.map((category) => (
                    <div key={category.title} className="mb-12">
                        <h2 className="text-3xl font-handwriting mb-6">{category.title}</h2>
                        <div className="bg-white rounded-lg shadow-md divide-y">
                            {category.items.map((item) => (
                                <div key={item.name} className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                                            <p className="text-gray-600 mb-2">{item.description}</p>
                                            <div className="flex gap-2">
                                                {item.dietary.map((diet) => (
                                                    <span
                                                        key={diet}
                                                        className="text-sm"
                                                        title={diet}
                                                    >
                                                        {getDietaryIcon(diet)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-lg font-medium">{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Note */}
                <div className="bg-[#4A3C31] text-white rounded-lg p-6 mt-8">
                    <p className="text-center">
                        All our coffee is locally roasted and ethically sourced.
                        <br />
                        Menu items and prices may vary by location.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Menu; 