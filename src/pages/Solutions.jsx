import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Home as HomeIcon, Settings, Cpu, ChevronRight } from 'lucide-react';
import './../styles/Global.css';

const Solutions = () => {
    const products = [
        {
            id: "industrial-cleaner",
            title: "Industrial Robotic Cleaner",
            category: "Industrial",
            tagline: "Heavy-duty performance for large spaces.",
            features: ["Auto-docking", "UV-C Disinfection", "Obstacle Avoidance"],
            icon: <Factory size={48} />
        },
        {
            id: "home-cleaner",
            title: "Home Robotic Cleaner",
            category: "Residential",
            tagline: "Effortless cleaning for your smart home.",
            features: ["Pet-Friendly", "Quiet Mode", "Custom Schedules"],
            icon: <HomeIcon size={48} />
        },
        {
            id: "customized-robots",
            title: "Customized Cleaning Robots",
            category: "Bespoke",
            tagline: "Tailored to your specific facility needs.",
            features: ["Modular design", "Specific sensor arrays", "API integration"],
            icon: <Settings size={48} />
        }
    ];

    return (
        <div className="solutions-page fade-in" style={{ paddingTop: '120px' }}>
            <section className="solutions-hero section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="outfit"
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        Our <span style={{ color: 'var(--accent-color)' }}>Solutions</span> & Products
                    </motion.h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Empowering your environment with state-of-the-art robotic technology designed for every scale.
                    </p>
                </div>
            </section>

            <section className="product-grid section">
                <div className="container">
                    <div className="responsive-grid-auto" style={{ gap: '2.5rem' }}>
                        {products.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass"
                                style={{ padding: '3rem 2rem', borderRadius: '25px', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                                    {product.icon}
                                </div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-secondary)', fontWeight: 700, letterSpacing: '1px' }}>{product.category}</span>
                                    <h3 className="outfit" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>{product.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{product.tagline}</p>
                                </div>
                                <div style={{ flexGrow: 1 }}>
                                    <ul style={{ marginBottom: '2rem' }}>
                                        {product.features.map((f, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="secondary-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                    View Details <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customizable CTA */}
            <section className="custom-solution section glass" style={{ borderLeft: 'none', borderRight: 'none', marginTop: '4rem' }}>
                <div className="container">
                    <div className="responsive-grid-2">
                        <div>
                            <h2 className="outfit" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Need a <span style={{ color: 'var(--accent-color)' }}>Custom</span> Solution?</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                Every facility has unique challenges. Our engineering team specializes in building bespoke robotic systems tailored to your specific architectural and operational needs.
                            </p>
                            <button className="glow-btn">Consult Our Engineers</button>
                        </div>
                        <div style={{ background: 'var(--panel-color)', padding: '3rem', borderRadius: '30px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}><Settings size={80} style={{ margin: '0 auto' }} /></div>
                            <h3 className="outfit">Design. Build. Deploy.</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>We handle everything from initial concept drafting to final on-site robot implementation.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
