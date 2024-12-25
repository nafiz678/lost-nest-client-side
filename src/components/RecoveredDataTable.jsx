/* eslint-disable react/prop-types */


const RecoveredDataTable = ({ newItems }) => {

    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="dark:text-gray-100">
                        <th></th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {newItems.map((item) => (
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
                                        <div className="text-sm opacity-50 capitalize">{item.category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.location}
                                <br />
                                <span className="badge whitespace-nowrap badge-ghost badge-sm">
                                    Post Type: {item.postType}
                                </span>
                            </td>
                            <td>{item.description.slice(0,60)}...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecoveredDataTable;