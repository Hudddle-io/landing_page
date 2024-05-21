import logo from '../assets/huddle-logo.svg';

function Navbar(){
    return(
        <nav className='flex justify-evenly px-2 py-4 items-center border-b-2 border-gray-200'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='hidden lg:flex'>
            <ul className='flex justify-evenly gap-12'>
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/about">What drives us</a>
                </li>
                <li>
                    <a href="/services">Hudddle Features</a>
                </li>
                <li>
                    <a href="/contact">Product Roadmap</a>
                </li>
            </ul>
            </div>
            <div className='hidden lg:flex'>
                <button className='bg-[#5C5CE9] text-white h-[52px] w-[177px] p-[8px] rounded-md'>
                    Join the Waitlist
                </button>
            </div>
        </nav>
    )
}

export default Navbar;