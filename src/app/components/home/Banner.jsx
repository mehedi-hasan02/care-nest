import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/assets/old-care.jpg",
    title: "Providing Compassionate Elder Care",
    description:
      "Dedicated caregivers offering personalized support and comfort for seniors.",
  },
  {
    id: 2,
    image: "/assets/child-care.jpg",
    title: "Trusted Child Care Services",
    description:
      "Creating a safe, nurturing, and joyful environment for every child.",
  },
  {
    id: 3,
    image: "/assets/nursing.jpeg",
    title: "Professional Nursing Support",
    description:
      "Experienced healthcare professionals committed to your family's well-being.",
  },
  {
    id: 4,
    image: "/assets/home-care.jpeg",
    title: "Quality Home Care",
    description:
      "Reliable in-home care services tailored to your loved one's needs.",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            width={1600}
            height={700}
            className="h-150 w-full object-cover"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-8 md:px-20 text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                {slide.title}
              </h1>

              <p className="text-lg text-gray-200">
                {slide.description}
              </p>

              <div className="space-x-4">
                <button className="btn btn-primary">
                  Learn More
                </button>

                <button className="btn btn-outline btn-secondary text-white border-white hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>

            <a
              href={`#slide${
                index === slides.length - 1 ? 1 : index + 2
              }`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;