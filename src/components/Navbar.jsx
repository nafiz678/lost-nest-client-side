import { ModeToggle } from './Toggle';

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between '>
                <h2>Home</h2>
                <ModeToggle></ModeToggle>
            </nav>
        </div>
    );
};

export default Navbar;