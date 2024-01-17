import { useState } from "react";
import Button from "../components/UI/Button";
import { Input } from "../components/UI/Input";
import {nameFormat, emailFormat, subjectFormat, msgFormat} from './FormFormatData';
import sendMail from "../utils/email";
import { FormProvider, useForm } from "react-hook-form";

export default function Form() {

    const methods = useForm({mode: 'onBlur'}); // set validation triger mode onBlur
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit(async (data) => {
        // send the information by email, currently only console.log
        await sendMail(data);
        methods.reset({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        setSuccess(true);
    });


    return (
        <FormProvider {...methods}>
        <form 
            className="form m-5" 
            onSubmit={e => e.preventDefault()}
            noValidate
        >
            <div className="row g-3 mb-3">
                <div className="col">
                    <Input {...nameFormat} />
                </div>
                <div className="col">
                    <Input {...emailFormat} />
                </div>
            </div>
            <div className="mb-3">
                <Input {...subjectFormat} />
            </div>
            <div className="mb-3">
                <Input {...msgFormat} />
            </div>
            {success && (
                <p className="text-success fs-6 fw-light">
                    Form has been submitted successfully
                </p>
            )}
            <Button
            onSubmit={onSubmit}
            text="Submit"
            />
        </form>
        </FormProvider>
    );
}