import ProjectCard from '../components/UI/Project';
import PageHeader from '../components/UI/PageHeader';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { projectsData } from './ProjectsData';

export default function PortfolioPage() {
  return (
    <div className='aos-init aos-animate'>
      <div className="m-5 p-2">
        <PageHeader text={"Projects and Demo"} />
      </div>
      <div className="m-5" data-aos="fade-up" data-aos-delay="200">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1200: 3}}>
          <Masonry>
            {projectsData.map((p) => <ProjectCard props={p} key={p.id} />)}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}