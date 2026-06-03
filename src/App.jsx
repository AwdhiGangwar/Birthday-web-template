/**
 * MAIN APP COMPONENT
 * Root component managing all screen states and navigation
 */

import React, { useState } from 'react';
import {
  IntroScreen,
  ProfileSelector,
  Navbar,
  HeroBanner,
  ContentRow,
  Modal,
  SurpriseReveal,
  Footer,
} from './components';
import { getSectionsForProfile } from './data';

import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro'); // intro | profile | home
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIntroComplete = () => {
    setCurrentScreen('profile');
  };

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
    setSelectedCard(null);
    setIsModalOpen(false);
    setCurrentScreen('home');
    window.scrollTo(0, 0);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    setCurrentScreen('profile');
    setSelectedProfile(null);
    setIsModalOpen(false);
    setSelectedCard(null);
    window.scrollTo(0, 0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  if (currentScreen === 'intro') {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  if (currentScreen === 'profile') {
    return <ProfileSelector onSelectProfile={handleSelectProfile} />;
  }

  const sections = selectedProfile
  ? getSectionsForProfile(selectedProfile)
  : [];

  return (
    <div className="min-h-screen bg-netflix-dark text-white">
      <Navbar onLogout={handleLogout} selectedProfile={selectedProfile} />

      <main className="pt-16 md:pt-20">
        <HeroBanner
          selectedProfile={selectedProfile}
          onPlayClick={handleCardClick}
        />

        <div className="pt-8 md:pt-16 pb-12 md:pb-20">
          {sections.map((section) => (
            <ContentRow
              key={section.id}
              section={section}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        <SurpriseReveal />
        <Footer />
      </main>

      <Modal
        card={selectedCard}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;