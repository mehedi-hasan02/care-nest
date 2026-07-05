import { getSingleService } from '@/action/server/service';
import { FaBaby, FaUserFriends, FaProcedures, FaMapMarkerAlt, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const iconMap = {
    FaBaby,
    FaUserFriends,
    FaProcedures,
};

export async function generateMetadata({ params }) {
    const { id } = await params;
    const service = await getSingleService(id);
    return {
        title: `${service?.title ?? 'Service'} — CareNest`,
        description: service?.description ?? '',
    };
}

const ServiceDetails = async ({ params }) => {
    const { id } = await params;
    const service = await getSingleService(id);

    if (!service?._id) notFound();

    const Icon = iconMap[service.icon];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero */}
            <div className="bg-base-200 py-16 px-4 md:px-10">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary transition-colors mb-8"
                    >
                        <FaArrowLeft className="w-3 h-3" />
                        Back to Home
                    </Link>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                            {Icon && <Icon className="w-10 h-10" />}
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">
                                {service.title}
                            </h1>
                            <p className="text-base-content/60 max-w-2xl leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-4xl mx-auto px-4 md:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="card bg-base-200">
                        <div className="card-body">
                            <FaCalendarAlt className="text-primary w-5 h-5 mb-1" />
                            <p className="text-xs text-base-content/50 uppercase tracking-wide">Booking</p>
                            <p className="font-semibold">Hourly or Daily</p>
                        </div>
                    </div>
                    <div className="card bg-base-200">
                        <div className="card-body">
                            <FaMapMarkerAlt className="text-primary w-5 h-5 mb-1" />
                            <p className="text-xs text-base-content/50 uppercase tracking-wide">Coverage</p>
                            <p className="font-semibold">Multiple Divisions</p>
                        </div>
                    </div>
                    <div className="card bg-base-200">
                        <div className="card-body">
                            {Icon && <Icon className="text-primary w-5 h-5 mb-1" />}
                            <p className="text-xs text-base-content/50 uppercase tracking-wide">Service Type</p>
                            <p className="font-semibold">{service.title}</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="card bg-primary text-primary-content">
                    <div className="card-body flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold mb-1">Ready to book?</h3>
                            <p className="text-primary-content/70 text-sm">
                                Select your duration and location to get started.
                            </p>
                        </div>
                        <Link
                            href={`/booking/${service._id}`}
                            className="btn bg-white text-primary hover:bg-white/90 border-none shrink-0"
                        >
                            Book This Service
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;