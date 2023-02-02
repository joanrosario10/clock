import "./styles.css";

import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const secondsDegrees = (time.getSeconds() / 60) * 360 + 90;
  const minutesDegrees =
    (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6 + 90;
  const hoursDegrees =
    (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30 + 90;

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hoursDegrees}deg)` }}
        />
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minutesDegrees}deg)` }}
        />
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondsDegrees}deg)` }}
        />
      </div>
    </div>
  );
};

export default Clock;
