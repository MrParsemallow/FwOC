import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // we need to use an arrow function here to return the cleanup function, otherwise we would call clearInterval immediately and not on unmount
    return () => clearInterval(timerId);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}
