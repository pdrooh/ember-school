'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react';

const TimeDisplay = memo(({ value }: { value: string }) => (
  <span className="inline-block min-w-[1.2em] text-center">{value}</span>
));
TimeDisplay.displayName = 'TimeDisplay';

export const CountdownTimer = memo(() => {
  const [time, setTime] = useState({ hours: 23, minutes: 45, seconds: 28 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const tick = useCallback(() => {
    setTime((prev) => {
      let { hours, minutes, seconds } = prev;
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        }
      }
      return { hours, minutes, seconds };
    });
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(tick, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [tick]);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="inline-flex items-center gap-0.5 font-mono text-sm sm:text-base md:text-lg font-bold gradient-text-ember">
      <TimeDisplay value={formatTime(time.hours)} />
      <span>:</span>
      <TimeDisplay value={formatTime(time.minutes)} />
      <span>:</span>
      <TimeDisplay value={formatTime(time.seconds)} />
    </div>
  );
});

CountdownTimer.displayName = 'CountdownTimer';
