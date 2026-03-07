import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './PromisesPage.css';

const PromisesPage = () => {
    const navigate = useNavigate();
    const { width, height } = useWindowSize();

    const promises = [
        { icon: '🤝', title: 'Always stand by your side', desc: 'Through happy moments and difficult times, I will always support you.' },
        { icon: '💖', title: 'Respect and care for you', desc: 'Your happiness and peace will always matter to me.' },
        { icon: '😊', title: 'Make you smile whenever I can', desc: 'Even on the toughest days, I will try to bring a smile to your face.' },
        { icon: '🌙', title: 'Listen to you and understand you', desc: 'Your thoughts, feelings, and dreams will always be important to me.' },
        { icon: '💫', title: 'Grow together with you', desc: 'I promise to keep learning, improving, and building a beautiful life together.' }
    ];

    const dreams = [
        { icon: '💍', title: 'A Beautiful Marriage', desc: 'A life where we build a home filled with love, laughter, and understanding.' },
        { icon: '✈️', title: 'Traveling Together', desc: 'Exploring new places, creating unforgettable memories together.' },
        { icon: '🏡', title: 'A Peaceful Life Together', desc: 'A future where we support each other and grow stronger every day.' }
    ];

    return (
        <div className="promises-page-container page-content">
            <Confetti
                width={width}
                height={height}
                recycle={true}
                numberOfPieces={100}
                gravity={0.03}
                colors={['#ff4081', '#7c4dff', '#ff80ab', '#b39ddb']}
            />

            <header className="promises-header animate-3d-float">
                <h1 className="romantic-title glowing-text">🧸 Our Future Promises</h1>
                <p className="promises-sub">
                    No matter where life takes us, there are a few promises I want to make to you from my heart.
                    These are not just words — they are the dreams I hope to build with you every single day. ❤️
                </p>
            </header>

            <section className="promises-section">
                <h2 className="section-subtitle">💌 I Promise To…</h2>
                <div className="promises-grid">
                    {promises.map((item, index) => (
                        <div key={index} className="promise-card glass-card-romantic animate-pop" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="promise-icon">{item.icon}</div>
                            <h3 className="promise-title">{item.title}</h3>
                            <p className="promise-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="dreams-section">
                <h2 className="section-subtitle">✨ Our Future Dreams</h2>
                <div className="dreams-grid">
                    {dreams.map((item, index) => (
                        <div key={index} className="dream-card glass-card-romantic animate-pop" style={{ animationDelay: `${(index + 5) * 0.2}s` }}>
                            <div className="dream-icon">{item.icon}</div>
                            <h3 className="dream-title">{item.title}</h3>
                            <p className="dream-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="final-message-section glass-card-romantic animate-pop" style={{ animationDelay: '2.5s' }}>
                <h2 className="romantic-title">💖 Final Message</h2>
                <div className="final-text-content">
                    <p>No matter how many years pass, my heart will always choose you.</p>
                    <p>Thank you for being the most beautiful part of my life. 🌸</p>
                    <p className="birthday-signoff">Happy Birthday, my love. 💌✨</p>
                    <p className="eternal-promise">If I had to choose again, in every lifetime and every world, I would still choose you. 💌✨</p>
                </div>
            </section>

            <footer className="promises-footer">
                <button className="action-btn" onClick={() => navigate('/final-wish')}>
                    Back to Message 📖
                </button>
                <button className="action-btn" onClick={() => navigate('/gift')}>
                    For You to Open Your Surprise 🎁
                </button>
            </footer>
        </div>
    );
};

export default PromisesPage;
