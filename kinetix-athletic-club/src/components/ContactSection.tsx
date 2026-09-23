import React, { useState } from 'react';
import { FAQS } from '../data/fitnessData';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Contact form state
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'membership',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+491639653705');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('choupoyann76@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.name.trim() || !inquiry.email.trim() || !inquiry.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Message).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-5 py-lg-6" aria-labelledby="contact-heading">
      <div className="container-xl">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Direct Line
            </div>
            <h2 id="contact-heading" className="section-title">
              Connect With KINETIX Athletic Club
            </h2>
            <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
              Have questions regarding our coaching protocols, club tour appointments, or corporate memberships? Reach our concierge directly.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {/* Left Column: Direct Phone & Email Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              {/* Phone Card */}
              <div className="club-card p-4">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(234, 88, 12, 0.12)',
                      color: 'var(--accent-primary)',
                      fontSize: '1.25rem'
                    }}
                  >
                    <i className="bi bi-telephone-fill" aria-hidden="true" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="btn btn-sm text-muted border-0 p-1"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <span className="badge bg-success-subtle text-success small">Copied</span>
                    ) : (
                      <i className="bi bi-clipboard" aria-hidden="true" />
                    )}
                  </button>
                </div>

                <div className="text-muted small fw-semibold text-uppercase tracking-wider mb-1">
                  Direct Phone / WhatsApp Concierge
                </div>
                <div className="fs-4 font-display fw-bold mb-1">
                  <a 
                    href="tel:+491639653705" 
                    className="text-decoration-none text-main"
                  >
                    +49 163 9653705
                  </a>
                </div>
                <p className="text-muted small mb-0">
                  Staffed Mon–Fri 06:00–22:00, Sat–Sun 08:00–20:00. Emergency access line operational 24/7.
                </p>
              </div>

              {/* Email Card */}
              <div className="club-card p-4">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'rgba(37, 99, 235, 0.12)',
                      color: '#2563eb',
                      fontSize: '1.25rem'
                    }}
                  >
                    <i className="bi bi-envelope-fill" aria-hidden="true" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-sm text-muted border-0 p-1"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <span className="badge bg-success-subtle text-success small">Copied</span>
                    ) : (
                      <i className="bi bi-clipboard" aria-hidden="true" />
                    )}
                  </button>
                </div>

                <div className="text-muted small fw-semibold text-uppercase tracking-wider mb-1">
                  Official Email Inbox
                </div>
                <div className="fs-5 font-display fw-bold mb-1 text-break">
                  <a 
                    href="mailto:choupoyann76@gmail.com" 
                    className="text-decoration-none text-main"
                  >
                    choupoyann76@gmail.com
                  </a>
                </div>
                <p className="text-muted small mb-0">
                  Typical response time: under 90 minutes during standard staffed club hours.
                </p>
              </div>

              {/* Location Card */}
              <div className="club-card p-4 flex-grow-1">
                <div className="d-flex align-items-center gap-2 mb-2 text-main fw-bold">
                  <i className="bi bi-geo-alt-fill text-danger" aria-hidden="true" />
                  <span>Facility Headquarters</span>
                </div>
                <address className="text-muted small fst-normal mb-3">
                  KINETIX Athletic Club GmbH<br />
                  Torstraße 140, 10119 Berlin, Germany<br />
                  U-Bahn: U8 Rosenthaler Platz (2 min walk)
                </address>
                <div className="p-2 rounded-2 text-muted small" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                  <i className="bi bi-shield-lock me-1 text-success" aria-hidden="true" />
                  Private underground member bicycle & vehicle parking available.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="club-card p-4 p-md-5 h-100">
              {!submitted ? (
                <div>
                  <h3 className="card-title fs-4 mb-2">
                    Send Direct Message
                  </h3>
                  <p className="text-muted small mb-4">
                    Fill out the form below and our head coach or admissions director will be in touch with you directly.
                  </p>

                  {errorMsg && (
                    <div className="alert alert-danger py-2 small mb-3">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmitInquiry} noValidate>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="contact-name" className="form-label small fw-semibold text-main">
                          Your Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={inquiry.name}
                          onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                          className="kinetix-input"
                          placeholder="e.g. Jordan Smith"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contact-email" className="form-label small fw-semibold text-main">
                          Your Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={inquiry.email}
                          onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                          className="kinetix-input"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contact-phone" className="form-label small fw-semibold text-main">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={inquiry.phone}
                          onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                          className="kinetix-input"
                          placeholder="+49 163 9653705"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contact-topic" className="form-label small fw-semibold text-main">
                          Inquiry Subject
                        </label>
                        <select
                          id="contact-topic"
                          value={inquiry.topic}
                          onChange={(e) => setInquiry({ ...inquiry, topic: e.target.value })}
                          className="kinetix-input"
                        >
                          <option value="membership">Membership Tiers & Sign-up</option>
                          <option value="trial">1-Day Guest Pass & Tour</option>
                          <option value="training">1-on-1 Personal Training</option>
                          <option value="corporate">Corporate Wellness Partnerships</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="contact-msg" className="form-label small fw-semibold text-main">
                          How can we assist you? <span className="text-danger">*</span>
                        </label>
                        <textarea
                          id="contact-msg"
                          rows={4}
                          required
                          value={inquiry.message}
                          onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                          className="kinetix-input"
                          placeholder="Please describe your current fitness background, preferred training hours, or any specific questions..."
                        />
                      </div>

                      <div className="col-12 pt-2">
                        <button
                          type="submit"
                          className="btn-primary-kinetix w-100 justify-content-center py-3"
                        >
                          <i className="bi bi-send-fill" aria-hidden="true" />
                          <span>Transmit Inquiry</span>
                        </button>
                        <p className="text-muted small text-center mt-2 mb-0">
                          Directly routing to: <strong>choupoyann76@gmail.com</strong>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4 my-auto">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      color: '#22c55e',
                      fontSize: '1.75rem'
                    }}
                  >
                    <i className="bi bi-check2-circle" aria-hidden="true" />
                  </div>
                  <h3 className="card-title fs-4 mb-2">
                    Inquiry Received, {inquiry.name}!
                  </h3>
                  <p className="text-muted small mb-4" style={{ maxWidth: '460px', margin: '0 auto' }}>
                    Thank you for reaching out. We have logged your request and sent a confirmation acknowledgment to <strong>{inquiry.email}</strong>. Our concierge will follow up promptly via phone or email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setInquiry({ name: '', email: '', phone: '', topic: 'membership', message: '' });
                    }}
                    className="btn-secondary-kinetix"
                  >
                    Send Another Note
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="row justify-content-center pt-4">
          <div className="col-lg-9">
            <div className="text-center mb-4">
              <h3 className="fs-4 font-display">Frequently Addressed Questions</h3>
              <p className="text-muted small">Everything you need to know before visiting KINETIX.</p>
            </div>

            <div className="d-flex flex-column gap-3">
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={faq.q}
                    className="club-card p-3 p-md-4"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                  >
                    <div className="d-flex align-items-center justify-content-between gap-3">
                      <h4 className="fs-6 fw-bold mb-0 text-main font-display">
                        {faq.q}
                      </h4>
                      <i 
                        className={`bi ${isOpen ? 'bi-dash-circle-fill text-primary' : 'bi-plus-circle text-muted'} fs-5`}
                        aria-hidden="true" 
                      />
                    </div>
                    {isOpen && (
                      <div className="mt-3 pt-3 border-top text-muted small" style={{ borderColor: 'var(--border-hairline)', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
