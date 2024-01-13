import { Link } from 'react-router-dom';

// for portfolio card, accept portfolio data as props
export default function ProjectCard({props}) {
    const {id, title, img, description, createdAt, link} = props;
    return (
        <Link to={`link`}>
            <div className="card my-3" style={{width: '30rem'}} >
                <img src={img} alt={title} className="card-img" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{title}</h5>
                    <p> Created At {createdAt}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </Link>
        )
    }