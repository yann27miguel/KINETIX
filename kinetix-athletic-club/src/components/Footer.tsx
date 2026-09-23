import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-top py-5" style={{ backgroundColor: 'var(--bg-canvas)', borderColor: 'var(--border-hairline)' }} role="contentinfo">
      <div className="container-xl">
        <div className="row g-4 justify-content-between mb-5">
          {/* Brand & Mission column */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span 
                className="d-inline-flex align-items-center justify-content-center text-white rounded-2"
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: 'var(--accent-primary)',
                  fontWeight: 800,
                  fontSize: '16px',
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
            </div>

            <p className="text-muted small mb-3" style={{ maxWidth: '340px', lineHeight: 1.6 }}>
              KINETIX Athletic Club is an elite high-performance training ground engineered for barbell strength, physiological conditioning, and contrast hydrotherapy.
            </p>

            <div className="d-flex flex-column gap-1 text-muted small">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt text-secondary" aria-hidden="true" />
                <span>Torstraße 140, 10119 Berlin, Germany</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone text-secondary" aria-hidden="true" />
                <a href="tel:+491639653705" className="text-decoration-none text-reset">
                  +49 163 9653705
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope text-secondary" aria-hidden="true" />
                <a href="mailto:choupoyann76@gmail.com" className="text-decoration-none text-reset">
                  choupoyann76@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Column */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="text-main fw-bold font-display small text-uppercase mb-3 tracking-wider">
              Navigation
            </div>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li><a href="#classes" className="text-decoration-none text-reset hover-text-main">Class Schedule</a></li>
              <li><a href="#trainers" className="text-decoration-none text-reset hover-text-main">Master Coaches</a></li>
              <li><a href="#amenities" className="text-decoration-none text-reset hover-text-main">Club Facilities</a></li>
              <li><a href="#memberships" className="text-decoration-none text-reset hover-text-main">Membership Plans</a></li>
              <li><a href="#testimonials" className="text-decoration-none text-reset hover-text-main">Member Outcomes</a></li>
              <li><a href="#contact" className="text-decoration-none text-reset hover-text-main">Concierge & FAQ</a></li>
            </ul>
          </div>

          {/* Training Disciplines */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="text-main fw-bold font-display small text-uppercase mb-3 tracking-wider">
              Disciplines
            </div>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted mb-0">
              <li><span>Barbell Strength</span></li>
              <li><span>Metabolic HIIT</span></li>
              <li><span>HYROX Engine</span></li>
              <li><span>Mobility Lab</span></li>
              <li><span>Combat Striking</span></li>
              <li><span>Cold Hydrotherapy</span></li>
            </ul>
          </div>

          {/* Operating Hours & Access */}
          <div className="col-md-6 col-lg-3">
            <div className="text-main fw-bold font-display small text-uppercase mb-3 tracking-wider">
              Facility Hours
            </div>
            <div className="p-3 rounded-2 text-muted small" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <div className="d-flex justify-content-between mb-1">
                <span>Member Access:</span>
                <strong className="text-success">24/7 / 365 Days</strong>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span>Staffed Hours:</span>
                <span className="text-main">06:00 – 22:00</span>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span>Recovery Spa:</span>
                <span className="text-main">06:30 – 21:30</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Weekend Staff:</span>
                <span className="text-main">08:00 – 20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet copyright & legal notices */}
        <div className="pt-4 border-top d-flex flex-wrap align-items-center justify-content-between gap-3 text-muted small" style={{ borderColor: 'var(--border-hairline)' }}>
          <div>
            © {new Date().getFullYear()} KINETIX Athletic Club GmbH. All rights reserved.
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href="#contact" className="text-decoration-none text-reset">Terms of Membership</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="text-decoration-none text-reset">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="text-decoration-none text-reset">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
