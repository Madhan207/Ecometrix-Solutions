import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Leaf } from 'lucide-react';
import './../styles/Global.css';
import founderImg from '../assets/founder.jpg';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.jpeg';
import team3 from '../assets/team3.png';

const About = () => {
    const values = [
        { icon: <Target size={32} />, title: "Our Mission", desc: "To automate cleaning processes using intelligent robotics to improve efficiency, hygiene, and sustainability." },
        { icon: <Eye size={32} />, title: "Our Vision", desc: "To lead the global transition towards autonomous environment management using AI and robotics." },
        { icon: <Award size={32} />, title: "Quality Guarantee", desc: "Uncompromising standards in robotic design and software performance." },
        { icon: <Leaf size={32} />, title: "Sustainability", desc: "Reducing water and chemical waste through precise robotic application." }
    ];

    return (
        <div className="about-page fade-in" style={{ paddingTop: '120px' }}>
            <section className="about-hero section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="outfit"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        About <span style={{ color: 'var(--accent-color)' }}>Ecometrix</span> Solutions
                    </motion.h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Founded in 2024, our journey began with a single vision: to transform how cleanliness is maintained in modern industrial and residential environments.
                    </p>
                </div>
            </section>

            <section className="vision-mission section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
                <div className="container">
                    <div className="responsive-grid-auto">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                style={{ padding: '2.5rem', background: 'var(--panel-color)', borderRadius: '20px', border: '1px solid var(--border-color)', textAlign: 'center' }}
                            >
                                <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                                <h3 className="outfit" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{v.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="founder-message section">
                <div className="container">
                    <div className="responsive-grid-1-2">
                        <div style={{ borderRadius: '25px', overflow: 'hidden', border: '2px solid var(--accent-color)', width: '100%', aspectRatio: '1/1', background: 'var(--panel-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={founderImg} alt="Madhan Raj M" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Message from Our <span style={{ color: 'var(--accent-secondary)' }}>Founder</span></h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', fontStyle: 'italic' }}>
                                "We believe that human potential is wasted on repetitive manual cleaning tasks. Our robotics empower people to focus on higher-level problem solving while robots handle the precision and hygiene of their workspace."
                            </p>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.2rem' }}>Madhan Raj M</h4>
                            <p style={{ color: 'var(--accent-color)', fontWeight: 600 }}>CEO & Founder, Ecometrix Solutions</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet Our <span style={{ color: 'var(--accent-secondary)' }}>Team</span></h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>The innovative minds driving our vision forward.</p>
                    </div>
                    <div className="responsive-grid-auto" style={{ gap: '2rem' }}>
                        {/* Team Member 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{ background: 'var(--panel-color)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', textAlign: 'center' }}
                        >
                            <img src={team3} alt="Aadhavan G" style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'top' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <h3 className="outfit" style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>Aadhavan G</h3>
                                <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>Co Founder</p>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    <p style={{ marginBottom: '0.3rem' }}>aathavanganesan18@gmail.com</p>
                                    <p>+91 9600802107</p>
                                </div>
                            </div>
                        </motion.div>
                        {/* Team Member 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{ background: 'var(--panel-color)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', textAlign: 'center' }}
                        >
                            <img src={team1} alt="Aloysius Ajai L" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <h3 className="outfit" style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>Aloysius Ajai L</h3>
                                <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>Director & Technical lead</p>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    <p style={{ marginBottom: '0.3rem' }}>ajaialoysius04@gmail.com</p>
                                    <p>+91 9345878695</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Team Member 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ background: 'var(--panel-color)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', textAlign: 'center' }}
                        >
                            <img src={team2} alt="Kavin.S" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <h3 className="outfit" style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>Kavin.S</h3>
                                <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>Director & project lead</p>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                    <p style={{ marginBottom: '0.3rem' }}>kavin.s162006@gmail.com</p>
                                    <p>+91 9087906837 | +91 9965480927</p>
                                </div>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </section>
            <section className="innovation section glass" style={{ borderLeft: 'none', borderRight: 'none', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 229, 255, 0.05))' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Innovation Focus</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>Combining cutting-edge AI with sustainable engineering to redefine clean spaces.</p>
                    </div>
                    <div className="responsive-grid-auto">
                        <div style={{ padding: '2rem' }}>
                            <h3 className="outfit" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Hardware Excellence</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Our robots are built with military-grade sensors and modular parts, ensuring long-term durability in even the toughest industrial environments.</p>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 className="outfit" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Software Intelligence</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Powered by advanced neural networks, our navigation systems learn the most efficient paths and adapt to real-time changes in their surroundings.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
