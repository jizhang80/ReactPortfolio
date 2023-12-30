
import PortfolioCard from '../components/UI/Card';

// replace by data
const portfolios = [
  {
    id: 1,
    title: 'Portfolio 1',
    img: "/portfolio/p1.png",
    description: "this is portfolio 1",
    createdAt: "2022-01-01",
  },
  {
    id: 2,
    title: 'Portfolio 2',
    img: "/portfolio/p1.png",
    description: "this is portfolio 1",
    createdAt: "2022-01-01",
  },
  {
    id: 3,
    title: 'Portfolio 3',
    img: "/portfolio/p1.png",
    description: "this is portfolio 1",
    createdAt: "2022-01-01",
  },
  {
    id: 4,
    title: 'Portfolio 4',
    img: "/portfolio/p1.png",
    description: "this is portfolio 1",
    createdAt: "2022-01-01",
  },
]

export default function HomePage() {
  return (
    <div className="container d-flex flex-wrap m-2 gap-2 align-item-center justify-content-center">
        {portfolios.map((p) => <PortfolioCard p={p} key={p.id} />)}
    </div>
  );
}