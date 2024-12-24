/* eslint-disable react/prop-types */

import ItemsCard from "./ItemsCard";


const RecoveredDataTable = ({ newItems }) => {
    return (
        <div className="grid w-11/12 mx-auto my-20 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
            {newItems.map(item =>
                <ItemsCard key={item._id} item={item}></ItemsCard>
            )}
        </div>
    );
};

export default RecoveredDataTable;
