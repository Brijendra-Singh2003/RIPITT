import { useEffect, useState } from "react";

function AnimatedNumber({ value = 0, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let n = 0;
    let prevTime = Date.now();

    async function foo() {
      const newTime = Date.now();
      const delTime = newTime - prevTime;

      n += (value * delTime * 0.001) / duration;
      prevTime = newTime;

      setCount(n);
      if (n < value) requestAnimationFrame(foo);
    }

    setTimeout(() => requestAnimationFrame(foo), 500);

    return () => (n = value);
  }, []);

  return Math.floor(count);
}

export default AnimatedNumber;
