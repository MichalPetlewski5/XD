import React, { useState, useEffect } from 'react';

export default function Countdown() {
  // 🎉 Docelowa data: 21 lipca 2025, 10:43:00
  const targetDate = new Date(2025, 6, 21, 10, 43, 0);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    let time = {
      hoursTotal: '00',
      minutes: '00',
      seconds: '00'
    };

    if (difference > 0) {
      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      time = {
        hoursTotal: String(totalHours).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-center rounded-2xl m-4">
      <h2 className="text-3xl font-semibold mb-2">⏳ Odliczanie</h2>
      <p className="text-lg font-semibold">Do spotkania zostało:</p>
      <div className="flex justify-center gap-4 mt-4 text-2xl font-mono">
        <div>
          <div>{timeLeft.hoursTotal}</div>
          <div className="text-sm">Godzin</div>
        </div>
        <div>
          <div>{timeLeft.minutes}</div>
          <div className="text-sm">Minut</div>
        </div>
        <div>
          <div>{timeLeft.seconds}</div>
          <div className="text-sm">Sekund</div>
        </div>
      </div>
    </section>
  );
}