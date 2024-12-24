// import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { AuthContext } from '@/provider/AuthProvider';
import ModalForm from '@/components/ModalForm';

const CardDetailsPage = () => {
    // const { user } = useContext(AuthContext)

    const item = useLoaderData()
    console.log(item)




    

    return (
        <div className={`min-h-screen flex items-center justify-center p-6 relative bg-cover bg-center  w-full`}
            style={{ backgroundImage: `url(${item.thumbnail})` }}>
            <div className="absolute inset-0 backdrop-blur-md backdrop-brightness-50"></div>
            <div className=" z-10 bg-transparent backdrop-blur-3xl rounded-xl max-w-7xl w-full p-8 pl-0 shadow-lg">
                <h1 className="md:text-5xl md:ml-10 ml-2 text-gray-300 text-xl font-bold">Title: {item.title}</h1>
                <div className='flex justify-around items-start flex-col-reverse '>
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-[200px] sm:h-[350px] lg:h-[550px] w-auto object-cover rounded-lg ml-2 md:ml-10"
                    />
                    <div className="p-6 w-full pr-0">
                        <p className="mb-2 text-gray-300">
                            <strong>Post Type:</strong> {item.postType}
                        </p>
                        <p className="mb-2 text-gray-300">
                            <strong>Lost/Found date: </strong>
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }).format(new Date(item.startDate))}
                        </p>
                        <div className='text-gray-300'>
                            <h2 className=' mt-4 font-semibold text-xl'> Post Owner info</h2>
                            <p className='mt-2'>Email: {item.contactEmail}</p>
                            <p className='mt-1'>Name: {item.contactName}</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <p className="text-gray-400 mb-6 md:ml-10 lg:w-8/12 mt-8">
                        <strong>Description:</strong> {item.description}
                    </p>
                    <div className='flex items-center justify-around flex-col gap-6'>
                        {item.postType === "Lost" 
                        ?
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl">
                            Found This!
                        </button>
                        :
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl">
                            This is Mine!
                        </button>
                     }
                    </div>
                </div>
            </div>
            <ModalForm item={item}></ModalForm>
        </div>
    );
};

export default CardDetailsPage;