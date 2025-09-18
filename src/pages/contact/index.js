import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = (props) => {
    const {id}=props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Your theme colors
  const color = {
    primary: '#00D4AA',
    white: '#ffffff',
    dark: '#070D1B'
  };

  const contactInformation = [
    {
      type: "Email",
      icon: "✉",
      value: "vishnuj756@mail.com",
      action: "mailto:vishnuj756@mail.com"
    },
    {
      type: "Phone",
      icon: "📞",
      value: "+91 8871942880",
      action: "tel:+918871942880"
    },
    {
      type: "Address",
      icon: "➤",
      value: "Vijay Nagar, Indore, India",
      action: "https://maps.google.com/?q=Vijay+Nagar,+Indore,+India"
    },
  
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .form-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 3rem;
          transition: all 0.4s ease;
        }

        .form-section:hover {
          border-color: rgba(0, 212, 170, 0.3);
          box-shadow: 0 20px 60px rgba(0, 212, 170, 0.1);
        }

        .form-title {
          color: white;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .form-description {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .input-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-input:focus {
          border-color: ${color.primary};
          box-shadow: 0 0 20px rgba(0, 212, 170, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-input.error {
          border-color: #ff4757;
          box-shadow: 0 0 20px rgba(255, 71, 87, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .error-message {
          color: #ff4757;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .submit-button {
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          border: none;
          color: #000;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 180px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 212, 170, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .contact-info-section {
          padding: 0rem 0;
        }

        .contact-info-title {
          color: white;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .contact-info-description {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .contact-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          transition: all 0.4s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .contact-item:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 170, 0.4);
          box-shadow: 0 15px 40px rgba(0, 212, 170, 0.15);
          background: rgba(255, 255, 255, 0.08);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, ${color.primary}, #00B4A6);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .contact-details {
          flex-grow: 1;
        }

        .contact-type {
          color: ${color.primary};
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .contact-value {
          color: white;
          font-size: 1rem;
          margin: 0;
        }

        .status-message {
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .status-success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }

        .status-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(0, 212, 170, 0.05), rgba(0, 212, 170, 0.02));
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .floating-shape:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-shape:nth-child(2) {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 10%;
          animation-delay: 3s;
        }

        .floating-shape:nth-child(3) {
          width: 60px;
          height: 60px;
          bottom: 30%;
          left: 20%;
          animation-delay: 6s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-container {
            padding: 0 1rem;
          }

          .contact-title {
            font-size: 2.5rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-section {
            padding: 2rem 1.5rem;
          }

          .contact-item {
            padding: 1.5rem;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <section className="contact-section" id={id}>
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="contact-container">
          {/* Header */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="contact-title">
              Get In <span style={{ color: color.primary }}>Touch</span>
            </h2>
            <p className="contact-subtitle">
              Ready to start your next project? Let's create something amazing together
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="contact-grid">
            {/* Form Section */}
            <motion.div
              className="form-section"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="form-title">Send Message</h3>
              <p className="form-description">
                Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <motion.div 
                  className="status-message status-success"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="status-message status-error"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}

              <div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  {errors.name && (
                    <div className="error-message">
                      ⚠️ {errors.name}
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <div className="error-message">
                      ⚠️ {errors.email}
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  {errors.phone && (
                    <div className="error-message">
                      ⚠️ {errors.phone}
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <textarea
                    placeholder="Your Message"
                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                  {errors.message && (
                    <div className="error-message">
                      ⚠️ {errors.message}
                    </div>
                  )}
                </div>

                <motion.button
                  type="button"
                  className="submit-button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              className="contact-info-section"
              variants={contactInfoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Reach out through any of these channels. I'm always excited to connect with new people and discuss potential collaborations.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInformation.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.action}
                    target={item.action.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <div className="contact-type">{item.type}</div>
                      <p className="contact-value">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;