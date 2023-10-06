import localFont from "next/font/local";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsFillSendFill } from 'react-icons/bs'
import { Button } from "../Button";

const tektur = localFont({ src: '../../../public/fonts/Tektur-VariableFont_wdth,wght.ttf' })

export type Inputs = {
    name: string,
    email: string,
    message: string,
};

export default function ContactForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmitContactForm: SubmitHandler<Inputs> = data => {
        console.log(data)
    }


    return (
        <div className="flex flex-col w-full items-center justify-center px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto">

            <h3 className={`font-semibold text-3xl ${tektur.className}`}>Send me a message!</h3>
            <p className=" text-gray-400 text-lg mt-4">Feel free to give me a touch, I'm here for you.</p>

            <form className="flex flex-col gap-10 mt-14 w-full mx-auto" onSubmit={handleSubmit(onSubmitContactForm)}>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="inputContainer inputContainerFirstRow">
                        <label className="labelInput" htmlFor="">Your name</label>
                        <input className="contactInput" {...register('name', { required: true })} placeholder="Enter your name" type="text"
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === 'required' && <p role="alert" className=" text-red-500 mt-2">Name is required</p>}

                    </div>
                    <div className="inputContainer inputContainerFirstRow">
                        <label className="labelInput" htmlFor="">Your email</label>
                        <input className="contactInput" {...register('email', { required: true })} placeholder="Enter your email" type="email"
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === 'required' && <p role="alert" className=" text-red-500 mt-2">Email is required</p>}

                    </div>
                </div>
                <div className="inputContainer">
                    <label className="labelInput" htmlFor="">Your message</label>

                    <textarea className="contactInput" {...register('message')} placeholder="I'd like to talk about . . ." name="" id="" cols={30} rows={1}></textarea>
                </div>

                <Button.Secondary
                    value="Send"
                    type={'submit'}
                    className="w-auto mx-auto"
                    icon={BsFillSendFill}
                />
            </form>


        </div>
    )
}