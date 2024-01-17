// Button UI for all the green Button
import './Button.css'
export default function Button({text, onSubmit}) {
	return (
		<button 
		type="submit" 
		onClick={onSubmit}
		className="btn-contact"
		>
		{text}
		</button>
		);
	
}