import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Linkedin, Twitter, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import './../styles/Global.css';
import logoImg from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <Link to="/" className="logo" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <img src={logoImg} alt="Ecometrix Solutions Logo" style={{ height: '100px' }} />
                            <span>Ecometrix <span style={{ color: 'var(--accent-secondary)' }}>Solutions</span></span>
                        </Link>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                            Specializing in designing and developing customized robotic cleaning solutions for industries, commercial spaces, and homes. Automating cleaning processes with intelligent robotics.
                        </p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/ecometrix-solutions24" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/solutions">Solutions</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link to="/solutions">Industrial Cleaner</Link></li>
                            <li><Link to="/solutions">Home Cleaner</Link></li>
                            <li><Link to="/solutions">Customized Robots</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 style={{ marginBottom: '1.5rem' }}>Contact Info</h4>
                        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <MapPin size={60} style={{ color: 'var(--accent-color)' }} />
                            <span>J Block , K.S.Rangasamy College of Technology ,K.S.R Kalvi Nagar,Tiruchengode-637 215</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <Mail size={20} style={{ color: 'var(--accent-color)' }} />
                            <span>ecometrixsolutions24@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                            <Phone size={20} style={{ color: 'var(--accent-color)' }} />
                            <span>+91 6380361535</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ecometrix Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
