import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
        },
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      console.error("FAILED...", err);
      setStatus({ loading: false, success: false, error: "Failed to send message. Please try again later." });
    }
  }
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 md:mb-6">Let's Work <span className="text-gradient">Together</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Have a project in mind? Let's discuss how I can help bring your ideas to life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          <div className="space-y-4 md:space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">Let's talk about your project</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
            </div>

            <div className="space-y-4">
              <div className="group flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Indore, India</p>
                </div>
              </div>

              <div className="group flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:vishnuj756@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors break-all">vishnuj756@gmail.com</a>
                </div>
              </div>

              <div className="group flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+918871942880" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors">+91-8871942880</a>
                </div>
              </div>

              <div className="group flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/vishal-shivhare-23ab72273/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors break-all">vishal-shivhare-23ab72273</a>
                </div>
              </div>


            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white" placeholder="John Doe" name="name" value={formData?.name || ""} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white" placeholder="john@example.com" name="email" value={formData?.email || ""} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white" placeholder="How can I help you?" name="subject" value={formData?.subject || ""} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none" placeholder="Write your message here..." name="message" value={formData?.message || ""} onChange={handleChange}></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-4 text-white font-bold rounded-xl transition-all ${status.loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-pink-600 hover:shadow-lg hover:scale-[1.02]'
                  }`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && (
                <div className="p-4 mt-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status.error && (
                <div className="p-4 mt-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-center font-medium">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
