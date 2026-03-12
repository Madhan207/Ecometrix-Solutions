import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, CheckSquare, Target, Zap } from 'lucide-react';
import './../styles/Global.css';

const Projects = () => {
    const projects = [
        {
            title: "TYDRON",
            industry: "Industrial Robotic Cleaner",
            metrics: "Autonomous & Smart",
            desc: "TYDRON is a smart robotic cleaning system designed for factories, workshops, and warehouses. It automatically cleans dust, debris, and metal scraps from industrial floors, helping maintain a safer and cleaner workspace while reducing manual labor.",
            tags: ["Autonomous Navigation", "Obstacle Detection", "Dual-Bin Waste Separation", "Powerful Vacuum & Brush", "Durable Wheels", "Compact & Rugged"],
            tech: ["LiDAR-based mapping and navigation", "Sensor-based obstacle detection", "Embedded robotic control system", "Intelligent cleaning path planning"]
        }
    ];

    return (
        <div className="portfolio-page fade-in" style={{ paddingTop: '120px' }}>
            <section className="portfolio-hero section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="outfit"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        Our <span style={{ color: 'var(--accent-color)' }}>Project</span> Showcase
                    </motion.h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Showcasing our flagship product redefining industrial cleaning.
                    </p>
                </div>
            </section>

            <section className="case-studies section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                        {projects.map((proj, i) => (
                            <motion.div
                                key={proj.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass"
                                style={{ padding: '4rem', borderRadius: '30px', position: 'relative' }}
                            >
                                <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'var(--accent-secondary)' }}>
                                    <Target size={40} />
                                </div>
                                <div style={{ paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
                                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '2px' }}>{proj.industry}</span>
                                    <h3 className="outfit" style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: '#fff' }}>{proj.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.6' }}>{proj.desc}</p>
                                </div>

                                <div className="responsive-grid-2" style={{ marginBottom: '3rem' }}>
                                    <div>
                                        <h4 className="outfit" style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Key Features</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {proj.tags.map(tag => (
                                                <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <CheckSquare size={20} style={{ color: 'var(--accent-secondary)' }} />
                                                    <span style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="outfit" style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Technology Used</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {proj.tech.map(t => (
                                                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <LayoutGrid size={20} style={{ color: 'var(--accent-secondary)' }} />
                                                    <span style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{t}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="glass" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', borderRadius: '15px', background: 'rgba(0,0,0,0.3)', textAlign: 'center' }}>
                                    <Zap size={32} style={{ color: 'var(--accent-color)' }} />
                                    <div>
                                        <h4 className="outfit" style={{ fontSize: '1.8rem', color: '#fff', margin: 0 }}>{proj.metrics}</h4>
                                        <p style={{ color: 'var(--accent-secondary)', fontSize: '1rem', margin: 0, fontWeight: 600 }}>Ready for Deployment</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
