import React, { useState } from "react";
import Styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is Required ";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 7-15 digits";
    }
    if (!formData.program) newErrors.program = "Please select a program";
    if (!formData.message.trim()) newErrors.message = "Message is required ";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        fetch("https://hook.eu2.make.com/wkumtxn3oh6ka9li3oekqxpaxk74436l", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            program: formData.program,
            message: formData.message,
          }),
        }).catch((err) => console.error("Webhook error:", err));
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          program: "",
          message: "",
        });
      } else {
        alert("Error:" + data.message);
      }
    } catch (error) {
      console.error("Error Submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "700px", margin: "auto" }}>
      <h2 className={Styles.title}>Send us a Message</h2>
      <p className={Styles.contact}>
        Fill out the form below and we'll get back to you within 24 hours.
      </p>
      {/* Full Name and Email */}
      <div className={Styles.infoContainer}>
        <div className={Styles.formGroup}>
          <label>
            {" "}
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`${Styles.input} ${
              errors.fullName ? Styles.errorInput : ""
            }`}
          />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>
        <div className={Styles.formGroup}>
          <label>
            {" "}
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${Styles.input} ${
              errors.email ? Styles.errorInput : ""
            }`}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
      </div>
      {/* Phone and Program */}

      <div className={Styles.infoContainer}>
        <div className={Styles.formGroup}>
          <label>
            {" "}
            Phone Number <span>*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${Styles.input} ${
              errors.phone ? Styles.errorInput : ""
            }`}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>
        <div className={Styles.formGroup}>
          <label>
            {" "}
            Program of Interest <span>*</span>
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={`${Styles.input} ${
              errors.program ? Styles.errorInput : ""
            }`}
          >
            <option value="">Select a Program</option>
            <option value="Handwriting">Handwriting Improvement</option>
            <option value="Public Speaking">Public Speaking</option>
            <option value="Creative Writing">Creative Writing</option>
            <option value="EduVake">EduVake</option>
          </select>
          {errors.program && <p style={{ color: "red" }}>{errors.program}</p>}
        </div>
      </div>

      {/* Message */}
      <div className={Styles.message}>
        <label>
          {" "}
          Message <span>*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${Styles.input} ${
            errors.message ? Styles.errorInput : ""
          }`}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </div>
      {/* Submit Button */}
      <button type="submit" className={Styles.SubmitBtn}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
