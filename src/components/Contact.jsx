// import React from 'react';
// import { Input } from "@material-tailwind/react";
// import { Textarea } from "@material-tailwind/react";
// import Button from './Button';

// const Contact = () => {
//     const [result, setResult] = React.useState("");

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);

//         formData.append("access_key", "1381335d-e884-4f46-92e1-cf403e026abb");

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//             setResult("Form Submitted Successfully");
//             event.target.reset();
//         } else {
//             console.log("Error", data);
//             setResult(data.message);
//         }
//     };

//     return (
//         <div className='flex p-10 pt-12 items-center justify-center w-full h-full bg-n-8 border border-n-6 rounded-[2rem]'>
//             <form className='flex items-center justify-center flex-col gap-5 w-full' onSubmit={onSubmit}>
//                 <div className='space-y-2 w-full'>
//                     <Input color='white' name='name' type='text' label='Your Name' className='text-white h-12' />
//                 </div>
//                 <div className='space-y-2 w-full'>
//                     <Input  color='white' type='email' name='email' label='Email' required className='text-white border border-n-6 h-12' />
//                 </div>
//                 <div className='space-y-2 w-full'>
//                     <Textarea  name='message' label='Message' className=' text-white h-12' />
//                 </div>
//                 <button type='submit'>
//                     <Button type='submit' className="lg:flex" href="#login">
//                         Submit
//                     </Button>
//                 </button>
//             </form>
//             <span>{result}</span>
//         </div>
//     );
// }

// export default Contact;

import React from 'react';
import Button from './Button';


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact-container flex flex-col justify-center items-center bg-n-8 border border-n-6 rounded-[2rem]'>

            <form className='contact-form' onSubmit={onSubmit}>
                <div className='input-group'>
                    <label htmlFor='name'>Your Name</label>
                    <input name='name' type='text' id='name' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type='email' id='email' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message' required />
                </div>
                <div className='flex lg:flex-row xl:flex-row  flex-col gap-4 mt-4 mb-9'>
                    <Button className='w-2/5 lg:w-1/5 xl:w-1/5' type="submit">Submit</Button>
                    {/* <Button className='w-2/5 lg:w-1/5 xl:w-1/5' href={number} white>
                        Quick Call
                    </Button> */}
                </div>

                <div className='flex justify-end'>

                </div>

            </form>
            <div className='flex justify-center items-center mt-5  mb-5 p-5 h-10 font-bold text-green-300  '>
                {result}
            </div>

        </div>
    );
}

export default Contact;
