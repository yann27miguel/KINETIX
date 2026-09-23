import React from 'react';
import { TRAINERS } from '../data/fitnessData';
import { Trainer } from '../types';

interface TrainerProfilesProps {
  onSelectTrainer: (trainer: Trainer) => void;
}

export const TrainerProfiles: React.FC<TrainerProfilesProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-5 py-lg-6" aria-labelledby="trainers-heading">
      <div className="container-xl">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Master Coaching Staff
            </div>
            <h2 id="trainers-heading" className="section-title">
              Built by World-Class Practitioners
            </h2>
            <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
              Our coaches do not hand out generic spreadsheets. Every trainer at KINETIX is a career specialist certified in exercise physiology, neuromuscular mechanics, and performance periodization.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="col-md-6 col-lg-6">
              <article className="club-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  {/* Top trainer lockup */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    {/* Stylized trainer avatar container */}
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-3 font-display fw-bold text-white fs-4"
                      style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: trainer.accentColor,
                        flexShrink: 0
                      }}
                      aria-hidden="true"
                    >
                      {trainer.initials}
                    </div>

                    <div>
                      <h3 className="card-title fs-5 mb-1">
                        {trainer.name}
                      </h3>
                      <div className="text-muted small fw-semibold">
                        {trainer.role}
                      </div>
                      <div className="text-muted small mt-1">
                        <span className="tabular-nums fw-medium">{trainer.experienceYears} Years</span> Elite Experience
                      </div>
                    </div>
                  </div>

                  {/* Certifications (unboxed quiet metadata) */}
                  <div className="mb-3 p-2 rounded-2" style={{ backgroundColor: 'var(--bg-surface-elevated)' }}>
                    <div className="text-muted small fw-bold mb-1">Credentials & Certifications:</div>
                    <div className="d-flex flex-wrap gap-2 text-muted small">
                      {trainer.certifications.map((cert, i) => (
                        <React.Fragment key={cert}>
                          <span className="text-main fw-medium">{cert}</span>
                          {i < trainer.certifications.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                    {trainer.bio}
                  </p>

                  {/* Philosophy Quote */}
                  <blockquote 
                    className="p-3 rounded-2 fst-italic mb-3"
                    style={{ 
                      backgroundColor: 'var(--bg-canvas)',
                      borderLeft: `3px solid ${trainer.accentColor}`,
                      fontSize: '0.875rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    "{trainer.quote}"
                  </blockquote>

                  {/* Specialties List */}
                  <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                    <span className="text-muted small fw-bold me-1">Focus Areas:</span>
                    {trainer.specialties.map((spec, i) => (
                      <span key={spec} className="meta-item">
                        <span>{spec}</span>
                        {i < trainer.specialties.length - 1 && <span className="meta-separator" aria-hidden="true">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trainer Action Footer */}
                <div className="pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border-hairline)' }}>
                  <span className="text-muted small">
                    <i className="bi bi-clock me-1" aria-hidden="true" />
                    Accepting 1-on-1 Clients
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectTrainer(trainer)}
                    className="btn-secondary-kinetix py-2 px-3"
                    style={{ fontSize: '0.85rem', minHeight: '38px' }}
                  >
                    <i className="bi bi-calendar2-check" aria-hidden="true" />
                    <span>Book Assessment</span>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
