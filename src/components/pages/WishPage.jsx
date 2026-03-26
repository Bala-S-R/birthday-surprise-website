import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WishPage.css';

const WishPage = () => {
    const navigate = useNavigate();
    const timelineDates = [
        "15 Sep 2025", "20 Sep 2025", "21 Sep 2025", "1 Oct 2025",
        "3 Oct 2025", "4 Oct 2025", "25 Oct 2025", "8 Nov 2025",
        "9 Nov 2025", "17 Jan 2026", "23 Jan 2026", "24 Jan 2026",
        "7 Feb 2026", "14 Feb 2026", "15 Feb 2026", "14 Mar 2026",
        "21 Mar 2026", "22 Mar 2026", "23 Mar 2026"
    ];

    // Sparkles background effect
    useEffect(() => {
        const container = document.querySelector('.wish-page-container');
        if (!container) return;

        const createSparkle = () => {
            const s = document.createElement('div');
            s.className = 'sparkle-dot';
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = Math.random() * 2 + 's';
            s.style.width = s.style.height = (Math.random() * 6 + 2) + 'px';
            container.appendChild(s);
            setTimeout(() => s.remove(), 4000);
        };

        const interval = setInterval(createSparkle, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="wish-page-container page-content animate-pop">
            <header className="surprise-header animate-3d-float">
                <div className="special-badge">💝 OUR STORY</div>
                <h1 className="romantic-title glowing-text">Love Memory Timeline ⏳</h1>
                <div className="timeline-intro glass-card-romantic">
                    <p>Every date here holds a special memory in our story — moments that made us laugh, grow, and understand each other more.</p>
                    <p>Some memories are beautiful, some were lessons, but every single one brought us closer.</p>
                    <p>This timeline is just a small glimpse of the journey we started together. ✨</p>
                </div>

                <div className="journey-heading animate-pop" style={{ animationDelay: '0.3s' }}>
                    <h2 className="journey-title">Our Journey</h2>
                    <p className="journey-years">2023 – 2024 – 2025</p>
                    <div className="journey-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-dim)', fontStyle: 'italic', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p>2023 – Two strangers, one beautiful beginning.</p>
                        <p>2024 – Even through distance and lost calls, our bond remained.</p>
                        <p>2025 – The day two hearts finally met in the same place.</p>
                    </div>
                </div>
            </header>

            <section className="timeline-section">
                <div className="timeline-line"></div>
                <div className="timeline-grid">
                    {timelineDates.map((date, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-pop`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card-romantic">
                                <span className="timeline-date">{date}</span>
                                <div className="timeline-heart">💖</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Heartfelt Closing Message */}
            <div className="timeline-footer-message glass-card-romantic animate-pop" style={{ animationDelay: '2.2s' }}>
                <p className="closing-text">
                    The day I’m with you feels perfect, peaceful, and full of happiness. 🌸
                    Everything feels lighter, and my heart feels complete. 💓
                    Every moment I spend with you turns into my favorite memory, even before it ends. ✨
                    Because when I’m by your side, nothing else in this world truly matters. 💕
                </p>
            </div>

            <button className="action-btn" style={{ marginTop: '50px' }} onClick={() => navigate('/story')}>
                Continue Our Story 💖
            </button>
        </div>
    );
};

export default WishPage;
