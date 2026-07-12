import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', message }) => {
  return (
    <div className={`spinner spinner-${size}`}>
      {message && <p>{message}</p>}
    </div>
  );
};
