import PageHeader from '../components/UI/PageHeader';
 import Button from '../components/UI/Button';
import './resume.css';
import Resume from '../components/Resume';
import {ResumeData} from './ResumeData';

export default function ResumePage() {
    return (
    <>
      <div className='m-5'>
        <PageHeader text={"Resume"} />
        <form method="get" action="resume.txt">
          <Button text="Download" />
        </form>
      </div>
      <Resume props={ResumeData} />
    </>
    );
  }
  