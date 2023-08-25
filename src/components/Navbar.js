import Image from 'next/image';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-800 via-white-700 to-purple-900 text-white">
            <div className="flex items-center">
                <div className="mr-5">
                    <Image src="/ahead-logo.svg" alt="Ahead Logo" width={100} height={40} />
                </div>
            </div>
            
            <div className="flex space-x-4">
                <a href="#emotions" className="mr-4 font-semibold">Emotions</a>
                <a href="#manifesto" className="mr-4 font-semibold">Manifesto</a>
                <a href="#self-awareness" className="mr-4 font-semibold">Self-awareness test</a>
                <a href="#work-with-us" className="mr-4 font-semibold">Work With Us</a>
            </div>
            
            <button className="bg-white text-purple-800 px-4 py-2 rounded font-semibold">Download app</button>
        </nav>
    );
}
export default Navbar;
