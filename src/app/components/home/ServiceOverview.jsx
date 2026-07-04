import React from "react";
import Link from "next/link";
import { FaBaby, FaUserFriends, FaProcedures } from "react-icons/fa";

const ServiceOverview = () => {
  const services = [
    {
      id: "baby-care",
      title: "Baby Care",
      icon: <FaBaby className="w-10 h-10" />,
      description:
        "Reliable and caring babysitters to look after your children with love, safety, and attention.",
    },
    {
      id: "elderly-service",
      title: "Elderly Service",
      icon: <FaUserFriends className="w-10 h-10" />,
      description:
        "Compassionate caretakers to support your elderly family members with daily needs and companionship.",
    },
    {
      id: "sick-people-service",
      title: "Sick People Service",
      icon: <FaProcedures className="w-10 h-10" />,
      description:
        "Trained caregivers to provide dedicated support and care for sick or recovering family members at home.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-base-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Choose from our range of trusted caregiving services, designed to
            support your family whenever and wherever you need it.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-base-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="card-body items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="card-actions">
                  <Link
                    href={`/service/${service.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
