import HowItWorks from "@/components/HowItWorks";
import NewlyAddedPost from "@/components/NewlyAddedPost";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import useDocumentTitle from "@/components/Title";


const Home = () => {
    useDocumentTitle("Home || Lost Nest");
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className="">
                <NewlyAddedPost></NewlyAddedPost>
            </div>
            <div className="">
                <HowItWorks></HowItWorks>
            </div>
            <div className="">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;