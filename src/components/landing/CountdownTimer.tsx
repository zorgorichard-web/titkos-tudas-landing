import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          return { hours: 2, minutes: 47, seconds: 33 }; // Reset for demo
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-1">
      <TimeBlock value={formatNumber(timeLeft.hours)} label="óra" />
      <span className="text-gold font-bold text-lg animate-pulse">:</span>
      <TimeBlock value={formatNumber(timeLeft.minutes)} label="perc" />
      <span className="text-gold font-bold text-lg animate-pulse">:</span>
      <TimeBlock value={formatNumber(timeLeft.seconds)} label="mp" />
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-background/80 border border-gold/30 rounded-lg px-3 py-1.5 min-w-[52px]">
      <span className="font-display text-2xl font-bold text-gold tabular-nums">{value}</span>
    </div>
    <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{label}</span>
  </div>
);

export default CountdownTimer;
