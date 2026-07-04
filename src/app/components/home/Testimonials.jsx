import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Rahman",
      role: "Parent, Dhaka",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 5,
      feedback:
        "Care.xyz made finding a trustworthy babysitter so easy. The booking process was smooth and my daughter loves her caretaker!",
    },
    {
      id: 2,
      name: "Kamal Hossain",
      role: "Son of Elderly Client",
      image: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      feedback:
        "Finding reliable care for my father was always stressful until I found this platform. The caretakers are genuinely compassionate.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Family Member",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 4,
      feedback:
        "The location-based booking and transparent cost calculation gave me full confidence before booking a caretaker for my sick mother.",
    },
  ];

  const successMetrics = [
    { id: 1, label: "Happy Families", value: "1,200+" },
    { id: 2, label: "Verified Caretakers", value: "350+" },
    { id: 3, label: "Bookings Completed", value: "5,000+" },
    { id: 4, label: "Cities Covered", value: "20+" },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-base-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Families Say</span>
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Real experiences from families who trust Care.xyz for their loved
            ones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="card-body">
                <FaQuoteLeft className="text-primary/30 w-8 h-8 mb-2" />
                <p className="text-sm text-base-content/70 leading-relaxed mb-4">
                  {testimonial.feedback}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-base-content/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-warning w-4 h-4"
                          : "text-base-300 w-4 h-4"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {successMetrics.map((metric) => (
            <div key={metric.id} className="stat">
              <div className="stat-value text-primary">{metric.value}</div>
              <div className="stat-desc text-base-content/60">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
