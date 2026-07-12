import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-shell">
      <div className="auth-shell__halo auth-shell__halo--one" aria-hidden="true" />
      <div className="auth-shell__halo auth-shell__halo--two" aria-hidden="true" />
      <div className="auth-shell__frame">{children}</div>
    </div>
  );
};
