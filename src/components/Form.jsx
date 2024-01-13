import Button from "../components/UI/Button"
import sendMail from "../utils/email";
import { useForm } from "react-hook-form";

export default function Form() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const handleFormSubmit = async (data) => {
        // send the information by email, currently only console.log
        await sendMail(data);
        reset({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
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
                        required
                        {...register("name")} 
                    />
                </div>
                <div className="col">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your Email" 
                        aria-label="email" 
                        name="email" 
                        required
                        {...register("email")} 
                    />
                </div>
            </div>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    required
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
                    required
                    {...register("message")} 
                >
                </textarea>
            </div>
            <Button
            text="Submit"
            />
        </form>
    );
}