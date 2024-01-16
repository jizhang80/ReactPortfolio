import './Resume.css'
import ResumeItem from './UI/ResumeItem'

export default function Resume({props}) {
	return (
	<section id="resume" className="resume">
		<div className="container" data-aos="fade-up">
			<div className="row">
				<div className="col-lg-6">
					<h3 className="resume-title">Sumary</h3>
					<div className="resume-item pb-0">
						<h4>{props.name}</h4>
						<p><em>{props.sumary}</em></p>
						<div className="my-2">
							<ul>
								<li>{props.contactAddress}</li>
								<li>{props.contactPhone}</li>
								<li>{props.contactEmail}</li>
							</ul>
						</div>
					</div>

					<h3 className="resume-title">Education</h3>
						{props.educations.map((item, index) => (
							<ResumeItem key={index} props={item} />
						))}
				</div>

				<div className="col-lg-6">
					<h3 className="resume-title">Professional Experience</h3>
						{props.jobs.map((item, index) => (
							<ResumeItem props={item} key={index}/>
					))}
				</div>
			</div>
		</div>
	</section>
		);
}