import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/Home';
import WishPage from './components/pages/WishPage';
import WishWall from './components/pages/WishWall';
import StoryPage from './components/pages/StoryPage';
import FinalWishPage from './components/pages/FinalWishPage';
import PromisesPage from './components/pages/PromisesPage';
import GiftPage from './components/pages/GiftPage';
import ScrollToTop from './components/ScrollToTop';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
    useEffect(() => {
        const createHeart = () => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        };

        const interval = setInterval(createHeart, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <BackgroundMusic />
            <div className="celebration-container">
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/wish" element={<WishPage />} />
                        <Route path="/wish-wall" element={<WishWall />} />
                        <Route path="/story" element={<StoryPage />} />
                        <Route path="/final-wish" element={<FinalWishPage />} />
                        <Route path="/promises" element={<PromisesPage />} />
                        <Route path="/gift" element={<GiftPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
