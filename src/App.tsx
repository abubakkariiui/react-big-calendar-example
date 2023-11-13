import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const localizer = momentLocalizer(moment);

  const myEventsList = [
    { start: new Date(), end: new Date(), title: 'special event' },
  ];
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
