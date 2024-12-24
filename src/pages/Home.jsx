import NewlyAddedPost from "@/components/NewlyAddedPost";
import Slider from "@/components/Slider";
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
        </div>
    );
};

export default Home;