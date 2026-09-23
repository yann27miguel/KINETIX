/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ClassSchedule } from './components/ClassSchedule';
import { TrainerProfiles } from './components/TrainerProfiles';
import { MembershipSignup } from './components/MembershipSignup';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FreeTrialModal } from './components/FreeTrialModal';
import { FitnessClass, Trainer } from './types';

export default function App() {
  // Dark mode state: default to dark mode for modern high-performance athletic feel
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('kinetix_theme');
    if (saved) return saved === 'dark';
    return true;
  });

  // Modal states
  const [freeTrialOpen, setFreeTrialOpen] = useState(false);
  const [selectedClassForBooking, setSelectedClassForBooking] = useState<FitnessClass | null>(null);

  // Sync theme to DOM and localStorage
  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('kinetix_theme', theme);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSelectTrainer = (trainer: Trainer) => {
    // Scroll to contact form with topic pre-focused or alert to book
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToClasses = () => {
    const classesElem = document.getElementById('classes');
    if (classesElem) {
      classesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Skip to Content for screen reader accessibility */}
      <a 
        href="#main-content" 
        className="visually-hidden-focusable p-3 bg-dark text-white position-absolute top-0 start-0 z-3"
      >
        Skip to main content
      </a>

      {/* Top Bar / Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenFreeTrial={() => setFreeTrialOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow-1" role="main">
        {/* Hero Section */}
        <Hero
          onOpenFreeTrial={() => setFreeTrialOpen(true)}
          onNavigateToClasses={handleNavigateToClasses}
        />

        <hr className="hairline-divider" />

        {/* Value Proposition & Bento Amenities */}
        <ValueProposition />

        <hr className="hairline-divider" />

        {/* Interactive Class Schedules */}
        <ClassSchedule
          onSelectClass={(cls) => setSelectedClassForBooking(cls)}
        />

        <hr className="hairline-divider" />

        {/* Certified Trainer Profiles */}
        <TrainerProfiles
          onSelectTrainer={handleSelectTrainer}
        />

        <hr className="hairline-divider" />

        {/* Membership Signup Flow */}
        <MembershipSignup />

        <hr className="hairline-divider" />

        {/* Member Testimonials & Documented Outcomes */}
        <Testimonials />

        <hr className="hairline-divider" />

        {/* Direct Contact, Concierge & FAQ */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        cls={selectedClassForBooking}
        onClose={() => setSelectedClassForBooking(null)}
      />

      <FreeTrialModal
        isOpen={freeTrialOpen}
        onClose={() => setFreeTrialOpen(false)}
      />
    </div>
  );
}
