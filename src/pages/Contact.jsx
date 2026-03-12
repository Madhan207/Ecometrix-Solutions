import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './../styles/Global.css';

const Contact = () => {
    return (
        <div className="contact-page fade-in" style={{ paddingTop: '120px' }}>
            <section className="contact-hero section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="outfit"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        Get In <span style={{ color: 'var(--accent-color)' }}>Touch</span>
                    </motion.h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Have questions about our technology or need a custom quote? Our experts are ready to assist you.
                    </p>
                </div>
            </section>

            <section className="contact-main section">
                <div className="container">
                    <div className="responsive-grid-1-2">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass"
                            style={{ padding: '4rem', borderRadius: '30px' }}
                        >
                            <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Send a Message</h2>
                            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div className="responsive-grid-2" style={{ gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Full Name</label>
                                        <input type="text" placeholder="Enter Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '10px', color: '#fff' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Email Address</label>
                                        <input type="email" placeholder="your@gmail.com" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '10px', color: '#fff' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Subject</label>
                                    <select style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '10px', color: '#fff' }}>
                                        <option>Product Inquiry</option>
                                        <option>Partnership</option>
                                        <option>Careers</option>
                                        <option>Support</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Message</label>
                                    <textarea rows="5" placeholder="Tell us about your needs..." style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '10px', color: '#fff', resize: 'none' }}></textarea>
                                </div>
                                <button className="glow-btn" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info and Location */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
                        >
                            <div>
                                <h3 className="outfit" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Contact Information</h3>
                                <div style={{ display: 'flex', gap: '20px', marginBottom: '2rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600 }}>Email Us</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>ecometrixsolutions24@gmail.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', marginBottom: '2rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(0, 255, 136, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600 }}>Call Us</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>+91 6380361535</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600 }}>Location</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>J Block , K.S.Rangasamy College of Technology ,K.S.R Kalvi Nagar,Tiruchengode-637 215</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <MessageSquare size={48} style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }} />
                                <h3 className="outfit">Live Support Coming Soon</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>We are currently building our real-time AI assistant to help you 24/7.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="map-section section">
                <div className="container">
                    <div style={{ width: '100%', height: '400px', background: 'var(--panel-color)', border: '1px solid var(--border-color)', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2806.4084992097637!2d77.82341614324757!3d11.359913899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDIxJzM3LjMiTiA3N8KwNDknMzkuNiJF!5e1!3m2!1sen!2sin!4v1773115082514!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Company Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
