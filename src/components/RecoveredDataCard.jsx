

import ItemsCard from "./ItemsCard";
import RecoverCard from "./RecoverCard";


const RecoveredDataTable = ({ items }) => {
    return (
        <div className="grid w-11/12 mx-auto my-20 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
            {items.map(item =>
                <RecoverCard key={item._id} item={item}></RecoverCard>
            )}
        </div>
    );
};

export default RecoveredDataTable;
