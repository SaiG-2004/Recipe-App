import React from 'react';

const testimonials = [
  {
    quote: "The best restaurant",
    text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    image: "profile1.png"
  },
  {
    quote: "Simply delicious",
    text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared freshly and beautifully presented.",
    name: "Matt Cannon",
    location: "San Diego, CA",
    image: "profile2.png"
  },
  {
    quote: "One of a kind restaurant",
    text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: "profile3.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-40 mt-5">
        <h2 className="text-5xl text-center mb-12 font-[Poppins]">What Our Customers Say</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#f9f9f7] p-6 rounded-lg shadow-lg flex flex-col items-start text-start">
              <blockquote className="text-xl font-semibold mb-4 text-red-600">“{testimonial.quote}”</blockquote>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <hr className="w-full mb-4 mt-2" />
              <div className="flex items-center mt-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
