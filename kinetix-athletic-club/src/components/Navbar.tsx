import React, { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenFreeTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenFreeTrial
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Facility', href: '#amenities' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky-top navbar-custom py-2" role="banner">
      <div className="container-xl d-flex align-items-center justify-content-between">
        {/* Zone 1: Single text wordmark per top bar contract */}
        <a 
          href="#" 
          className="text-decoration-none d-flex align-items-center gap-2"
          aria-label="KINETIX Athletic Club Home"
        >
          <span 
            className="d-inline-flex align-items-center justify-content-center text-white rounded-2"
            style={{ 
              width: '34px', 
              height: '34px', 
              backgroundColor: 'var(--accent-primary)',
              fontWeight: 800,
              fontSize: '18px',
              fontFamily: 'var(--font-display)'
            }}
            aria-hidden="true"
          >
            K
          </span>
          <span 
            className="font-display fs-4 fw-bolder text-uppercase tracking-tight"
            style={{ color: 'var(--text-main)', letterSpacing: '-0.03em' }}
          >
            KINETIX
          </span>
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav 
          className="d-none d-lg-flex align-items-center gap-4"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-decoration-none fw-semibold transition-colors"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.925rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions (Dark Mode Toggle + Download ZIP + Primary CTA) */}
        <div className="d-flex align-items-center gap-2">
          {/* Download Project ZIP */}
          <a
            href="/kinetix-athletic-club.zip"
            download="kinetix-athletic-club.zip"
            className="btn btn-sm d-inline-flex align-items-center justify-content-center gap-1 text-decoration-none"
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-main)',
              border: '1px solid var(--border-hairline)',
              height: '42px',
              padding: '0 12px',
              borderRadius: '8px',
              fontSize: '0.8125rem',
              fontWeight: 600
            }}
            title="Download Source Code ZIP"
            aria-label="Download Source Code ZIP"
          >
            <i className="bi bi-file-earmark-zip-fill text-warning" aria-hidden="true" />
            <span className="d-none d-md-inline">Download ZIP</span>
          </a>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="btn btn-sm d-inline-flex align-items-center justify-content-center"
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-main)',
              border: '1px solid var(--border-hairline)',
              width: '42px',
              height: '42px',
              borderRadius: '8px'
            }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i 
              className={`bi ${darkMode ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill'}`} 
              style={{ fontSize: '1.05rem' }} 
              aria-hidden="true"
            />
          </button>

          {/* Primary CTA button */}
          <button
            type="button"
            onClick={onOpenFreeTrial}
            className="btn-primary-kinetix d-none d-sm-inline-flex"
            style={{ fontSize: '0.875rem' }}
          >
            <i className="bi bi-ticket-perforated" aria-hidden="true" />
            <span>Free Day Pass</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="btn btn-sm d-lg-none d-inline-flex align-items-center justify-content-center"
            style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-main)',
              border: '1px solid var(--border-hairline)',
              width: '42px',
              height: '42px',
              borderRadius: '8px'
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-5`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav"
          className="d-lg-none border-top mt-2 pt-3 pb-3 px-3 animate-fade-in"
          style={{ 
            backgroundColor: 'var(--bg-surface)',
            borderTopColor: 'var(--border-hairline)'
          }}
        >
          <div className="d-flex flex-column gap-2 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 px-3 rounded-2 text-decoration-none fw-semibold"
                style={{
                  color: 'var(--text-main)',
                  backgroundColor: 'transparent',
                  fontSize: '1rem'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="d-flex flex-column gap-2 pt-2 border-top" style={{ borderColor: 'var(--border-hairline)' }}>
            <a
              href="/kinetix-athletic-club.zip"
              download="kinetix-athletic-club.zip"
              className="btn-secondary-kinetix w-100 justify-content-center text-decoration-none"
            >
              <i className="bi bi-file-earmark-zip-fill text-warning" aria-hidden="true" />
              <span>Download Project ZIP</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreeTrial();
              }}
              className="btn-primary-kinetix w-100 justify-content-center"
            >
              <i className="bi bi-ticket-perforated" aria-hidden="true" />
              <span>Claim Free 1-Day Pass</span>
            </button>
            <a
              href="tel:+491639653705"
              className="btn-secondary-kinetix w-100 justify-content-center text-decoration-none"
            >
              <i className="bi bi-telephone-fill" aria-hidden="true" />
              <span>+49 163 9653705</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
