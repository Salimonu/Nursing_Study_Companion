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
    <div className="flex flex-wrap gap-4 text-center ">
      <TimeBox label="Days" value={days} />
      <TimeBox label="Hrs" value={hours} />
      <TimeBox label="Mins" value={minutes} />
      <TimeBox label="Secs" value={seconds} />
    </div>
  );
}

export default FakePromoCountdown;
