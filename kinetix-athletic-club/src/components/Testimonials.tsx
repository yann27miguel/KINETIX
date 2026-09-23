import React from 'react';
import { TESTIMONIALS } from '../data/fitnessData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-5 py-lg-6" aria-labelledby="testimonials-heading">
      <div className="container-xl">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Documented Transformations
            </div>
            <h2 id="testimonials-heading" className="section-title">
              Tangible Outcomes. Zero Fluff.
            </h2>
            <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
              Hear from competitive runners, busy directors, and fitness enthusiasts who traded crowded commercial gyms for structured athletic progression.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="col-lg-4">
              <article className="club-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  {/* Star Rating */}
                  <div className="d-flex align-items-center gap-1 mb-3 text-warning" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill small" aria-hidden="true" />
                    ))}
                    <span className="text-muted small ms-2 fw-medium">Verified Member</span>
                  </div>

                  {/* Concrete Quantified Result Badge/Highlight */}
                  <div 
                    className="p-3 rounded-2 mb-3"
                    style={{ 
                      backgroundColor: 'var(--bg-canvas)',
                      borderLeft: '3px solid var(--accent-primary)'
                    }}
                  >
                    <div className="text-muted small fw-bold text-uppercase" style={{ fontSize: '0.725rem', letterSpacing: '0.05em' }}>
                      Key Milestone Achieved:
                    </div>
                    <div className="fw-bold text-main mt-1" style={{ fontSize: '0.925rem' }}>
                      {t.result}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-muted small mb-4" style={{ lineHeight: 1.65 }}>
                    "{t.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="d-flex align-items-center gap-3 pt-3 border-top" style={{ borderColor: 'var(--border-hairline)' }}>
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: t.avatarBg,
                      fontSize: '0.95rem',
                      flexShrink: 0
                    }}
                    aria-hidden="true"
                  >
                    {t.avatarInitials}
                  </div>

                  <div>
                    <div className="fw-bold text-main" style={{ fontSize: '0.95rem' }}>
                      {t.name}
                    </div>
                    <div className="text-muted small">
                      {t.role}
                    </div>
                    <div className="text-muted small" style={{ fontSize: '0.75rem' }}>
                      {t.membershipPlan} · {t.duration}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
