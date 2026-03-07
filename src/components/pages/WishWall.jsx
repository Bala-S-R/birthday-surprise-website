import React, { useState } from 'react';
import './WishWall.css';

const WishWall = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [activeMessage, setActiveMessage] = useState("");
    const [wishes, setWishes] = useState([
        { name: "Friend", message: "Happy Birthday I’m really lucky to have a friend like you. May your day be filled with happiness, laughter, and lots of sweet memories 🎉" },
        { name: "Best Friend", message: "Happy Birthday to my best friend Life is so much more fun with you by my side. Thank you for always being there for me. I hope this year brings you everything you dream of 💫" },
        { name: "Future Hubby", message: "Happy Birthday, my love I can’t wait for all the birthdays we’ll celebrate together in the future. You make my life more beautiful every day, and I’m so lucky to have you. 🎂💖" }
    ]);

    const surpriseMessages = [
        "🎉 Your wish has been delivered with love! Thank you for making this birthday more special.",
        "✨ Surprise! Your kind words just added more happiness to the celebration.",
        "🎂 Another beautiful wish added to the celebration. Thank you!",
        "🎁 Your message is a gift of joy. Thanks for sharing your wishes!",
        "💖 Every wish makes this day brighter. Thank you for spreading happiness!"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !message) return;

        const whatsappMsg = `Birthday Wish 🎂\nName: ${name}\nMessage: ${message}`;
        const mailBody = `Name: ${name}\nMessage: ${message}`;

        const newWish = { name, message };
        setWishes([newWish, ...wishes]);

        const whatsappUrl = `https://wa.me/916379097192?text=${encodeURIComponent(whatsappMsg)}`;
        const mailtoUrl = `mailto:balasubramaniyan16sr@gmail.com?subject=New Birthday Wish for Vaishu!&body=${encodeURIComponent(mailBody)}`;

        window.open(whatsappUrl, '_blank');

        // Telegram Notification
        const telegramMsg = `<b>🎂 New Birthday Wish Wall Entry!</b>\n\n<b>From:</b> ${name}\n<b>Message:</b> ${message}`;
        import('../../services/telegramService').then(service => {
            service.sendTelegramMessage(telegramMsg);
        });

        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 1000);

        setSubmitted(true);
        const randomMsg = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
        setActiveMessage(randomMsg);
        setTimeout(() => setShowPopup(true), 500);

        setName("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="wish-wall-container page-content animate-pop">
            {showPopup && (
                <div className="popup-overlay">
                    <div className="surprise-card glass-card-romantic animate-scale-in">
                        <div className="sparkles-container">
                            <span className="sparkle">✨</span>
                            <span className="sparkle">💖</span>
                            <span className="sparkle">🎉</span>
                        </div>
                        <h2 className="glowing-text">Surprise! 🎁</h2>
                        <p className="surprise-text" style={{ color: 'var(--text-main)' }}>{activeMessage}</p>
                        <button className="action-btn" onClick={() => setShowPopup(false)}>
                            Celebrate More 🎉
                        </button>
                    </div>
                </div>
            )}

            <header className="header-section animate-3d-float">
                <h1 className="romantic-title glowing-text">Leave a Birthday Wish 💌</h1>
                <p className="pink-text">Share your heartfelt wishes and make this birthday even more special.</p>
            </header>

            {submitted && <div className="success-message animate-pop">
                Thank you! Your birthday wish has been sent successfully. 🎉
            </div>}

            <div className="wish-form-card glass-card-romantic animate-float animate-3d-float">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>Your Message</label>
                        <textarea
                            rows="4"
                            placeholder="Write your birthday wish here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="action-btn" style={{ width: '100%' }}>
                        Submit Wish 🎉
                    </button>
                </form>
            </div>

            <section className="wishes-wall">
                <h2 className="romantic-title" style={{ fontSize: '2rem' }}>Birthday Wishes Wall 💬</h2>
                <div className="wishes-grid">
                    {wishes.map((wish, index) => (
                        <div key={index} className="wish-card glass-card-romantic animate-pop" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h4>{wish.name}</h4>
                            <p>{wish.message}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WishWall;
