import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        <li className="list-group-item">
            <Link to="/portfolio/1">Portfolio 1</Link>
        </li>
      </ul>
    </div>
  );
}