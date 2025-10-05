import { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(date) {
    const difference = +new Date(date) - +new Date();
    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      mins: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      secs: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); 

  return (
    <div className="countdown flex  gap-2">
      <span>{timeLeft.days}d</span>:
      <span>{timeLeft.hours}h</span>:
      <span>{timeLeft.mins}m</span>:
      <span>{timeLeft.secs}s</span>
    </div>
  );
}

export default Countdown;
