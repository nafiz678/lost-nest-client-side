/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ItemsCard from "./ItemsCard";


const RecoveredDataTable = ({ items }) => {
    const [newItems, setNewItems] = useState([])

    useEffect(() => {
        const newRecoveredItems = items.filter(item => item.status === "Recovered")
        setNewItems(newRecoveredItems)
    }, [items])
    return (
        <div className="grid max-w-7xl mx-auto my-20 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
            {newItems.map(item =>
                <ItemsCard key={item._id} item={item}></ItemsCard>
            )}
        </div>
    );
};

export default RecoveredDataTable;
