import React from 'react';

interface ReportChartProps {
  type: 'bar' | 'line' | 'pie';
  data: any[];
}

export const ReportChart: React.FC<ReportChartProps> = ({ type, data }) => {
  return (
    <div className="report-chart" data-chart-type={type}>
      {/* Report chart implementation */}
    </div>
  );
};
