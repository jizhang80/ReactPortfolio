// Button UI for all the green Button
import './Button.css'
export default function Button({text}) {
	return (
		<button 
		type="submit" 
		className="btn-contact"
		>
		{text}
		</button>
		);
	
}