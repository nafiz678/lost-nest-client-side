/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ItemsCard = ({ item }) => {


    return (
        <div className="rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-teal-400 via-cyan-500 to-emerald-600 text-white transform transition-transform duration-300 hover:scale-105 flex items-start justify-start md:h-60 py-4">
            <img src={item.thumbnail} className="h-52 w-52 object-cover rounded-tr-lg rounded-br-lg" alt="" />
            <div className="pl-4 pr-3">
                <div>
                    <div className="overflow-y-auto h-8">
                        <h2 className="text-lg text-start font-semibold">{item.title}</h2>
                    </div>
                    <p className="text-white text-opacity-90 leading-relaxed">
                        <strong>Post Type:</strong> {item.postType}
                    </p>
                    <p className="text-white h-20 text-opacity-90 leading-relaxed">
                        <strong>Location:</strong> {item.location}
                    </p>
                </div>
                <button className="bg-white mt-4 text-teal-600 font-semibold py-2 px-4 rounded shadow hover:shadow-lg hover:bg-teal-50 transition-all duration-300">
                <Link to={`/item/${item._id}`}>
                    Explore More
                </Link>
                </button>
            </div>
        </div>
    );
};

export default ItemsCard;