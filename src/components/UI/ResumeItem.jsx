function Description({description}) {
	if (Array.isArray(description)) {
		return(
			<ul>
				{description.map((item, index) => (
					<li key={index}>{item}</li>
					))}
			</ul>
			);
	} else {
		return(<p>{description}</p>);
	}
}

export default function ResumeItem({key, props}) {
	return (
		<div key={key} className="resume-item">
            <h4>{props.title}</h4>
            <h5>{props.startTime} - {props.endTime}</h5>
            <p><em>{props.institution}</em></p>
            <div className="my-2">
            	<Description description={props.description} />
            </div>
        </div>
	);
}