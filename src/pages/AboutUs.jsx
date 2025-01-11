import { AuthContext } from "@/provider/AuthProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CommunityStories from "@/components/ComminityStories";

const AboutUs = () => {
  const { user } = useContext(AuthContext);

  // Framer Motion animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-10 px-6 sm:px-12 md:px-20 lg:px-32 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-teal-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Welcome to <span className="font-semibold">My Lost Nest</span>, your trusted platform for reuniting people with their
            lost belongings.
          </motion.p>
        </header>

        {/* Our Mission */}
        <motion.section
          className="mb-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">My Lost Nest</span>, our mission is to create a reliable and user-friendly platform
            where individuals can report lost items, find missing belongings, and help others by listing found items. We believe
            every item has a story, and our goal is to reconnect people with their cherished possessions.
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-4 text-lg ">
            <li>
              <span className="font-semibold text-teal-600">Comprehensive Listings:</span> Easily browse and post lost or found
              items in your area.
            </li>
            <li>
              <span className="font-semibold text-teal-600">User-Friendly Interface:</span> Navigate our platform with ease on any
              device.
            </li>
            <li>
              <span className="font-semibold text-teal-600">Community-Driven:</span> Our platform thrives on the support and
              honesty of our users.
            </li>
          </ul>
        </motion.section>

        {/* Safety and Security */}
        <motion.section
          className="mb-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">Safety and Security</h2>
          <p className="text-lg leading-relaxed">
            Your safety is our priority. We implement robust measures to ensure all interactions and listings are verified and
            secure. Our dedicated support team works tirelessly to maintain a trustworthy environment.
          </p>
        </motion.section>

        {/* Community Stories */}
        <motion.section
          className="mb-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">Community Stories</h2>
          <p className="text-lg leading-relaxed">
            Over the years, <span className="font-semibold">My Lost Nest</span> has helped countless people reconnect with their
            belongings. From reuniting a lost pet with its owner to finding sentimental keepsakes, each story inspires us to
            improve and grow our platform.
          </p>
          <CommunityStories></CommunityStories>
        </motion.section>

        {/* Partnership Opportunities */}
        <motion.section
          className="mb-12"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-4">Partnership Opportunities</h2>
          <p className="text-lg leading-relaxed">
            We believe in the power of collaboration. If you're an organization, business, or community group interested in
            partnering with us to expand our reach and impact, we'd love to hear from you. Together, we can create a more
            connected world.
          </p>
        </motion.section>

        {/* Footer */}
        <footer className="text-center mt-10">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-teal-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let’s Get Started!
          </motion.h3>
          <p className="text-lg ">
            Whether you’ve lost something valuable or found an item, <span className="font-semibold">My Lost Nest</span> is here to
            help. Sign up now and start your journey!
          </p>
          <div className="mt-6">
            <Link to={`${user ? "/add-lost-found" : "/login"}`}>
              <motion.button
                className="bg-teal-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-teal-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Us
              </motion.button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
