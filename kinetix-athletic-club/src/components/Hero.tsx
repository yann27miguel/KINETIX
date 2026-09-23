import React from 'react';
import { CLUB_METRICS } from '../data/fitnessData';

interface HeroProps {
  onOpenFreeTrial: () => void;
  onNavigateToClasses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenFreeTrial,
  onNavigateToClasses
}) => {
  return (
    <section className="py-5 py-lg-6 position-relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background ambient radial gradients */}
      <div 
        className="position-absolute top-0 start-50 translate-middle-x pointer-events-none"
        style={{
          width: '800px',
          height: '450px',
          background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
          zIndex: 0,
          opacity: 0.6
        }}
        aria-hidden="true"
      />

      <div className="container-xl position-relative" style={{ zIndex: 1 }}>
        <div className="row g-5 align-items-center">
          {/* Left Column: Core Value Proposition & Conversion Call to Action */}
          <div className="col-lg-7">
            {/* Quiet 1-line unboxed text kicker (no pill badge) */}
            <div className="d-flex align-items-center gap-2 mb-3 text-uppercase fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '0.08em', color: 'var(--accent-primary)' }}>
              <span>High-Performance Training</span>
              <span aria-hidden="true">·</span>
              <span>Torstraße 140, Berlin</span>
              <span aria-hidden="true">·</span>
              <span className="text-success d-inline-flex align-items-center gap-1">
                <span className="d-inline-block rounded-circle bg-success" style={{ width: '6px', height: '6px' }} />
                Open 24/7
              </span>
            </div>

            <h1 id="hero-heading" className="hero-title mb-3">
              Engineered Strength. <br className="d-none d-sm-inline" />
              Measurable Performance.
            </h1>

            <p className="text-lead mb-4" style={{ maxWidth: '640px' }}>
              Berlin’s premier athletic facility combines calibrated Olympic lifting arenas, 
              science-backed periodized classes, and contrast hydrotherapy. Designed for 
              athletes and dedicated individuals who refuse mediocre standards.
            </p>

            {/* Conversion CTA Group */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <button
                type="button"
                onClick={onOpenFreeTrial}
                className="btn-primary-kinetix shadow-sm"
              >
                <i className="bi bi-ticket-perforated-fill" aria-hidden="true" />
                <span>Claim Free 1-Day Pass</span>
              </button>

              <button
                type="button"
                onClick={onNavigateToClasses}
                className="btn-secondary-kinetix"
              >
                <i className="bi bi-calendar3" aria-hidden="true" />
                <span>View Class Schedule</span>
              </button>
            </div>

            {/* Trust and contact line with user's phone & email */}
            <div className="d-flex flex-wrap align-items-center gap-3 pt-2 text-muted" style={{ fontSize: '0.875rem' }}>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-shield-check text-success" aria-hidden="true" />
                <span>Zero initiation fee</span>
              </div>
              <span aria-hidden="true" className="text-secondary">·</span>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-telephone text-secondary" aria-hidden="true" />
                <a href="tel:+491639653705" className="text-decoration-none text-reset fw-medium">
                  +49 163 9653705
                </a>
              </div>
              <span aria-hidden="true" className="text-secondary">·</span>
              <div className="d-flex align-items-center gap-1">
                <i className="bi bi-envelope text-secondary" aria-hidden="true" />
                <a href="mailto:choupoyann76@gmail.com" className="text-decoration-none text-reset fw-medium">
                  choupoyann76@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant Visual Anchor (Interactive Club Showcase Card) */}
          <div className="col-lg-5">
            <div className="club-card p-4 position-relative overflow-hidden">
              {/* Architectural gym preview banner SVG/CSS */}
              <div 
                className="rounded-3 position-relative p-4 mb-3 overflow-hidden d-flex flex-column justify-content-between"
                style={{
                  minHeight: '260px',
                  background: 'linear-gradient(135deg, #182030 0%, #0d121c 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff'
                }}
              >
                {/* Visual grid texture */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}
                  aria-hidden="true"
                />

                {/* Top status bar inside visual */}
                <div className="d-flex align-items-center justify-content-between position-relative z-1">
                  <div className="d-flex align-items-center gap-2">
                    <span 
                      className="d-inline-block rounded-circle bg-success"
                      style={{ width: '8px', height: '8px', boxShadow: '0 0 10px #22c55e' }}
                    />
                    <span className="small text-white-50 fw-semibold text-uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                      Main Strength Arena
                    </span>
                  </div>
                  <span className="small bg-black bg-opacity-50 text-white-50 px-2 py-1 rounded" style={{ fontSize: '0.75rem' }}>
                    Live Capacity: 32%
                  </span>
                </div>

                {/* Center graphic motif: barbell silhouette & pulse */}
                <div className="text-center position-relative z-1 my-3">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle"
                    style={{ background: 'rgba(234, 88, 12, 0.15)', border: '1px solid rgba(234, 88, 12, 0.3)' }}
                  >
                    <i className="bi bi-activity text-warning fs-1" aria-hidden="true" />
                  </div>
                  <div className="mt-2 font-display fw-bold fs-5 text-white">
                    Next Session: Barbell Strength Protocol
                  </div>
                  <div className="text-white-50 small">
                    Coached by Marcus Stone · 06:30 AM Tomorrow
                  </div>
                </div>

                {/* Bottom specs preview */}
                <div className="d-flex align-items-center justify-content-between position-relative z-1 border-top border-white border-opacity-10 pt-2 text-white-50 small">
                  <span>8 Olympic Rigs Available</span>
                  <span>4°C Plunge Ready</span>
                </div>
              </div>

              {/* Quick Facility Highlights */}
              <div className="row g-2 text-center">
                <div className="col-4">
                  <div className="p-2 rounded-2" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
                    <div className="fw-bold font-display" style={{ color: 'var(--accent-primary)' }}>Eleiko</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>Olympic Rigs</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded-2" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
                    <div className="fw-bold font-display" style={{ color: 'var(--accent-primary)' }}>4°C / 85°C</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>Contrast Spa</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 rounded-2" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
                    <div className="fw-bold font-display text-success">24/7</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>Keyless Entry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Rigor: Claim-to-Proof Adjacency Row */}
        <div className="mt-5 pt-4 border-top" style={{ borderColor: 'var(--border-hairline)' }}>
          <div className="row g-4 text-center text-sm-start">
            {CLUB_METRICS.map((metric) => (
              <div key={metric.label} className="col-6 col-md-3">
                <div className="font-display fw-bolder fs-2 tabular-nums" style={{ color: 'var(--accent-primary)' }}>
                  {metric.value}
                </div>
                <div className="fw-semibold" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                  {metric.label}
                </div>
                <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
