import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, Coffee, ArrowUpRight } from 'lucide-react';
import './../styles/Global.css';

const Careers = () => {
    const jobs = [
        { title: "Senior Robotics Software Engineer", type: "Full-Time", location: "San Francisco / Remote", dept: "Engineering" },
        { title: "AI Research Scientist (SLAM)", type: "Full-Time", location: "Berlin, Germany", dept: "R&D" },
        { title: "UI/UX Designer (Product)", type: "Contract", location: "Remote", dept: "Design" },
        { title: "Global Sales Strategy Manager", type: "Full-Time", location: "Singapore", dept: "Sales" }
    ];

    const perks = [
        { icon: <Globe />, title: "Remote Friendly", desc: "Work from anywhere in the world on our global projects." },
        { icon: <Briefcase />, title: "Growth & Learning", desc: "Annual budget for courses, conferences, and hardware." },
        { icon: <Coffee />, title: "Culture of Innovation", desc: "A flat hierarchy where the best ideas always win." }
    ];

    return (
        <div className="careers-page fade-in" style={{ paddingTop: '120px' }}>
            <section className="careers-hero section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="outfit"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        Shape the Future of <span style={{ color: 'var(--accent-color)' }}>Robotics</span>
                    </motion.h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Join a mission-driven team dedicated to automating the heavy lifting of hygiene. At Ecometrix, your work matters.
                    </p>
                </div>
            </section>

            <section className="culture section glass" style={{ borderLeft: 'none', borderRight: 'none' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="outfit" style={{ fontSize: '2.5rem' }}>Our Culture & Perks</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {perks.map((perk, i) => (
                            <motion.div
                                key={perk.title}
                                whileHover={{ scale: 1.05 }}
                                style={{ padding: '2.5rem', background: 'var(--panel-color)', borderRadius: '25px', border: '1px solid var(--border-color)', textAlign: 'center' }}
                            >
                                <div style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{perk.icon}</div>
                                <h3 className="outfit" style={{ fontSize: '1.50rem', marginBottom: '1rem' }}>{perk.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="open-positions section">
                <div className="container">
                    <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Open <span style={{ color: 'var(--accent-color)' }}>Positions</span></h2>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {jobs.map((job, i) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass"
                                style={{ padding: '2rem 3rem', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <div>
                                    <h3 className="outfit" style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{job.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{job.dept}</p>
                                </div>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzDAkUEeGMip0zcdGrdlZJFhtf2qg-P0aB0oexzKRmMpkM4Q/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="secondary-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                                    Apply Now <ArrowUpRight size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Careers;
