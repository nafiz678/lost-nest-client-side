import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import NewlyAddedPost from "@/components/NewlyAddedPost";
import Slider from "@/components/Slider";
import Statistics from "@/components/Statistics";
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
                <Statistics></Statistics>
            </div>
            <div className="">
                <Testimonials></Testimonials>
            </div>
            <div className="bg-[#111827]">
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;