import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="fixed z-10 flex justify-end w-full text-white p-8 sm:px-24">
            <ul className="flex space-x-4">
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="https://github.com"><FaGithub /></a></li>
                <li><a href="https://linkedin.com"><FaLinkedin /></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
