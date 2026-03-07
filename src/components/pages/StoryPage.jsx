import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StoryPage.css';

const StoryPage = () => {
    const navigate = useNavigate();

    const loveItems = [
        { icon: '💫', title: 'Your Heart', desc: 'Your heart is full of kindness and warmth 💖. The way you care for people shows how beautiful you truly are inside.' },
        { icon: '🎵', title: 'Your Voice', desc: 'Your voice feels like comfort to my soul 🎶. Even the simplest words from you can calm my mind and make my day better.' },
        { icon: '🌙', title: 'Your Strength', desc: 'I admire your strength more than you know 💫. Even when things are difficult, you keep going with courage and grace.' },
        { icon: '🦋', title: 'Your Dreams', desc: 'Your dreams inspire me to believe in possibilities ✨. I love seeing the passion in your eyes 👀 when you talk about the future.' },
        { icon: '❤️', title: 'Your Presence', desc: 'Just having you in my life makes everything brighter 💞. Your presence brings peace, happiness, and meaning to my world.' },
        { icon: '👀', title: 'Your Eyes', desc: 'Your eyes hold a kind of magic I can’t explain. Every moment I look into them becomes a beautiful memory I will always cherish 💌.' }
    ];

    // Sparkles background effect
    React.useEffect(() => {
        const container = document.querySelector('.story-page-container');
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
        <div className="story-page-container page-content animate-pop">
            <div className="sparkles-bg"></div>

            <header className="story-header animate-3d-float">
                <h1 className="romantic-title glowing-text">Things I Love About You</h1>
                <p className="love-sub">You are not just a part of my life, you are the most beautiful part of my story 💌✨</p>
            </header>

            <div className="love-grid">
                {loveItems.map((item, index) => (
                    <div key={index} className="love-item-card glass-card-romantic animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="love-item-icon">{item.icon}</div>
                        <h3 className="love-item-title">{item.title}</h3>
                        <p className="love-item-desc">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="story-conclusion animate-pop" style={{ animationDelay: '1.5s' }}>
                <p className="conclusion-main">And honestly… these are just a few.</p>
                <p className="conclusion-sub">There are a thousand little things about you that make me fall in love with you every single day 💌✨</p>
            </div>

            <div className="story-footer">
                <button className="action-btn" onClick={() => navigate('/wish')}>
                    Back to Timeline ⏳
                </button>
                <button className="action-btn" onClick={() => navigate('/final-wish')}>
                    Something I Want To Tell You 💫
                </button>
            </div>
        </div>
    );
};

export default StoryPage;
