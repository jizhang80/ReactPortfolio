// for portfolio card, accept portfolio data as props
export default function PortfolioCard({ portfolio }) {
    return (
        <div className="card">
        <div className="card-image">
        <figure className="image is-4by3">
        <img src={portfolio.coverImage} alt={portfolio.title} />
        </figure>
        </div>
        <div className="card-content">
        <div className="media">
        <div className="media-content">
        <p className="title is-4">{portfolio.title}</p>
        <p className="subtitle is-6">{portfolio.createdAt}</p>
        </div>
        </div>
        <div className="content">
        {portfolio.description}
        <br />
        <Link to={`/portfolios/${portfolio._id}`} className="button is-link">
        View
        </Link>
        </div>
        </div>
        </div>
        )
    }