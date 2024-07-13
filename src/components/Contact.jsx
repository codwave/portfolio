import React from 'react'
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import Button from './Button';




const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1381335d-e884-4f46-92e1-cf403e026abb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='flex gap-5 items-center justify-center  max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 '>
            <form className='flex items-center justify-center flex-col space-y-6' onSubmit={onSubmit}>
                <div className='space-y-2'>
                    <Input color='white' name='name' type='text' label='username' className='text-white' />
                </div>
                <div className='space-y-2'>
                    <Input color='white' type='Email' name='email' label='Email' required className='text-white border border-n-6' />
                </div>
                <div className='space-y-2'>
                    <Textarea name='message' label='Message' />
                </div>
                <button type='submit'>
                    <Button className="hidden lg:flex" href="#login">
                        Submit
                    </Button>
                </button>

            </form>
            <span>{result}</span>

        </div>
    );
}

export default Contact