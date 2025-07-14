import React, { useState, useEffect } from 'react';

export default function Countdown() {
   // 🎉 Podaj docelową datę (rok, miesiąc (0-11), dzień, godzina, minuta, sekunda)
  const targetDate = new Date(2025, 6, 16, 0, 0, 0); // 1 sierpnia 2025 00:00:00

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    let time = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };

    if (difference > 0) {
      time = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // sprzątanie
  }, []);

  return (
    <section className="p-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-center rounded-2xl m-4">
      <h2 className="text-3xl font-semibold mb-2">⏳ Odliczanie</h2>
      <p className="text-lg font-semibold">Do urodzin zostało:</p>
      <div className="flex justify-center gap-4 mt-4 text-2xl font-mono">
        <div>
          <div>{timeLeft.days}</div>
          <div className="text-sm">Dni</div>
        </div>
        <div>
          <div>{timeLeft.hours}</div>
          <div className="text-sm">Godziny</div>
        </div>
        <div>
          <div>{timeLeft.minutes}</div>
          <div className="text-sm">Minuty</div>
        </div>
        <div>
          <div>{timeLeft.seconds}</div>
          <div className="text-sm">Sekundy</div>
        </div>
      </div>
    </section>
  );
}