import React, { useState, useMemo } from 'react';
import { CLASSES } from '../data/fitnessData';
import { FitnessClass } from '../types';

interface ClassScheduleProps {
  onSelectClass: (cls: FitnessClass) => void;
}

type DayFilter = 'all' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
type CategoryFilter = 'all' | 'strength' | 'hiit' | 'conditioning' | 'mobility' | 'combat';

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onSelectClass }) => {
  const [selectedDay, setSelectedDay] = useState<DayFilter>('monday');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const days: { key: DayFilter; label: string; short: string }[] = [
    { key: 'monday', label: 'Monday', short: 'Mon' },
    { key: 'tuesday', label: 'Tuesday', short: 'Tue' },
    { key: 'wednesday', label: 'Wednesday', short: 'Wed' },
    { key: 'thursday', label: 'Thursday', short: 'Thu' },
    { key: 'friday', label: 'Friday', short: 'Fri' },
    { key: 'saturday', label: 'Saturday', short: 'Sat' },
    { key: 'sunday', label: 'Sunday', short: 'Sun' },
    { key: 'all', label: 'Entire Week', short: 'All' }
  ];

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'strength', label: 'Barbell & Strength' },
    { key: 'hiit', label: 'HIIT & Functional' },
    { key: 'conditioning', label: 'Engine & Hyrox' },
    { key: 'mobility', label: 'Mobility & Recovery' },
    { key: 'combat', label: 'Boxing & Combat' }
  ];

  const filteredClasses = useMemo(() => {
    return CLASSES.filter((cls) => {
      const matchesDay = selectedDay === 'all' || cls.day === selectedDay;
      const matchesCategory = selectedCategory === 'all' || cls.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.trainerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.studioRoom.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesDay && matchesCategory && matchesSearch;
    });
  }, [selectedDay, selectedCategory, searchQuery]);

  return (
    <section id="classes" className="py-5 py-lg-6" aria-labelledby="classes-heading">
      <div className="container-xl">
        <div className="row justify-content-between align-items-end mb-4 g-3">
          <div className="col-lg-7">
            <div className="text-uppercase fw-bold mb-2" style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Coached Group Protocols
            </div>
            <h2 id="classes-heading" className="section-title">
              Weekly Class Schedule
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '580px', fontSize: '0.95rem' }}>
              Small-group sessions capped at 16 athletes. Every repetition is coached for biomechanical safety, physiological progression, and high energy.
            </p>
          </div>

          <div className="col-lg-5 col-xl-4">
            {/* Quick search input */}
            <div className="position-relative">
              <i 
                className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                aria-hidden="true" 
              />
              <input
                type="search"
                className="kinetix-input ps-5"
                placeholder="Search class, coach or studio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search schedule"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
                  aria-label="Clear search"
                >
                  <i className="bi bi-x-circle-fill" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Day Selector Segmented Control */}
        <div className="mb-3 overflow-auto pb-2">
          <div 
            className="d-inline-flex p-1 rounded-3 gap-1"
            style={{ 
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)'
            }}
            role="tablist"
            aria-label="Select day of week"
          >
            {days.map((day) => {
              const isActive = selectedDay === day.key;
              return (
                <button
                  key={day.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedDay(day.key)}
                  className={`interactive-pill-tab ${isActive ? 'active' : ''}`}
                >
                  <span className="d-none d-md-inline">{day.label}</span>
                  <span className="d-md-none">{day.short}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Discipline / Category Filter Chips */}
        <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
          <span className="text-muted small fw-medium me-1">Filter Discipline:</span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className="btn btn-sm rounded-pill fw-medium px-3 py-1 transition-colors"
                style={{
                  backgroundColor: isActive ? 'var(--text-main)' : 'var(--bg-surface)',
                  color: isActive ? 'var(--bg-canvas)' : 'var(--text-muted)',
                  border: `1px solid ${isActive ? 'var(--text-main)' : 'var(--border-hairline)'}`,
                  fontSize: '0.825rem'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Class Cards Grid */}
        {filteredClasses.length === 0 ? (
          <div 
            className="club-card p-5 text-center my-4"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <i className="bi bi-calendar-x text-muted fs-1 mb-3 d-block" aria-hidden="true" />
            <h4 className="fs-5 mb-2">No Scheduled Classes Found</h4>
            <p className="text-muted mb-3" style={{ maxWidth: '420px', margin: '0 auto' }}>
              We could not find any sessions matching your filter criteria. Try adjusting your day or discipline selection.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedDay('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="btn-secondary-kinetix"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="row g-3">
            {filteredClasses.map((cls) => (
              <div key={cls.id} className="col-lg-6">
                <article 
                  className="club-card p-4 h-100 d-flex flex-column justify-content-between"
                  style={{ borderLeft: '4px solid var(--accent-primary)' }}
                >
                  <div>
                    {/* Header: Time, Day & Category */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="font-display fw-bold tabular-nums fs-5" style={{ color: 'var(--text-main)' }}>
                          {cls.time}
                        </span>
                        <span className="text-muted small">
                          ({cls.durationMinutes} min)
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-2 text-muted small">
                        <span className="text-capitalize fw-semibold" style={{ color: 'var(--accent-primary)' }}>
                          {cls.day}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{cls.studioRoom}</span>
                      </div>
                    </div>

                    {/* Class Title */}
                    <h3 className="card-title fs-5 mb-2">
                      {cls.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted small mb-3" style={{ lineHeight: 1.55 }}>
                      {cls.description}
                    </p>

                    {/* Unboxed Metadata details */}
                    <div className="d-flex flex-wrap align-items-center gap-3 text-muted small mb-3 py-2 border-top border-bottom" style={{ borderColor: 'var(--border-hairline)' }}>
                      <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-person-badge" aria-hidden="true" />
                        <span className="fw-medium text-main">{cls.trainerName}</span>
                      </div>

                      <span aria-hidden="true">·</span>

                      <div className="d-flex align-items-center gap-1">
                        <i className="bi bi-fire text-danger" aria-hidden="true" />
                        <span>{cls.calorieBurnEstimate}</span>
                      </div>

                      <span aria-hidden="true">·</span>

                      {/* Intensity Gauge */}
                      <div className="d-flex align-items-center gap-1" title={`Intensity level ${cls.intensityLevel} of 5`}>
                        <span>Intensity:</span>
                        <div className="d-flex gap-1" aria-hidden="true">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <span
                              key={lvl}
                              className="d-inline-block rounded-pill"
                              style={{
                                width: '6px',
                                height: '12px',
                                backgroundColor: lvl <= cls.intensityLevel ? 'var(--accent-primary)' : 'var(--border-hairline)'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="d-flex align-items-center justify-content-between pt-2">
                    <div className="d-flex align-items-center gap-1 small">
                      <span 
                        className={`d-inline-block rounded-circle ${cls.spotsLeft <= 2 ? 'bg-danger' : 'bg-success'}`}
                        style={{ width: '8px', height: '8px' }}
                        aria-hidden="true"
                      />
                      <span className={cls.spotsLeft <= 2 ? 'text-danger fw-semibold' : 'text-muted'}>
                        {cls.spotsLeft} {cls.spotsLeft === 1 ? 'spot left' : 'spots available'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectClass(cls)}
                      className="btn-primary-kinetix py-2 px-3"
                      style={{ fontSize: '0.85rem', minHeight: '38px' }}
                      aria-label={`Reserve spot for ${cls.name}`}
                    >
                      <i className="bi bi-bookmark-plus" aria-hidden="true" />
                      <span>Reserve Spot</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
