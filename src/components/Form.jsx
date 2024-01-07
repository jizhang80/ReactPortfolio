import { useState } from "react";
import sendMail from "../utils/email";
import { useForm } from "react-hook-form"

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

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

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

        // send the information by email, currently only console.log
        await sendMail(state);

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
        <form className="form m-5" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="row g-3 mb-3">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name" 
                        aria-label="name" 
                        name="name" 
                        value={state.name} 
                        onChange={handleInputChange} 
                        {...register("name", {
                            required: true
                        })} 
                    />
                </div>
                <div className="col">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your Email" 
                        aria-label="email" 
                        name="email" 
                        value={state.email} 
                        onChange={handleInputChange} 
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })} 
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="errorMsg">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="errorMsg">Email is not valid.</p>
                    )}
                </div>
            </div>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    value={state.subject} 
                    onChange={handleInputChange} 
                    {...register("subject")} 
                />
            </div>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="message" 
                    rows="3" 
                    name="message" 
                    placeholder="Message" 
                    value={state.message} 
                    onChange={handleInputChange} 
                    {...register("message")} 
                ></textarea>
            </div>
            <button type="submit" className="btn-contact">Submit</button>
        </form>
    );
}