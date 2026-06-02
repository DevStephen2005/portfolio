import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

function Contact() {
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

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>devstephen15@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p>github.com/DevStephen2005</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p>linkedin.com/in/stephen2005 </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91  8610395502</p>
              </div>
            </div>

          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            />

            <button
              className="
                bg-blue-600
                text-white
                px-6
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