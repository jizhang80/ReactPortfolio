
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
  }

]

export default function HomePage() {
  return (
    <div className='aos-init aos-animate'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
          {portfolios.map((p) => <PortfolioCard props={p} key={p.id} />)}
      </div>
    </div>
  );
}