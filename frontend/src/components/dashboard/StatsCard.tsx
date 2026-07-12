import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon }) => {
  return (
    <div className="stats-card">
      {icon}
      <h4>{title}</h4>
      <p className="value">{value}</p>
      {change !== undefined && (
        <p className={`change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </p>
      )}
    </div>
  );
};
