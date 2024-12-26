import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RecoverCard = ({ item }) => {
    // const { thumbnail, description, title, imageUrl, link } = item
    return (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
                src={item.thumbnail}
                className="w-full h-40 object-cover"
            />
            <div className="flex items-center justify-between mt-4 gap-3 px-4 py-4 mb-4">
                <div>
                    <h2 className="text-xl mb-3">Posted Owner</h2>
                    <div className="capitalize"><strong>Name:</strong> {item?.contactName}</div>
                    <div className="capitalize mb-3"><strong>Email:</strong> {item?.contactEmail}</div>
                    {item.recoverDate &&
                        <span className="">
                            <strong>Recovered date:</strong> {new Date(item.recoverDate).toLocaleDateString()}
                        </span>}
                    <br />
                    <span><strong>Recovered location:</strong> {item.recoverLocation}</span>
                </div>
            </div>
        </div>
    );
};

export default RecoverCard;
