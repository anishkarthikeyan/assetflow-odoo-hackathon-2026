import React from 'react';

interface NotificationBellProps {
  count: number;
  onClick?: () => void;
}

export const NotificationBell: React.FC<NotificationBellProps> = ({ count, onClick }) => {
  return (
    <div className="notification-bell" onClick={onClick}>
      🔔
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
};
