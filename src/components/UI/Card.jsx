import { Link } from 'react-router-dom';

// for portfolio card, accept portfolio data as props
export default function PortfolioCard({ p }) {
    return (
        <Link to={`/portfolios/${p.id}`}>
            <div className="card text-bg-dark" style={{width: '18rem'}}>
                <img src={p.img} alt={p.title} className="card-img" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{p.title} {p.createdAt}</h5>
                    <p className="card-text">{p.description}</p>
                </div>
            </div>
        </Link>
        )
    }