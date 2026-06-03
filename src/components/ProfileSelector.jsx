/**
 * PROFILE SELECTOR COMPONENT
 * Netflix-style "Who's Watching?" screen with profile cards
 */

import React, { useState } from 'react';
import { PROFILES } from '../data';

export const ProfileSelector = ({ onSelectProfile }) => {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (id) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };

    const handleSelectProfile = (profile) => {
        setSelectedProfile(profile.id);
        setIsTransitioning(true);

        setTimeout(() => {
            onSelectProfile(profile);
        }, 600);
    };

    return (
        <div
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="min-h-screen bg-netflix-dark flex flex-col items-center justify-center px-4 py-8"
        >
            {/* Header */}
            <div
                className={`mb-12 md:mb-16 text-center animate-fadeIn ${isTransitioning ? 'opacity-0' : 'opacity-100'
                    } transition-opacity duration-500`}
            >
                <h1
                    className="text-3xl md:text-7xl font-black text-white mb-2"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                    Who's Watching?
                </h1>
                <p className="text-gray-400 text-sm md:text-base mt-4">
                    Select a profile to continue
                </p>
            </div>

            {/* Profiles Grid */}
            <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-14 w-full max-w-2xl ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    } transition-all duration-500`}
            >
                {PROFILES.map((profile) => (
                        <div key={profile.id} className="flex flex-col items-center group">
                        <button
                            onClick={() => handleSelectProfile(profile)}
                            className={`relative aspect-square w-full rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105 focus:outline-none ${selectedProfile === profile.id
                                    ? 'ring-4 ring-netflix-red scale-105'
                                    : 'hover:ring-2 hover:ring-white'
                                }`}
                        >
                            <div className="absolute inset-0 overflow-hidden bg-netflix-darkAlt flex items-center justify-center">
                                {!imageErrors[profile.id] ? (
                                    <img
                                        src={profile.image}
                                        alt={profile.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={() => handleImageError(profile.id)}
                                    />
                                ) : (
                                    <div className="text-center">
                                        <span className="text-4xl block mb-2">{profile.avatar || '👤'}</span>
                                        <p className="text-[10px] text-gray-500 px-2">Missing: {profile.image}</p>
                                    </div>
                                )}
                            </div>

                            {selectedProfile === profile.id && (
                                <div className="absolute inset-0 bg-netflix-red/20 animate-pulse" />
                            )}
                        </button>
                        <h3 className="mt-3 text-gray-400 group-hover:text-white text-sm md:text-lg font-medium text-center transition-colors">
                            {profile.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSelector;