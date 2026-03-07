import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './GiftPage.css';

const GiftPage = () => {
    const navigate = useNavigate();
    const { width, height } = useWindowSize();
    const [step, setStep] = useState(1); // 1: Gift, 2: Message, 3: Cake, 4: Wish Input, 5: Final
    const [isGiftOpened, setIsGiftOpened] = useState(false);
    const [isCandleHidden, setIsCandleHidden] = useState(false);
    const [isWishProcessing, setIsWishProcessing] = useState(false);
    const [isThankYouVisible, setIsThankYouVisible] = useState(false);
    const [userWish, setUserWish] = useState("");
    const [typedMsg1, setTypedMsg1] = useState("");
    const [typedMsg2, setTypedMsg2] = useState("");

    const msg1 = "You are the best thing that ever happened to me.\nMy life became more beautiful the day you came into it.\nThank you for being my happiness, my peace, and my love.\nHappy Birthday once again, my Vaishu. ❤️";

    const finalEnding = "Thank you for being the most beautiful part of my life story.\nHappy Birthday, my love. 💌✨";

    // Typing effect for message 1
    useEffect(() => {
        if (step === 2) {
            let i = 0;
            const timer = setInterval(() => {
                setTypedMsg1(msg1.slice(0, i));
                i++;
                if (i > msg1.length) clearInterval(timer);
            }, 40);
            return () => clearInterval(timer);
        }
    }, [step]);

    // Typing effect for final ending
    useEffect(() => {
        if (step === 5) {
            let i = 0;
            const timer = setInterval(() => {
                setTypedMsg2(finalEnding.slice(0, i));
                i++;
                if (i > finalEnding.length) clearInterval(timer);
            }, 40);
            return () => clearInterval(timer);
        }
    }, [step]);

    return (
        <div className="gift-page-container page-content">
            <div className="floating-hearts-bg">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="floating-heart" style={{
                        left: `${Math.random() * 100}vw`,
                        animationDelay: `${Math.random() * 8}s`,
                        fontSize: `${Math.random() * 20 + 10}px`
                    }}>❤️</div>
                ))}
            </div>

            {(step === 2 || step === 3 || isWishProcessing) && (
                <Confetti
                    width={width}
                    height={height}
                    recycle={step === 2}
                    numberOfPieces={200}
                    gravity={0.1}
                />
            )}

            {step === 1 && (
                <div className="gift-section animate-pop">
                    <div className="gift-card glass-card-romantic">
                        <h1 className="romantic-title">🎁 A Little Surprise For You</h1>
                        <p className="romantic-subline">I made something special just for you 💖</p>

                        <p className="gift-hint">Click below to open your gift!</p>

                        <div className={`gift-box-container ${isGiftOpened ? 'opened' : ''}`}>
                            <div className="gift-box">
                                <div className="gift-lid"></div>
                                <div className="gift-body"></div>
                                <div className="gift-ribbon"></div>
                            </div>
                            <div className="sparkles">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={`sparkle s${i + 1}`}>✨</div>
                                ))}
                            </div>
                        </div>

                        <button className="action-btn gift-btn" onClick={() => {
                            setIsGiftOpened(true);
                            setTimeout(() => setStep(2), 1500);
                        }}>
                            Open Your Gift 🎁
                        </button>
                    </div>
                    <p className="gift-love-note animate-pop">A small surprise… made with a lot of love 💌</p>
                </div>
            )}

            {step === 2 && (
                <div className="message-section animate-pop">
                    <h2 className="romantic-title gold-text">🎁 Your Gift</h2>
                    <div className="letter-container glass-card-romantic">
                        <p className="typing-text-fast">{typedMsg1}</p>
                    </div>

                    <div className="celebration-prompt mt-60">
                        <h2 className="romantic-title">🎉 Celebration Section</h2>
                        <h3 className="celebration-sub">🎂 Let’s Celebrate Your Birthday</h3>
                        <button className="action-btn celebrate-btn" onClick={() => setStep(3)}>
                            Let's Celebrate Your Birthday 🎉
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="cake-section animate-pop">
                    <h2 className="romantic-title">Make a wish… ✨</h2>
                    <div className="wish-subtext">
                        <p>Close your eyes, make a beautiful wish, and blow the candle… ✨</p>
                        <p>Something special is waiting for you 💖</p>
                    </div>

                    <div className="wish-card glass-card-romantic">
                        <div className="wish-card-icon">✨🎂✨</div>
                        <div className="cake-wrapper only-candles">
                            {/* Cake is hidden here per user request */}
                            <div className={`candles-container ${isCandleHidden ? 'hidden' : ''}`}>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`candle-overlay c${i + 1}`}>
                                        <div className="candle">
                                            <div className="flame"></div>
                                            <div className="candle-glow"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {isWishProcessing && isCandleHidden && (
                        <div className="wish-processing-overlay animate-pop">
                            <h2 className="romantic-title pink-text">Your wish is on its way… ✨</h2>
                        </div>
                    )}

                    {!isWishProcessing && (
                        <>
                            <button
                                className="action-btn blow-btn"
                                onClick={() => {
                                    setIsWishProcessing(true);
                                    setTimeout(() => {
                                        setIsCandleHidden(true);
                                    }, 1500);
                                    setTimeout(() => {
                                        setIsWishProcessing(false);
                                        setStep(4);
                                    }, 4500);
                                }}
                            >
                                Blow the Candle 🕯️
                            </button>
                            <p className="blow-hint-msg">The moment you blow the candle… the surprise continues 💖🎂</p>
                        </>
                    )}

                    <p className="magical-line">Birthday wishes are magical… especially when they come true 💫</p>
                </div>
            )}

            {step === 4 && (
                <div className="wish-input-section animate-pop">
                    {!isThankYouVisible ? (
                        <>
                            <h2 className="romantic-title">✨ Now it's your turn…</h2>
                            <div className="wish-intro-text">
                                <p>Vaishu, before the surprise ends,</p>
                                <p>I want you to leave a small message here.</p>
                                <p>It can be a wish, a thought, or anything from your heart. 💌</p>
                                <p className="mt-20">This little space is just for you.</p>
                            </div>
                            <div className="wish-form glass-card-romantic">
                                <textarea
                                    className="wish-textarea"
                                    placeholder="Write something from your heart..."
                                    value={userWish}
                                    onChange={(e) => setUserWish(e.target.value)}
                                ></textarea>
                                <button
                                    className="action-btn submit-wish-btn"
                                    onClick={() => {
                                        const telegramMsg = `<b>💖 New Message from Vaishu!</b>\n\n<i>"${userWish}"</i>`;
                                        import('../../services/telegramService').then(service => {
                                            service.sendTelegramMessage(telegramMsg);
                                        });
                                        setIsThankYouVisible(true);
                                    }}
                                    disabled={!userWish.trim()}
                                >
                                    Send Your Message 💖
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="thanks-msg-card glass-card-romantic animate-pop">
                            <div className="thanks-icon">💌</div>
                            <h2 className="romantic-title pink-text">Thank You, Vaishu</h2>
                            <div className="thanks-text-content mt-20">
                                <p className="thanks-text">Your message means the world to me.</p>
                                <p className="thanks-text">This little surprise was made with all my love, just for you.</p>
                                <p className="thanks-text">I hope today brings you happiness, laughter, and beautiful memories. ❤️</p>
                            </div>
                            <button className="action-btn mt-40" onClick={() => setStep(5)}>
                                See Your Final Surprise ✨
                            </button>
                        </div>
                    )}
                </div>
            )}

            {step === 5 && (
                <div className="final-surprise-section animate-pop">
                    <div className="wish-result mb-40">
                        <h2 className="romantic-title pink-text">Your wish is on its way…</h2>
                        <p className="wish-reveal">And my biggest wish is simply a future with you ❤️</p>
                    </div>

                    <div className="cake-blown">
                        <div className="cake-wrapper small-cake">
                            <img
                                src="/romantic_birthday_cake_no_candle_1772870400000_png_1772874270871.png"
                                alt="Birthday Cake"
                                className="real-cake-img"
                            />
                            <div className={`candles-container blown ${isCandleHidden ? 'hidden' : ''}`}>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`candle-overlay c${i + 1}`}>
                                        <div className="candle">
                                            <div className="smoke-particles">
                                                <div className="smoke"></div>
                                                <div className="smoke"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="final-ending-container mt-40">
                        <p className="typing-text-fast">{typedMsg2}</p>
                    </div>

                    <div className="final-nav-btngroup mt-60">
                        <button className="action-btn" onClick={() => navigate('/')}>
                            Back to Home ❤️🏠
                        </button>
                        <p className="final-thank-you">Thank you for being the most beautiful part of my life story. ✨</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiftPage;
