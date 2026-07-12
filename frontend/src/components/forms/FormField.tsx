import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ label, name, error, children }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {children}
      {error && <span className="error">{error}</span>}
    </div>
  );
};
