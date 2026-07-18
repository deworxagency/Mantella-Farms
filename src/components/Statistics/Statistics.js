import React from 'react';
import './Statistics.css';

const STATS = [
  { value: '2012', label: 'Founded' },
  { value: '5000+', label: 'Eggs Produced Daily' },
  { value: '15+', label: 'Years Experience' },
  { value: '20+', label: 'Communities Supplied' },
];

const Statistics = () => (
  <div className="stats-row">
    {STATS.map(({ value, label }, i) => (
      <React.Fragment key={label}>
        <div className="stat-item">
          <span className="stat-value">{value}</span>
          <span className="stat-label">{label}</span>
        </div>
        {i < STATS.length - 1 && <div className="stat-divider" />}
      </React.Fragment>
    ))}
  </div>
);

export default Statistics;
