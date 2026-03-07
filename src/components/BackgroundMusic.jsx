import React, { useState, useEffect, useRef } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const attemptPlay = () => {
            audio.play()
                .catch(error => {
                    console.error("Autoplay thwarted", error);
                    // Standard browser behavior: wait for user interaction
                    document.addEventListener('click', startOnFirstClick, { once: true });
                });
        };

        const startOnFirstClick = () => {
            audio.play()
                .catch(err => console.error("Play failed on click", err));
        };

        attemptPlay();

        return () => {
            document.removeEventListener('click', startOnFirstClick);
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="music-control">
            <audio
                ref={audioRef}
                src="/song.mpeg"
                loop
                autoPlay
            />
            <button
                onClick={toggleMute}
                className={`mute-button ${isMuted ? 'muted' : ''}`}
                title={isMuted ? "Unmute" : "Mute"}
            >
                {isMuted ? '🔇' : '🔊'}
            </button>
        </div>
    );
};

export default BackgroundMusic;
