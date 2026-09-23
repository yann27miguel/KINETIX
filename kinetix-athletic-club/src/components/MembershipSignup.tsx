import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/fitnessData';
import { MembershipPlan } from '../types';

interface MembershipSignupProps {
  preselectedPlanId?: string;
}

export const MembershipSignup: React.FC<MembershipSignupProps> = ({ preselectedPlanId }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlanId, setSelectedPlanId] = useState<string>(preselectedPlanId || 'all-access');
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    fitnessGoal: 'strength',
    emergencyContact: '',
    paymentMethod: 'sepa',
    agreeTerms: true
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [membershipId, setMembershipId] = useState('');
  const [formError, setFormError] = useState('');

  const currentPlan = MEMBERSHIP_PLANS.find((p) => p.id === selectedPlanId) || MEMBERSHIP_PLANS[1];

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlanId(plan.id);
    // Smooth scroll down to the signup form
    const formElem = document.getElementById('signup-form-card');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in all required fields (Name, Email, and Phone Number).');
      return;
    }

    setFormError('');
    // Generate simulated KINETIX membership ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `KTX-${new Date().getFullYear()}-${randomNum}`;
    setMembershipId(newId);
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      startDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      fitnessGoal: 'strength',
      emergencyContact: '',
      paymentMethod: 'sepa',
      agreeTerms: true
    });
  };

  return (
    <section id="memberships" className="py-5 py-lg-6" aria-labelledby="memberships-heading">
      <div className="container-xl">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Transparent Investment
            </div>
            <h2 id="memberships-heading" className="section-title">
              Flexible Memberships. Zero Hidden Surcharges.
            </h2>
            <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
              No cancellation traps, no annual equipment maintenance fees. Upgrade, pause, or switch plans anytime with our self-service member portal.
            </p>

            {/* Billing Toggle Switch */}
            <div className="d-inline-flex align-items-center gap-3 p-1 rounded-pill mt-4" style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--border-hairline)' }}>
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition-all ${!isAnnual ? 'bg-white text-dark shadow-sm' : 'text-muted'}`}
                style={{ fontSize: '0.875rem' }}
              >
                Monthly Flexible
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold d-inline-flex align-items-center gap-1 transition-all ${isAnnual ? 'bg-white text-dark shadow-sm' : 'text-muted'}`}
                style={{ fontSize: '0.875rem' }}
              >
                <span>Annual Commitment</span>
                <span className="badge rounded-pill text-white" style={{ backgroundColor: 'var(--accent-primary)', fontSize: '0.7rem' }}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="row g-4 align-items-stretch mb-5">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <div key={plan.id} className="col-lg-4">
                <div 
                  className={`club-card p-4 h-100 d-flex flex-column justify-content-between position-relative ${plan.popular ? 'border-primary' : ''}`}
                  style={{
                    borderColor: plan.popular ? 'var(--accent-primary)' : undefined,
                    boxShadow: plan.popular ? '0 10px 30px -5px rgba(234, 88, 12, 0.15)' : undefined
                  }}
                >
                  {plan.popular && (
                    <div 
                      className="position-absolute top-0 end-0 translate-middle-y me-4 badge text-white rounded-pill px-3 py-1 fw-bold"
                      style={{ backgroundColor: 'var(--accent-primary)', fontSize: '0.75rem' }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="card-title fs-4 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-muted small mb-3">
                      {plan.tagline}
                    </p>

                    {/* Price Lockup */}
                    <div className="d-flex align-items-baseline gap-1 my-3">
                      <span className="font-display fw-bolder fs-1 tabular-nums" style={{ color: 'var(--text-main)' }}>
                        €{price}
                      </span>
                      <span className="text-muted small">
                        / month {isAnnual ? '(billed annually)' : '(billed monthly)'}
                      </span>
                    </div>

                    <div className="p-2 rounded-2 mb-3 text-muted small fw-medium" style={{ backgroundColor: 'var(--bg-canvas)' }}>
                      <i className="bi bi-clock me-1 text-primary" aria-hidden="true" />
                      <span>{plan.accessHours}</span>
                    </div>

                    {/* Features list */}
                    <div className="border-top pt-3 mb-4" style={{ borderColor: 'var(--border-hairline)' }}>
                      <div className="text-muted small fw-bold mb-2">Included Amenities:</div>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        {plan.features.map((feature) => (
                          <li key={feature} className="d-flex align-items-start gap-2 small">
                            <i className="bi bi-check-circle-fill text-success mt-1" aria-hidden="true" style={{ fontSize: '0.85rem' }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => handleSelectPlan(plan)}
                      className={isSelected ? 'btn-primary-kinetix w-100' : 'btn-secondary-kinetix w-100'}
                    >
                      <span>{isSelected ? 'Selected in Form Below' : 'Choose ' + plan.name}</span>
                      <i className="bi bi-arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Membership Signup Form */}
        <div id="signup-form-card" className="row justify-content-center">
          <div className="col-lg-10">
            <div className="club-card p-4 p-md-5">
              {!formSubmitted ? (
                <div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pb-3 mb-4 border-bottom" style={{ borderColor: 'var(--border-hairline)' }}>
                    <div>
                      <h3 className="card-title fs-4 mb-1">
                        Complete Your KINETIX Membership
                      </h3>
                      <p className="text-muted small mb-0">
                        Instant digital confirmation. Keycard activation ready at reception on your start date.
                      </p>
                    </div>

                    {/* Active Selected Tier Badge */}
                    <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-3" style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--border-hairline)' }}>
                      <span className="text-muted small">Selected Plan:</span>
                      <span className="fw-bold font-display" style={{ color: 'var(--accent-primary)' }}>
                        {currentPlan.name} (€{isAnnual ? currentPlan.annualMonthlyPrice : currentPlan.monthlyPrice}/mo)
                      </span>
                    </div>
                  </div>

                  {formError && (
                    <div className="alert alert-danger d-flex align-items-center gap-2 mb-4" role="alert">
                      <i className="bi bi-exclamation-triangle-fill" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      {/* Full Name */}
                      <div className="col-md-6">
                        <label htmlFor="signup-name" className="form-label small fw-semibold text-main">
                          Full Legal Name <span className="text-danger">*</span>
                        </label>
                        <input
                          id="signup-name"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="kinetix-input"
                          placeholder="e.g. Alex Henderson"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="col-md-6">
                        <label htmlFor="signup-email" className="form-label small fw-semibold text-main">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          id="signup-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="kinetix-input"
                          placeholder="choupoyann76@gmail.com"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="col-md-6">
                        <label htmlFor="signup-phone" className="form-label small fw-semibold text-main">
                          Mobile Phone (+49 / International) <span className="text-danger">*</span>
                        </label>
                        <input
                          id="signup-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="kinetix-input"
                          placeholder="+49 163 9653705"
                        />
                      </div>

                      {/* Start Date */}
                      <div className="col-md-6">
                        <label htmlFor="signup-start-date" className="form-label small fw-semibold text-main">
                          Preferred Start Date
                        </label>
                        <input
                          id="signup-start-date"
                          name="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="kinetix-input"
                        />
                      </div>

                      {/* Primary Training Focus */}
                      <div className="col-md-6">
                        <label htmlFor="signup-goal" className="form-label small fw-semibold text-main">
                          Primary Training Goal
                        </label>
                        <select
                          id="signup-goal"
                          name="fitnessGoal"
                          value={formData.fitnessGoal}
                          onChange={handleInputChange}
                          className="kinetix-input"
                        >
                          <option value="strength">Barbell Strength & Hypertrophy</option>
                          <option value="conditioning">Metabolic Engine & HYROX</option>
                          <option value="mobility">Joint Mobility & Pain-Free Movement</option>
                          <option value="weight">Body Composition & Fat Loss</option>
                          <option value="combat">Striking Mechanics & Combat Fitness</option>
                        </select>
                      </div>

                      {/* Payment Preference */}
                      <div className="col-md-6">
                        <label htmlFor="signup-payment" className="form-label small fw-semibold text-main">
                          Billing Preference
                        </label>
                        <select
                          id="signup-payment"
                          name="paymentMethod"
                          value={formData.paymentMethod}
                          onChange={handleInputChange}
                          className="kinetix-input"
                        >
                          <option value="sepa">SEPA Direct Debit (IBAN on first visit)</option>
                          <option value="card">Credit Card (Visa / Mastercard)</option>
                          <option value="applepay">Apple Pay / Google Pay</option>
                        </select>
                      </div>

                      {/* Emergency Contact */}
                      <div className="col-12">
                        <label htmlFor="signup-emergency" className="form-label small fw-semibold text-main">
                          Emergency Contact Name & Phone (Optional)
                        </label>
                        <input
                          id="signup-emergency"
                          name="emergencyContact"
                          type="text"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          className="kinetix-input"
                          placeholder="e.g. Sarah Miller · +49 151 2345678"
                        />
                      </div>

                      {/* Terms agreement checkbox */}
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            id="signup-terms"
                            name="agreeTerms"
                            type="checkbox"
                            className="form-check-input"
                            checked={formData.agreeTerms}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="signup-terms" className="form-check-label text-muted small">
                            I agree to the KINETIX Club Code of Conduct, 14-day flexible cancellation terms, and privacy policy.
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 pt-3">
                        <button
                          type="submit"
                          className="btn-primary-kinetix w-100 justify-content-center py-3 fs-6"
                        >
                          <i className="bi bi-shield-lock-fill" aria-hidden="true" />
                          <span>Confirm & Register for {currentPlan.name}</span>
                        </button>
                        <div className="text-center text-muted small mt-2">
                          <i className="bi bi-lock me-1" aria-hidden="true" />
                          256-bit encrypted submission. No charges until your first verified check-in.
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Confirmation View */
                <div className="text-center py-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: '72px',
                      height: '72px',
                      backgroundColor: 'rgba(34, 197, 94, 0.15)',
                      color: '#22c55e',
                      fontSize: '2rem'
                    }}
                  >
                    <i className="bi bi-check-lg" aria-hidden="true" />
                  </div>

                  <h3 className="card-title fs-3 mb-2">
                    Welcome to KINETIX, {formData.fullName}!
                  </h3>
                  <p className="text-muted mb-4" style={{ maxWidth: '540px', margin: '0 auto' }}>
                    Your registration for <strong>{currentPlan.name}</strong> is confirmed. A receipt and digital onboarding guide have been dispatched to <strong>{formData.email}</strong>.
                  </p>

                  {/* Membership Confirmation Card */}
                  <div 
                    className="p-4 rounded-3 text-start mx-auto mb-4"
                    style={{ 
                      maxWidth: '520px', 
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1px dashed var(--accent-primary)'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center pb-2 border-bottom mb-3" style={{ borderColor: 'var(--border-hairline)' }}>
                      <span className="font-display fw-bold text-uppercase" style={{ color: 'var(--accent-primary)' }}>
                        KINETIX Digital Member Pass
                      </span>
                      <span className="badge bg-success">Active</span>
                    </div>

                    <div className="row g-2 small mb-3">
                      <div className="col-6">
                        <span className="text-muted d-block">Member Name:</span>
                        <strong className="text-main">{formData.fullName}</strong>
                      </div>
                      <div className="col-6">
                        <span className="text-muted d-block">Membership ID:</span>
                        <strong className="font-mono tabular-nums text-main">{membershipId}</strong>
                      </div>
                      <div className="col-6">
                        <span className="text-muted d-block">Plan Tier:</span>
                        <strong className="text-main">{currentPlan.name}</strong>
                      </div>
                      <div className="col-6">
                        <span className="text-muted d-block">Start Date:</span>
                        <strong className="text-main">{formData.startDate}</strong>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-opacity-10 bg-info small text-info-emphasis">
                      <i className="bi bi-info-circle me-1" aria-hidden="true" />
                      Show this pass or your ID at reception (Torstraße 140) to collect your physical RFID keycard and complimentary InBody scan.
                    </div>
                  </div>

                  <div className="d-flex justify-content-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn-secondary-kinetix"
                    >
                      <i className="bi bi-arrow-left" aria-hidden="true" />
                      <span>Register Another Member</span>
                    </button>
                    <a
                      href="#classes"
                      className="btn-primary-kinetix"
                    >
                      <i className="bi bi-calendar-event" aria-hidden="true" />
                      <span>Explore First Class</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
