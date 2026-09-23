import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/fitnessData';

export const ValueProposition: React.FC = () => {
  return (
    <section id="amenities" className="py-5 py-lg-6" aria-labelledby="amenities-heading">
      <div className="container-xl">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            {/* Quiet text kicker */}
            <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Built Without Compromise
            </div>
            <h2 id="amenities-heading" className="section-title">
              Engineered Facilities for Maximum Physiological Return
            </h2>
            <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
              From calibrated Eleiko steel to clinical hydrotherapy plunge pools, every square meter of KINETIX is configured to optimize training output and accelerate athletic recovery.
            </p>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="row g-4">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            // First two cards take more width (col-lg-6) to create asymmetric layout
            const colClass = idx === 0 || idx === 1 ? 'col-lg-6' : 'col-md-6 col-lg-3';

            return (
              <div key={prop.id} className={colClass}>
                <div className="club-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    {/* Header: Icon & Category unboxed text */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: '46px',
                          height: '46px',
                          backgroundColor: 'var(--accent-light)',
                          color: 'var(--accent-primary)',
                          fontSize: '1.25rem'
                        }}
                      >
                        <i className={`bi ${prop.icon}`} aria-hidden="true" />
                      </div>
                      <span className="text-muted small fw-medium">
                        {prop.badge}
                      </span>
                    </div>

                    <h3 className="card-title fs-5 mb-2">
                      {prop.title}
                    </h3>

                    <p className="text-muted mb-4" style={{ fontSize: '0.925rem', lineHeight: 1.6 }}>
                      {prop.description}
                    </p>
                  </div>

                  {/* Clean unboxed footer metadata */}
                  <div className="pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border-hairline)', fontSize: '0.85rem' }}>
                    <span className="fw-semibold text-main">
                      {prop.stats}
                    </span>
                    <span className="text-muted d-inline-flex align-items-center gap-1">
                      <i className="bi bi-check2-circle text-success" aria-hidden="true" />
                      <span>Included</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
