import { Link } from 'react-router-dom';

// for portfolio card, accept portfolio data as props
export default function PortfolioCard({ props }) {
    return (
        <Link to={`/portfolios/${props.id}`}>
            <div className="card text-bg-dark" style={{width: '18rem'}}>
                <img src={props.img} alt={props.title} className="card-img" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{props.title} {props.createdAt}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </Link>
        )
    }