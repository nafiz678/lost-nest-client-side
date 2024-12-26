/* eslint-disable react/prop-types */


const RecoveredDataTable = ({ items }) => {

    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="dark:text-gray-100">
                        <th></th>
                        <th>Title</th>
                        <th>Recovered Location & Date</th>
                        <th>Post owner</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr
                            key={item._id}
                        >
                            <th></th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.thumbnail}
                                                alt="Avatar"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" uppercase">{item.title}</div>
                                        <div className="text-sm opacity-50 capitalize">{item.status}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.recoverLocation}
                                <br />
                                {item.recoverDate && 
                                <span className="badge whitespace-nowrap badge-ghost badge-sm">
                                    Date: {new Date(item.recoverDate).toLocaleDateString()}
                                </span>}
                            </td>
                            <td>
                            
                            {item?.contactName}
                                <br />
                                <span> {item?.contactEmail} </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecoveredDataTable;