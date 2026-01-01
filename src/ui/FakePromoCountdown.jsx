import { useEffect, useState } from 'react';

import TimeBox from './TimeBox';
import { formatTime } from '@/utils/helpers';
import { FAKE_DURATION } from '@/utils/constants';

function FakePromoCountdown() {
  const [timeLeft, setTimeLeft] = useState(FAKE_DURATION);

  useEffect(() => {
    // Fake end time (resets on every render)
    const fakeEndTime = Date.now() + FAKE_DURATION;

    const interval = setInterval(() => {
      const remaining = fakeEndTime - Date.now();

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-wrap gap-4 text-center ml-12">
      <TimeBox label="Days" value={days} />
      <TimeBox label="Hours" value={hours} />
      <TimeBox label="Minutes" value={minutes} />
      <TimeBox label="Seconds" value={seconds} />
    </div>
  );
}

export default FakePromoCountdown;
