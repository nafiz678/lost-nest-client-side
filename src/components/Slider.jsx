import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Slider = () => {
    const swiperRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: "https://www.austintexas.gov/sites/default/files/images/Airport/Header_Photos/h_lost_and_found.jpg",
            title: "Lost Backpack Found!",
            subtitle: "A black backpack with school supplies was found near Central Park. Could it be yours? Claim it now!"
        },
        {
            id: 2,
            image: "https://nypost.com/wp-content/uploads/sites/2/2018/11/subway-cell-phones.jpg",
            title: "Phone Found on Subway",
            subtitle: "An iPhone was found on the subway last evening. If it's yours, provide details to claim it."
        },
        {
            id: 3,
            image: "https://people.com/thmb/qMwNbZ2E4P5OyKY8Y8dzNPDHFxU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/lost-ring-3-b86e0d7a29fa4e70ab2a56d979f24eab.jpg",
            title: "Lost Ring Found",
            subtitle: "A silver ring was discovered at a local park. Describe it to verify ownership and reclaim it!"
        },
        {
            id: 4,
            image: "https://awl.org.au/resources/hero/_824x463_crop_center-center_100_line/AWL-Website-Content-page-Ive-lost-my-dog.jpg",
            title: "Lost Dog Needs Help",
            subtitle: "A husky was seen wandering around River Park. Let's bring it back home."
        },
        {
            id: 5,
            image: "https://static.toiimg.com/thumb/msid-108885389,width-1280,height-720,imgsize-56822,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            title: "Camera Left at Museum",
            subtitle: "A DSLR camera was found in the museum lobby. Verify the details to retrieve it."
        }
    ];

    const handleChange = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <div className="relative w-full my-10">
            {/* Main Slider */}
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                className="rounded-lg overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <motion.div
                            className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-center p-6 text-center text-white">
                                <motion.h2
                                    className="text-3xl md:text-5xl font-extrabold drop-shadow-lg"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {slide.title}
                                </motion.h2>
                                <motion.p
                                    className="text-lg md:text-xl mt-2"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {slide.subtitle}
                                </motion.p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Navigation */}
            <div className="mt-6 flex justify-center space-x-4">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 }
                    }}
                    loop={true}
                    className="w-full max-w-4xl"
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={slide.id} className="cursor-pointer">
                            <motion.img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-24 md:h-28 object-cover rounded-lg border border-gray-200"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                onClick={() => handleChange(idx)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
