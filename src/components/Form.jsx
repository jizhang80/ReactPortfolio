import { useState } from "react";
import sendMail from "../../utils/email";

export default function Form() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [subject, setSubject] = useState("");
    // const [message, setMessage] = useState("");
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));

        // switch(name) {
        //     case 'name':
        //         setName(value);
        //         break;
        //     case 'email':
        //         setEmail(value);
        //         break;
        //     case 'subject':
        //         setSubject(value);
        //         break;
        //     case 'message':
        //         setMessage(value);
        //         break;
        //     default:
        //         return;
        // }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // send the information by email
        await sendMail({
            name,
            email,
            subject,
            message,
        });

        //reset all the input field
        setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        // setName("");
        // setEmail("");
        // setSubject("");
        // setMessage("");
    };

    return (
        <form className="form m-5" onSubmit={handleFormSubmit}>
            <div className="row g-3 mb-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Your Name" aria-label="name" name="name" value={state.name} onChange={handleInputChange} />
                </div>
                <div className="col">
                    <input type="email" className="form-control" placeholder="Your Email" aria-label="email" name="email" value={state.email} onChange={handleInputChange} />
                </div>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" value={state.subject} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="message" rows="3" name="message" placeholder="Message" value={state.message} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit" className="btn-contact">Submit</button>
        </form>
    );
}