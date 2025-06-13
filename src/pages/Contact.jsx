import { useState } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    
        const [buttonText, setButtonText] = useState('Send');

    
    const handleClick = () => {
        setButtonText("Sent")
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const serviceID = 'service_abe3va5';
        const templateID = 'template_075mwrv';
        const userID = '9UetkVyNo_QfunDHn';

        emailjs.send(serviceID, templateID, form, userID)
            .then(response => {
                console.log('Message successfully sent!', response.status, response.text);
                setForm({ name: '', email: '', message: '' }); // Reset form after sending
            })
            .catch(err => console.error('Failed to send message. Error: ', err));
    };
    
    
    return (
        
        
        <form className="form-container" 
        
        onSubmit={handleSubmit}>
            <div className='hard-code'>
                <h1 className='contact-head'>
                    Contact
                </h1>
                <p>
            Feel free to send a contact us anytime, We will get back to you as soon as we can!
            </p> 
            <div className='phone'>
                <h4>
                    Phone
                </h4>
                <p>
                    09166504192
                </p>
                <h4>
                    E-mail
                </h4>
                <p>
                    kenagbapuonwu@gmail.com
                </p>
            </div>

            </div>
            <div>
            <div className='soft-code'>
            <div className='contact-head'>
            
            <h1>Send a message</h1>
          </div>
            <div className="form-group">
                <label htmlFor="name" className="label">Name:</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="input" />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="label">Email:</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="input" />
            </div>

            <div className="form-group">
                <label htmlFor="message" className="label">Message:</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} className="textarea"></textarea>
            </div>

            <button type="submit" className="button" onClick={handleClick}>{buttonText}</button>
            </div>
            
            <div className='phone-contact-only'>
            <div className='phone'>
                <h3>Contact</h3>
                <h4>
                    Phone
                </h4>
                <p>
                    09166504192
                </p>
                <h4>
                    E-mail
                </h4>
                <p>
                    kenagbapuonwu@gmail.com
                </p>
            </div>
            </div>
            </div>
            
       
           
        </form>
       
    );
    
}
export default Contact;
