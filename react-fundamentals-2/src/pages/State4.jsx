import { useState } from "react";

function State4() {

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    // function handleNameInputChange(e){
    //     setContactForm({
    //         ...contactForm,
    //         name: e.target.value
    //     })
    //     console.log(contactForm);
    // }

    // function handleEmailInputChange(e){
    //     setContactForm({
    //         ...contactForm,
    //         email: e.target.value
    //     })
    //     console.log(contactForm);
    // }

    // function handlePhoneInputChange(e){
    //     setContactForm({
    //         ...contactForm,
    //         phone: e.target.value
    //     })
    //     console.log(contactForm);
    // }

    function handleInputChange(e){
        let {name, value} = e.target;

        // console.log(name);
        // console.log(value);

        setContactForm({
            ...contactForm,
            [name]: value
        })
        console.log(contactForm);
    }
    
    // console.log("Rendering");
    
    


    return (
        <>
            <h3>Contact Details</h3>

            <input type="text" name="name" value={contactForm.name} onChange={handleInputChange} placeholder="Enter Full name" /> <br />
            <input type="email" name="email" value={contactForm.email} onChange={handleInputChange} placeholder="Enter Email" /> <br />
            <input type="text" name="phone" value={contactForm.phone} onChange={handleInputChange}  placeholder="Enter Phone" /> <br />

        </>
    );
}

export default State4;