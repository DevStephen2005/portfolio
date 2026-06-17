import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0sorik5",
        "template_4ux3cch",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "DaeMvJsD2xgeRmj68"
      )
      .then(() => {
        alert("Message Sent Successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Have a project or opportunity?
          Let's connect.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <a
                  href="mailto:devstephen15@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  devstephen15@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-600 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  GitHub
                </h3>

                <a
                  href="https://github.com/DevStephen2005"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  github.com/DevStephen2005
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-600 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://linkedin.com/in/stephen2005"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  linkedin.com/in/stephen2005
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <a
                  href="tel:+918610395502"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +91 8610395502
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={sendEmail}
            className="space-y-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-lg
                hover:bg-blue-700
                transition
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;