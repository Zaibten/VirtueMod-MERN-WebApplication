import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg(""); // clear errors on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://virtuemodserver.vercel.app/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMsg(data.error || "Failed to send email.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (

    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900" id="contact">
      <div className="flex max-w-7xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 gap-12 flex-col md:flex-row">
        {/* Map Section */}
        <div className="w-full md:w-2/5 rounded-lg overflow-hidden shadow-lg min-h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.641551590523!2d67.18319842414286!3d24.91020554326757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339d70e09465f%3A0xe1fd5857b124ab80!2sKazimabad%20Malir%20Cantonment%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1747562547424!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-3/5">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide text-center md:text-left drop-shadow-lg animate-fadeInDown">
            Contact Virtua Mod
          </h1>
          <p className="text-center md:text-left text-indigo-200 mb-12 max-w-xl leading-relaxed font-medium animate-fadeInDown delay-150">
            Got questions or ideas? Share your vision with us and let's create stunning AI-generated model images together.
          </p>

          {submitted ? (
            <div className="bg-green-600/30 border border-green-400 text-green-100 px-6 py-4 rounded-lg text-center font-semibold text-lg animate-fadeInShadow shadow-lg">
              Thank you for reaching out! We’ll get back to you shortly.
            </div>
          ) : (
            <>
              {errorMsg && (
                <div className="bg-red-600/30 border border-red-400 text-red-100 px-6 py-4 rounded-lg text-center font-semibold mb-6">
                  {errorMsg}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-10">
                {["name", "email"].map((field) => (
                  <div key={field} className="relative group">
                    <input
                      required
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      id={field}
                      placeholder=" "
                      value={formData[field]}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b-2 border-indigo-500/50 text-white placeholder-transparent focus:outline-none focus:border-indigo-400 transition duration-300 py-3"
                    />
                    <label
                      htmlFor={field}
                      className="absolute left-0 -top-3.5 text-indigo-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-400 peer-focus:-top-3.5 peer-focus:text-indigo-200 font-semibold"
                    >
                      {field === "name" ? "Full Name" : "Email Address"}
                    </label>
                  </div>
                ))}

                <div className="relative group">
                  <textarea
                    required
                    name="message"
                    id="message"
                    rows="5"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b-2 border-indigo-500/50 text-white placeholder-transparent focus:outline-none focus:border-indigo-400 transition duration-300 py-3 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-indigo-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-400 peer-focus:-top-3.5 peer-focus:text-indigo-200 font-semibold"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-semibold text-xl tracking-wide shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-400/70 ${
                    loading ? "cursor-not-allowed opacity-70 hover:scale-100 hover:shadow-lg" : ""
                  }`}
                  aria-label="Send Message"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-6 w-6 mx-auto text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInShadow {
          from {
            opacity: 0;
            box-shadow: 0 0 0 rgba(236, 72, 153, 0);
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4);
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease forwards;
        }
        .animate-fadeInShadow {
          animation: fadeInShadow 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
