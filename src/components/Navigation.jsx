import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <Navbar
      links={[
        <Link 
        key={1} 
        className={currentPage === '/' ? 'nav-link active text-light' : 'nav-link'} 
        to="/"
        >
            Portfolio
        </Link>,
        <Link 
        key={2} 
        className={currentPage === '/about' ? 'nav-link active text-light' : 'nav-link'} 
        to="/about"
        >
            About Me
        </Link>,
        <Link 
        key={3} 
        className={currentPage === '/resume' ? 'nav-link active text-light' : 'nav-link'} 
        to="/resume"
        >
            Resume
        </Link>,
        <Link 
        key={4} 
        className={currentPage === '/contact' ? 'nav-link active text-light' : 'nav-link'} 
        to="/contact"
        >
            Contact Me
        </Link>,
      ]}
    />
  );
}
