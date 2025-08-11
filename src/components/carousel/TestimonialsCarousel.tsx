// components/TestimonialsCarousel.tsx
"use client";

import Slider from "react-slick";
import Success from "../cards/success";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const testimonials = [
  {
    id: 1,
    name: "Ude Ugo",
    quote:
      "Words on Us delivered amazing designs to The Book Drive. It’s how they paid attention to every copy, detail and even our brand colours and even made it easy for me to ask in case I wanted anything changed.",
    about: "CEO",
  },
  {
    id: 2,
    name: "Shantell Charisma",
    quote:
      "Transparent and high quality! Very responsive and provided professional recommendations to improve outcome of projects!",
    about: "influencer",
  },
  {
    id: 3,
    name: "The Girl Ada",
    quote:
      "Words on Us gave me great copywriting and editing services all year round.",
    about: "social media manager",
  },
  {
    id: 4,
    name: "Angel Regis",
    quote: "Straight genius",
    about: "accountant",
  },
  {
    id: 5,
    name: "Ayo Jackson",
    quote:
      "You helped me bring my idea to life. I feel really glad to have come across your brand. I am grateful.",
    about: "engineer",
  },
  {
    id: 6,
    name: "Edima Ben-Ekpo",
    quote: "The best team I’ve ever worked with in all my years of business.",
    about: "finance advisor",
  },
  {
    id: 7,
    name: "Cameron Argon",
    quote: "Really great at understanding my concept and idea quickly.",
    about: "creative director",
  },
  {
    id: 8,
    name: "Ihie",
    quote: "I love the brisk short videos and the professional attitude.",
    about: "miller",
  },
  {
    id: 9,
    name: "Ogbah",
    quote: "I love how the team is receptive to new ideas. ",
    about: "exec",
  },
  {
    id: 10,
    name: "Chioma Faith Godsgift",
    quote: "Services at Words on Us are top-notch and detailed.",
    about: "chief",
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-16 bg-gray-50 text-center">
      <div className="flex flex-col justify-between items-center mb-8">
        <h5>Testimonials</h5>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Clients&apos; Success Stories
        </h3>
      </div>

      <Slider
        {...settings}
        className="w-full max-w-sm md:max-w-7xl mx-auto px-4"
      >
        {testimonials.map((t) => (
          <div key={t.id} className="px-2">
            <Success client={t.name} quote={t.quote} about={t.about} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsCarousel;
