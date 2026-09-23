import React, { useState, useEffect } from 'react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [interest, setInterest] = useState('both');
  const [claimed, setClaimed] = useState(false);
  const [passCode, setPassCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }

    const code = `PASS-${Math.floor(10000 + Math.random() * 90000)}`;
    setPassCode(code);
    setClaimed(true);
    setErrorMsg('');
  };

  return (
    <div 
      className="modal show d-block" 
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 1055 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-content-custom p-4">
          <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3" style={{ borderColor: 'var(--border-hairline)' }}>
            <div>
              <span className="badge text-bg-primary text-white text-uppercase fw-bold mb-1" style={{ fontSize: '0.7rem' }}>
                Complimentary Pass
              </span>
              <h3 className="fs-5 mb-0 font-display text-main">
                Claim 1-Day All-Access Pass
              </h3>
            </div>
            <button
              type="button"
              className="btn btn-sm text-muted fs-4 p-0 border-0"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>

          {!claimed ? (
            <form onSubmit={handleSubmit} noValidate>
              <p className="text-muted small mb-3">
                Experience full access to our Strength Arena, recovery plunge pools, sauna, and any group fitness class on your chosen day.
              </p>

              {errorMsg && (
                <div className="alert alert-danger py-2 small mb-3">
                  {errorMsg}
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="trial-name" className="form-label small fw-semibold text-main">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  id="trial-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="kinetix-input"
                  placeholder="e.g. Morgan Bailey"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="trial-email" className="form-label small fw-semibold text-main">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  id="trial-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="kinetix-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="trial-phone" className="form-label small fw-semibold text-main">
                  Phone Number
                </label>
                <input
                  id="trial-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="kinetix-input"
                  placeholder="+49 163 9653705"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="trial-date" className="form-label small fw-semibold text-main">
                  Preferred Visit Date
                </label>
                <input
                  id="trial-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="kinetix-input"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="trial-interest" className="form-label small fw-semibold text-main">
                  Primary Area of Interest
                </label>
                <select
                  id="trial-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="kinetix-input"
                >
                  <option value="both">Full Club & Classes</option>
                  <option value="strength">Olympic Barbells & Power Racks</option>
                  <option value="classes">Group Fitness (HIIT / Combat / Yoga)</option>
                  <option value="recovery">Contrast Therapy (Cold Plunge & Sauna)</option>
                </select>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary-kinetix w-50 justify-content-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary-kinetix w-50 justify-content-center"
                >
                  Issue Pass
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-3">
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  color: '#22c55e',
                  fontSize: '1.75rem'
                }}
              >
                <i className="bi bi-ticket-perforated-fill" aria-hidden="true" />
              </div>

              <h4 className="fs-5 fw-bold mb-2">Guest Pass Generated!</h4>
              <p className="text-muted small mb-3">
                Pass issued for <strong>{name}</strong> for <strong>{date}</strong>. A barcode pass has also been dispatched to <strong>{email}</strong>.
              </p>

              <div className="p-3 rounded-2 text-center small mb-3" style={{ backgroundColor: 'var(--bg-canvas)', border: '1px dashed var(--accent-primary)' }}>
                <div className="text-muted text-uppercase fw-bold mb-1" style={{ fontSize: '0.7rem' }}>Pass Access Code</div>
                <div className="font-mono fs-4 fw-bold text-main">{passCode}</div>
                <div className="text-muted mt-1" style={{ fontSize: '0.75rem' }}>Show this code at front desk (Torstraße 140)</div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="btn-primary-kinetix w-100 justify-content-center"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
