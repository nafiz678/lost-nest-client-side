
import { Link } from "react-router-dom";

const ItemsCard = ({ item }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-teal-400 via-cyan-500 to-emerald-600 text-white transform transition-transform duration-300 hover:scale-105 flex flex-col xl:flex-row items-center xl:items-start justify-center md:justify-start py-4 dark:bg-gray-800">
            <img
                src={item.thumbnail}
                className="h-52 w-52 object-cover md:rounded-tr-lg md:rounded-br-lg rounded-lg"
                alt=""
            />
            <div className="pl-4 pr-3 flex flex-col justify-between lg:items-end">
                <div>
                    <div className="overflow-y-auto h-8">
                        <h2 className="text-lg text-start font-semibold">{item.title}</h2>
                    </div>
                    <p className="text-white text-opacity-90 leading-relaxed">
                        <strong>Post Type:</strong> {item.postType}
                    </p>
                    <div className="overflow-y-auto h-8 xl:h-auto">
                        <p className="text-white text-opacity-90 leading-relaxed">
                            <strong>Location:</strong> {item.location}
                        </p>
                    </div>
                </div>
                <div>
                    <button className="bg-white mt-4 text-teal-600 font-semibold py-2  rounded shadow hover:shadow-lg hover:bg-teal-50 transition-all duration-300">
                        <Link className="py-2 px-5" to={`/item/${item._id}`}>
                            View details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;
