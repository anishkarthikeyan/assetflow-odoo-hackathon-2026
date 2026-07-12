import React from 'react';

interface BookingCalendarProps {
  onDateSelect?: (date: Date) => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ onDateSelect }) => {
  return (
    <div className="booking-calendar">
      {/* Booking calendar implementation */}
    </div>
  );
};
