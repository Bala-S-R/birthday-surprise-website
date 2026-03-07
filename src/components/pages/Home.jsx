import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [typedText, setTypedText] = useState("");
    const [timeLeft, setTimeLeft] = useState({
        days: 23,
        hours: 11,
        minutes: 45,
        seconds: 0
    });

    const fullText = `From the moment you came into my life, everything changed in the most beautiful way. You are the greatest gift I have ever received — the most precious surprise God gave me. No matter the misunderstandings or little fights, your heart that always chooses us is what I cherish the most.
Sometimes I may act possessive or overreact, but it only comes from the fear of losing someone who means the world to me. Your smile brightens my darkest days, and your presence fills my life with warmth and happiness.
I truly believe you are meant for great things. No matter what struggles come your way, I will always stand behind you — supporting you, believing in you, and silently cheering for every success you achieve.

You are not just my favorite person, Ammu…
You are my happiness, my strength, my peace, and my forever.
And I will love you — today, tomorrow, and for a lifetime.❤️`;

    // Target Date: March 31, 2026 (based on the initial 23-day offset)
    const targetDate = new Date("March 31, 2026 00:00:00").getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [fullText]);

    useEffect(() => {
        const heartContainer = document.querySelector('.hearts-bg-container');
        if (!heartContainer) return;

        const createHeart = () => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 5 + 5 + 's';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heartContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 10000);
        };

        const interval = setInterval(createHeart, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="page-content animate-pop">
            <div className="hearts-bg-container"></div>


            <div className="animate-3d-float">
                <h1 className="romantic-title glowing-text">Wish You Many More Happy Birthday Vaishu ❤️</h1>

                <div className="hero-section">
                    <div className="glass-card-romantic hero-image-container glowing-border">
                        <img
                            src="/vaishu.jpg"
                            alt="Vaishu"
                            className="romantic-image"
                        />
                    </div>

                    <div className="glass-card-romantic intro-card">
                        <p className="typing-text">{typedText}</p>
                        <div className="decorative-icon">✨</div>
                    </div>
                </div>
            </div>

            <div className="countdown-grid">
                <div className="glass-card-romantic timer-box">
                    <span className="timer-val">{timeLeft.days}</span>
                    <span className="timer-label">Days</span>
                </div>
                <div className="glass-card-romantic timer-box">
                    <span className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="timer-label">Hours</span>
                </div>
                <div className="glass-card-romantic timer-box">
                    <span className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="timer-label">Mins</span>
                </div>
                <div className="glass-card-romantic timer-box">
                    <span className="timer-val running-seconds">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="timer-label">Secs</span>
                </div>
            </div>

            <button className="action-btn next-step-btn" onClick={() => navigate('/wish')}>
                Open Our Journey ✨
            </button>
        </div>
    );
};

export default HomePage;
