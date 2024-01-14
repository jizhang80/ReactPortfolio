import { Link } from 'react-router-dom';
import './Project.css';

// for portfolio card, accept portfolio data as props
export default function ProjectCard({props}) {
    const {id, title, img, description, createdAt, repo, stack} = props;
    return (
        <Link to={repo}>
            <div className="card m-3 grid-item box-shadow">
                <img src={img} alt={title} className="card-img" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{title}</h5>
                    <p> Created At {createdAt}</p>
                    <p> Tech stack: {stack}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </Link>
        )
    }