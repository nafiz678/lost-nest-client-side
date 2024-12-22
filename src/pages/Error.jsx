import { Link } from 'react-router-dom'; 

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
            <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-lg text-center text-white">
                <h1 className="text-9xl font-bold">404</h1>
                <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
                <p className="mt-2">It seems the page you are looking for does&apos;nt exist.</p>
                <Link to="/" className="mt-6 inline-block bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default Error;