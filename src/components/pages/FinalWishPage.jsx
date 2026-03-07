import React from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import './FinalWishPage.css';

const FinalWishPage = () => {
    const navigate = useNavigate();
    const { width, height } = useWindowSize();

    const paragraphs = [
        "Wish You Many More Happy Birthday, Vaishu! 🎉🎂",
        "Heyy Vaishu!! Happy Birthday dii 🥰💖",
        "Indha naal romba special… not just for you, but for everyone who has you in their life. Because nee irukardhu itself oru blessing 🌸✨",
        "Un life la enna struggle, enna pain vanthalum… always keep smiling 😊 because un smile ku apdi oru power iruku — it heals everyone around you 💫💓",
        "Unna describe panna words pathadhu… nee oru friend ah irundhaalum, oru lover ah irundhaalum… nee always different ah irupae 💕 Nee katra care, nee pesura words, nee kudukura love ellameyy feels like pure magic 🪄❤️",
        "So, on this birthday… en wish enna na, indha year la nee dream pannura ellam, nee hard work panra ellam, success ah convert aaganum 🚀🌟",
        "Nee santhoshama irundhaa dhaan, unna pudichavanga ellarum santhoshama irupaanga 💖 So never ever stop smiling 😊✨",
        "Namba ellarum expect panna mathiri nee vera level height ku ponaalum, nee irukkura simplicity and purity ah vida koodadhu 🤍🌼",
        "You are not just my person, Vaishu… you are my happiness, my strength, my everything 💞🔥",
        "So today, just forget all sorrows and celebrate YOU!! 🎊🥳",
        "Once again wishing you a very, very Happy Birthday, Vaishu!! 🎂💝",
        "May this year be the most beautiful chapter of your life 📖✨",
        "And may it give you endless joy, strong health, and the purest form of love you truly deserve 💗🌈"
    ];

    return (
        <div className="final-wish-container page-content">
            <Confetti
                width={width}
                height={height}
                recycle={true}
                numberOfPieces={150}
                gravity={0.05}
                colors={['#ff4081', '#7c4dff', '#ff80ab', '#b39ddb']}
            />

            <div className="message-wrapper glass-card-romantic">
                <div className="animated-content">
                    {paragraphs.map((text, index) => (
                        <p
                            key={index}
                            className={`final-paragraph animate-pop ${index === 0 ? 'title-para' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {text}
                        </p>
                    ))}
                </div>

                <div className="final-actions">
                    <button className="action-btn" onClick={() => navigate('/story')}>
                        Back to Story 📖
                    </button>
                    <button className="action-btn" onClick={() => navigate('/promises')}>
                        One Last Thing For You 💌
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinalWishPage;
