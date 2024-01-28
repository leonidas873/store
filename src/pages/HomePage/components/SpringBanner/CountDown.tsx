import { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      // Convert targetDate to a Date object before subtracting
      const target = new Date(targetDate);
      const distance = target.getTime() - now.getTime();

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0');
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-black flex text-2xl gap-3">
      <div className="flex flex-col">
        {timeLeft.days} <span className="text-xs">Days</span>
      </div>
      <div>:</div>
      <div className="flex flex-col">
        {timeLeft.hours} <span className="text-xs">Hours</span>
      </div>
      <div>:</div>
      <div className="flex flex-col">
        {timeLeft.minutes} <span className="text-xs">Minutes</span>
      </div>
      <div>:</div>
      <div className="flex flex-col">
        {timeLeft.seconds} <span className="text-xs">Seconds</span>
      </div>
    </div>
  );
}

// Usage example:
// const targetDate = new Date('YYYY-MM-DDTHH:mm:ss');

export default CountdownTimer;
