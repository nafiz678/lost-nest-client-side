import NewlyAddedPost from "@/components/NewlyAddedPost";
import Slider from "@/components/Slider";


const Home = () => {
    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className="">
                <NewlyAddedPost></NewlyAddedPost>
            </div>
        </div>
    );
};

export default Home;