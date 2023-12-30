import { useState } from "react";
import sendMail from "../../utils/email";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'subject':
                setSubject(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                return;
        }

        return;
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
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <form className="form m-5" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" value={subject} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" name="message" value={message} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}