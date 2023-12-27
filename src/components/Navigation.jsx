import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
            Portfolio
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
            About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/resume">
            Resume
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
            Contact Me
        </Link>,
      ]}
    />
  );
}
