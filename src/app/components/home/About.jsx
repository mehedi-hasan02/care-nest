import React from 'react';
import { FaShieldAlt, FaHeart, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    const highlights = [
        {
            icon: <FaShieldAlt className="w-6 h-6" />,
            title: 'Trusted & Verified',
            description: 'Every caretaker is verified to ensure reliable and trusted care for your loved ones.',
        },
        {
            icon: <FaHeart className="w-6 h-6" />,
            title: 'Compassionate Care',
            description: 'From babysitting to elderly and sick person care, our services are built around genuine care.',
        },
        {
            icon: <FaClock className="w-6 h-6" />,
            title: 'Flexible Booking',
            description: 'Book services based on your required duration — hourly or daily — whenever you need them.',
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: 'Location-Based Service',
            description: 'Find caretakers near you by simply selecting your Division, District, City, and Area.',
        },
    ];

    return (
        <section className="py-16 px-4 md:px-10 bg-base-200">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-primary">Care Nest</span>
                    </h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto leading-relaxed">
                        Care.xyz is a web platform that helps you find and hire reliable,
                        trusted caretakers for children, the elderly, and family members who
                        need special care at home. Our mission is to make caregiving easy,
                        safe, and accessible for everyone.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="card-body items-center text-center">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                                    {item.icon}
                                </div>
                                <h3 className="card-title text-base">{item.title}</h3>
                                <p className="text-sm text-base-content/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;