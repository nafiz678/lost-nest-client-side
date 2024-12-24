import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            story:
                "I lost my wallet at a concert, and thanks to WhereIsIt, I was able to get it back! The process was so simple, and the finder contacted me within 24 hours. Thank you so much!",
            location: "New York, NY",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            id: 2,
            name: "Michael Smith",
            story:
                "I found a set of keys at the park and posted it on the site. Within a few hours, the owner reached out, and we reunited them with no hassle. It's an amazing platform!",
            location: "Chicago, IL",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            id: 3,
            name: "Emma Brown",
            story:
                "My dog ran off during a walk, and I reported it on the site. Within a day, someone found my dog and got in touch with me. I can't believe how easy and effective this site is!",
            location: "Los Angeles, CA",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
            id: 4,
            name: "John Doe",
            story:
                "I lost my passport while traveling abroad, and WhereIsIt helped me get it back! The whole process was easy to follow, and the person who found it was incredibly kind. Highly recommend this platform!",
            location: "San Francisco, CA",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
            id: 5,
            name: "Sophia Lee",
            story:
                "I found a pair of sunglasses on the beach, posted them on WhereIsIt, and within a few hours, the owner got in touch. The platform made it so easy to reunite the item with its rightful owner!",
            location: "Miami, FL",
            image: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
            id: 6,
            name: "David Harris",
            story:
                "My lost camera was returned to me within a day of posting it on WhereIsIt! It was such a simple and hassle-free process. I'm so grateful for this platform, and I recommend it to anyone who’s lost something valuable.",
            location: "Austin, TX",
            image: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        {
            id: 7,
            name: "Olivia Clark",
            story:
                "I lost my wallet in a busy mall, and the person who found it contacted me through WhereIsIt. It was returned to me with everything inside. I couldn’t believe how easy it was!",
            location: "Chicago, IL",
            image: "https://randomuser.me/api/portraits/women/7.jpg",
        },
        {
            id: 8,
            name: "James Taylor",
            story:
                "I found a lost phone at a café and posted it on WhereIsIt. Within hours, I was able to connect with the owner. This site makes returning lost items so straightforward!",
            location: "Dallas, TX",
            image: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        {
            id: 9,
            name: "Mia Gonzalez",
            story:
                "WhereIsIt helped me get my lost keys back after I accidentally left them at a coffee shop. The process was fast, and I was able to get in touch with the finder easily. This service is a lifesaver!",
            location: "Los Angeles, CA",
            image: "https://randomuser.me/api/portraits/women/9.jpg",
        },
        {
            id: 10,
            name: "Liam Robinson",
            story:
                "I lost my car keys while running errands, and within a few hours of posting it on WhereIsIt, the finder contacted me. This website really works, and it saved me so much stress!",
            location: "Houston, TX",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        {
            id: 11,
            name: "Isabella Martinez",
            story:
                "I accidentally left my book bag at a restaurant, and after posting it on WhereIsIt, the person who found it got in touch with me within a day. It was an incredibly smooth experience.",
            location: "San Diego, CA",
            image: "https://randomuser.me/api/portraits/women/11.jpg",
        },
        {
            id: 12,
            name: "Ethan White",
            story:
                "I found a lost wallet at a concert and used WhereIsIt to help return it. It’s an amazing platform that made the whole process so easy for both me and the owner. I’m definitely going to keep using it!",
            location: "Seattle, WA",
            image: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        {
            id: 13,
            name: "Charlotte King",
            story:
                "My lost ring was found by a kind stranger who posted it on WhereIsIt, and within a few hours, I was reunited with my precious item. What an incredible service!",
            location: "Boston, MA",
            image: "https://randomuser.me/api/portraits/women/13.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-teal-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Success Stories from Our Users
                </motion.h2>
                <div className="mt-8 max-w-2xl mx-auto">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        key={testimonials[currentIndex].id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-xl">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {testimonials[currentIndex].location}
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-800 italic">
                            &quot;{testimonials[currentIndex].story}&quot;
                        </p>
                    </motion.div>

                    {/* Navigation buttons */}
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-400 transition duration-300"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-400 transition duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
