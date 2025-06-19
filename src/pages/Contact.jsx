import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState("Send");

    const handleClick = () => {
        setButtonText("Sent ✅");
        setForm({ name: "", email: "", message: "" });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-head">Contact</h1>
                <p className="contact-description">
                    Feel free to reach out. I’ll get back to you as soon as
                    possible!
                </p>

                <div className="contact-info">
                    <h4>Phone</h4>
                    <p>09166504192</p>
                    <h4>Email</h4>
                    <p>kenagbapuonwu@gmail.com</p>
                </div>
            </div>

            <form className="contact-right" onSubmit={handleSubmit}>
                <h2 className="contact-subhead">Send a Message</h2>

                <div className="form-group">
                    <label htmlFor="name" className="label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="label">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="textarea"
                        placeholder="Write your message"
                    />
                </div>

                <button type="submit" className="button" onClick={handleClick}>
                    {buttonText}
                </button>
            </form>
        </div>
    );
}

export default Contact;
