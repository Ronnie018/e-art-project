import { useState, useEffect } from 'react';

export default function usePosition(diff, setDiff, id) {
  const [position, setPosition] = useState(id);

  useEffect(() => {
    if ((!position && position !== 0) || diff === 0) return;

    setPosition(position >= diff ? position - diff : position + (5 - diff));

    setDiff(() => 0);
  }, [diff]);

  return position;
}
