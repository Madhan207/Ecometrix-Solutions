import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Eye, Zap, Shield, Globe } from 'lucide-react';
import './../styles/Global.css';

const Technology = () => {
    const techs = [
        {
            icon: <Cpu size={40} />,
            title: "Robotics Automation",
            desc: "Advanced robotic chassis design for every floor type. Modular architecture allows for easy maintenance and hardware upgrades."
        },
        {
            icon: <Wifi size={40} />,
            title: "IoT Integration",
            desc: "Real-time fleet management through cloud-connected dashboards. Track performance, battery status, and locations in real-time."
        },
        {
            icon: <Eye size={40} />,
            title: "AI Powered Navigation",
            desc: "SLAM (Simultaneous Localization and Mapping) algorithms coupled with neural networks enable obstacle-free navigation in busy zones."
        },
        {
            icon: <Zap size={40} />,
            title: "Smart Sensors",
            desc: "LiDAR, ultrasonic, and infrared sensor arrays provide a 360-degree awareness field for maximum safety and precision."
        }
    ];

    return (
        <div className="technology-page fade-in" style={{ paddingTop: '120px' }}>
            <section className="tech-hero section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="outfit"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        The <span style={{ color: 'var(--accent-color)' }}>Technology</span> Core
                    </motion.h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Peek under the hood of Ecometrix Solutions. We combine artificial intelligence, IoT, and high-precision sensors to redefine environmental hygiene.
                    </p>
                </div>
            </section>

            <section className="tech-grid section">
                <div className="container">
                    <div className="responsive-grid-auto">
                        {techs.map((t, i) => (
                            <motion.div
                                key={t.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="glass"
                                style={{ padding: '3.5rem 2.5rem', borderRadius: '30px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
                            >
                                <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{t.icon}</div>
                                <h3 className="outfit" style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>{t.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>{t.desc}</p>
                                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--accent-secondary)', opacity: 0.05, borderRadius: '50%', filter: 'blur(40px)' }}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="edge-computing section glass" style={{ borderLeft: 'none', borderRight: 'none', margin: '4rem 0' }}>
                <div className="container">
                    <div className="responsive-grid-5-4">
                        <div>
                            <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Edge Computing for <span style={{ color: 'var(--accent-secondary)' }}>Zero-Latency</span> Safety</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                Each robot is equipped with its own dedicated processing unit. Decisions like emergency stopping or obstacle rerouting happen locally, not in the cloud.
                            </p>
                            <div className="responsive-grid-2" style={{ marginTop: '3rem' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <Shield style={{ color: 'var(--accent-color)' }} />
                                    <div>
                                        <h4 className="outfit">Safety Protocol</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Fail-safe mechanisms for human detection.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <Globe style={{ color: 'var(--accent-secondary)' }} />
                                    <div>
                                        <h4 className="outfit">Global Sync</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Decentralized data sync across entire robot fleets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', background: 'var(--panel-color)', padding: '5rem', borderRadius: '50%', border: '2px solid var(--accent-color)', boxShadow: 'var(--glow)' }}>
                            <Zap size={100} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                            <h3 className="outfit">Nano-Second Response</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;
