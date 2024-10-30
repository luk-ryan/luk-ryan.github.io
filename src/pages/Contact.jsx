import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const emailAddress = "ryankdluk@gmail.com";

    // Handle copying email to clipboard
    const copyToClipboard = () => {
      navigator.clipboard.writeText(emailAddress).then(() => {
        setCopyMessage("Email copied to clipboard!");
        setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
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
      console.log("Form submitted successfully:", formData);
      // Clear form (optional)
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="introduction">
        <h1>Contact Me</h1>
        <p>
          Click to copy my email:{" "}
          <span
            onClick={copyToClipboard}
            style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          >
            {emailAddress}
          </span>
        </p>
        {copyMessage && <p style={{ color: "green" }}>{copyMessage}</p>}
        <p>
          Or get in touch with me through{" "}
          <a
            href="https://linkedin.com/in/ryan-k-luk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <div className="contact">
        {isSubmitted && <p>Thank you for your message!</p>}
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
