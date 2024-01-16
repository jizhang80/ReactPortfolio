import PageHeader from '../components/UI/PageHeader';
import './resume.css';
import Resume from '../components/Resume';
import {ResumeData} from './ResumeData';

export default function ResumePage() {
    return (
      <>
      <div className='m-5'>
        <PageHeader text={"Resume"} />
      </div>
      <Resume props={ResumeData} />
    </>
    );
  }
  