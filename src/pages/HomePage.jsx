// Jimmy Zhang
// I'm a professional Fullstack MERN developer from Ottawa, CA
// Image
// About Me Button Link
import Button from "../components/UI/Button"
import TypedTxt from '../components/UI/TypedTxt'
import {typedData} from "../components/UI/typedjsData";

export default function HomePage() {
  return (
  <section className="d-flex flex-column align-items-center h-100 bg-local-home">
    <div className="container d-flex flex-column align-items-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
      <div className="my-5 w-50 local-text-editor">
        <div className="local-title-bar"> -- bash -- 80x10 </div>
          <TypedTxt
  		      stringsArray={typedData}
  		      textSize="fs-1"
  		     />
	   </div>
     <div className="mt-5 pt-5 d-flex flex-column text-light align-items-center">
      <h3>Jimmy Zhang</h3>
      <h6>I'm a professional Fullstack MERN developer</h6>
      <form action="/about">
        <Button
              text="About Me"
        />
      </form>
      </div>
    </div>
  </section>
  	);
}