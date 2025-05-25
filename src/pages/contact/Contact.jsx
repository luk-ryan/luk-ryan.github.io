import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false); // Track success message visibility

  const emailAddress = "ryankdluk@gmail.com";

  // Handle copying email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopyMessage("Email copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Basic validation
  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);

      // Configure EmailJS
      emailjs
        .send(
          "service_7k2qffn", // replace with your EmailJS Service ID
          "template_hit0x5f", // replace with your EmailJS Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "IpKvgAkjOAMK9QToj" // replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("Email successfully sent:", response);
            setSuccessMessage(true);
            setTimeout(() => setSuccessMessage(false), 3000); // Hide after 3 seconds
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.error("Failed to send email:", error);
            setErrors({
              email: "Failed to send email. Please try again later.",
            });
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Header title="Contact Me">
        <p>
          Click to copy my email:{" "}
          <span className="text-link" onClick={copyToClipboard}>
            {emailAddress}
          </span>
        </p>
        {copyMessage && <p style={{ color: "green" }}>{copyMessage}</p>}
        <p>
          Or get in touch with me through{" "}
          <a
            className="text-link"
            href="https://linkedin.com/in/ryan-k-luk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </a>
          .
        </p>
      </Header>

      <div className="wrapper contact-form">
        {successMessage && (
          <p>Thank you for your message, I will get back to you soon!</p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>

          <button className="button-link" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
