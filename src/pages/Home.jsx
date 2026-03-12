import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Shield, Zap, TrendingUp, Users, Factory, Warehouse, Hospital, Building, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './../styles/Global.css';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const services = [
        { icon: <Bot size={40} />, title: "Industrial Cleaning", desc: "Heavy-duty robotics for manufacturing plants and large-scale industrial spaces." },
        { icon: <Factory size={40} />, title: "TYDRON", desc: "Autonomous Industrial Robotic Cleaner designed for factories, workshops, and warehouses." },
    ];

    const features = [
        { icon: <Zap />, title: "High Efficiency", value: "99.9%" },
        { icon: <TrendingUp />, title: "Cost Reduction", value: "40%" },
        { icon: <Users />, title: "Safe Integration", value: "100%" },
    ];

    return (
        <div className="home-page fade-in">
            {/* Hero Section */}
            <section className="hero-section section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '700px' }}>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700 }}
                            className="outfit"
                        >
                            Smart Robotic <span style={{ color: 'var(--accent-color)' }}>Cleaning</span> for Industries and Homes
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}
                        >
                            Experience the future of hygiene with Ecometrix Solutions. We empower industries and homes with intelligent, autonomous cleaning robotics that blend performance with sustainability.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
                            className="hero-buttons"
                        >
                            <Link to="/solutions" className="glow-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>Explore Solutions <ArrowRight size={18} style={{ marginLeft: '10px' }} /></Link>
                            <Link to="/technology" className="secondary-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Watch Technology</Link>
                        </motion.div>
                    </div>
                </div>

                {/* Animated Robot Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="hero-bot-image"
                >
                    <div style={{ padding: '4rem', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 80%)', borderRadius: '50%' }}>
                        <Bot size={500} style={{ color: 'var(--accent-color)', opacity: 0.8 }} className="bot-icon-svg" />
                    </div>
                </motion.div>

                {/* Floating tech elements */}
                <div className="tech-elements" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0 }}>
                    <div className="bg-orb bg-orb-1"></div>
                    <div className="bg-orb bg-orb-2"></div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
                <div className="container">
                    <div className="responsive-grid-2">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Pioneering the Next Era of cleaning</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                At Ecometrix Solutions, we don't just build robots; we build the future of environment management. Our mission is to automate cleaning processes using intelligent robotics to improve efficiency, hygiene, and sustainability in every space.
                            </p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Founded by a team of robotics enthusiasts and environmentalists, we strive to reduce human exposure to hazardous cleaning environments while delivering a level of precision that manual cleaning cannot match.
                            </p>
                        </motion.div>
                        <div className="responsive-grid-3">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    style={{ padding: '2rem 1.5rem', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-color)', textAlign: 'center' }}
                                >
                                    <div style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>{f.value}</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{f.title}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="outfit" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--accent-color)' }}>Services</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Leveraging state-of-the-art robotics to deliver tailored cleaning solutions across diverse environments.</p>
                    </div>
                    <div className="responsive-grid-auto">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{ padding: '3rem 2rem', background: 'var(--panel-color)', borderRadius: '20px', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}
                            >
                                <div style={{ color: 'var(--accent-secondary)', marginBottom: '2rem' }}>{s.icon}</div>
                                <h3 className="outfit" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                                <Link to="/solutions" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                                    Learn More <ArrowRight size={16} />
                                </Link>
                                {/* Decorative glow in corner */}
                                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '80px', height: '80px', background: 'var(--accent-color)', opacity: 0.1, borderRadius: '50%', filter: 'blur(30px)' }}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="cta-section section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div className="glass" style={{ padding: '5rem 2rem', borderRadius: '30px' }}>
                        <h2 className="outfit" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to <span style={{ color: 'var(--accent-color)' }}>Automate</span> Your Cleaning?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Join the hundreds of businesses already optimizing their operations with Ecometrix Solutions. Contact our experts for a personalized demo today.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <Link to="/contact" className="glow-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Get Started Now</Link>
                            <Link to="/contact" className="secondary-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Request a Demo</Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
