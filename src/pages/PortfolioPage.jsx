
import ProjectCard from '../components/UI/Project';

// replace by data
const projects = [
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

export default function PortfolioPage() {
  return (
    <div className='aos-init aos-animate'>
      <h1 className='m-5 p-2'>Projects and Demo</h1>
      <div className="row row-cols-1 row-cols-sm-2 justify-content-center mx-auto" data-aos="fade-up" data-aos-delay="200">
          {projects.map((p) => <ProjectCard props={p} key={p.id} />)}
      </div>
    </div>
  );
}