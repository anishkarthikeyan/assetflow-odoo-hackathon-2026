import React from 'react';

interface DashboardWidgetProps {
  title: string;
  children: React.ReactNode;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, children }) => {
  return (
    <div className="dashboard-widget">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
