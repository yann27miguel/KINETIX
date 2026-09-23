import React, { useState, useEffect } from 'react';
import { FitnessClass } from '../types';

interface BookingModalProps {
  cls: FitnessClass | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ cls, onClose }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cls) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) {
      setErrorMsg('Please enter your name and email address to reserve.');
      return;
    }

    const ref = `RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsBooked(true);
  };

  return (
    <div 
      className="modal show d-block" 
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1055 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-content-custom p-4">
          <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3" style={{ borderColor: 'var(--border-hairline)' }}>
            <div>
              <span className="badge text-bg-warning text-dark text-uppercase fw-bold mb-1" style={{ fontSize: '0.7rem' }}>
                Class Reservation
              </span>
              <h3 className="fs-5 mb-0 font-display text-main">
                {cls.name}
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

          {!isBooked ? (
            <form onSubmit={handleBooking} noValidate>
              {/* Class summary badge */}
              <div className="p-3 rounded-3 mb-3" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">Time & Day:</span>
                  <strong className="text-main small text-capitalize">{cls.day} · {cls.time}</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">Coach:</span>
                  <strong className="text-main small">{cls.trainerName}</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">Location:</span>
                  <strong className="text-main small">{cls.studioRoom}</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted small">Available Capacity:</span>
                  <span className="badge bg-success-subtle text-success small">{cls.spotsLeft} spots remaining</span>
                </div>
              </div>

              {errorMsg && (
                <div className="alert alert-danger py-2 small mb-3">
                  {errorMsg}
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="book-name" className="form-label small fw-semibold text-main">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  id="book-name"
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="kinetix-input"
                  placeholder="e.g. Taylor Jenkins"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="book-email" className="form-label small fw-semibold text-main">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  id="book-email"
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="kinetix-input"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="book-phone" className="form-label small fw-semibold text-main">
                  Mobile Phone (SMS reminder)
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="kinetix-input"
                  placeholder="+49 163 9653705"
                />
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
                  Confirm Spot
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
                <i className="bi bi-check-circle-fill" aria-hidden="true" />
              </div>

              <h4 className="fs-5 fw-bold mb-2">Spot Confirmed!</h4>
              <p className="text-muted small mb-3">
                We've reserved your spot for <strong>{cls.name}</strong>. Confirmation code: <strong className="font-mono">{bookingRef}</strong>.
              </p>

              <div className="p-3 rounded-2 text-start small mb-3" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                <div className="mb-1"><strong>When:</strong> {cls.time} ({cls.day})</div>
                <div className="mb-1"><strong>Coach:</strong> {cls.trainerName}</div>
                <div><strong>Where:</strong> {cls.studioRoom} · Torstraße 140</div>
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
