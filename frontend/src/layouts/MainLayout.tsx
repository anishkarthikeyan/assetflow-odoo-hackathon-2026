import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header>{/* Header */}</header>
      <nav>{/* Navigation */}</nav>
      <main>{children}</main>
      <footer>{/* Footer */}</footer>
    </div>
  );
};
