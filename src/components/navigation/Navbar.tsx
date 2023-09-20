import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="fixed z-10 flex justify-end w-full text-white p-8 sm:px-24">
            <ul className="flex space-x-4">
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/portsz"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/joao-pedro-portes-301364184/"><FaLinkedin /></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
