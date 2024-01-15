import PageHeader from '../components/UI/PageHeader';

export default function AboutPage() {
    return (
      <div className="container pt-4">
        <PageHeader text="About ME"/>
        <div className='row-lg-2 mt-5'>
          <img src="/Avatar.png" className='rounded-circle m-3' alt='avatar' />
          <p className="m-3 p-3 fs-3">
          Greetings! I'm Jimmy Zhang, 
          a passionate and dedicated Full Stack MERN Developer on a journey to turn innovative 
          ideas into powerful and user-friendly applications. 
          With a solid foundation in MongoDB, Express.js, React.js, and Node.js, 
          I bring a holistic approach to web development, ensuring seamless and efficient solutions.
          </p>
        </div>
      </div>
    );
  }
  