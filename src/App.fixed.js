import { useCallback, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  // Keep track of which function was called last, so we can
  // call the other on "alternate".
  // The function itself is wrapped in an object, to prevent the
  // setter from evaluating the function.
  const [{ last }, setLast] = useState({});

  const inc = useCallback(() => setCount((count) => count + 1), []);

  const incAndRemember = useCallback(() => {
    inc();
    setLast({ last: inc });
  }, [inc]);

  const dec = useCallback(() => setCount((count) => count - 1), []);

  const decAndRemember = useCallback(() => {
    dec();
    setLast({ last: dec });
  }, [dec]);

  const alternate = useCallback(() => {
    if (last === inc) {
      decAndRemember();
    } else {
      incAndRemember();
    }
  }, [inc, last, incAndRemember, decAndRemember]);

  return (
    <>
      <div>
        <button onClick={inc}>+</button>
        {count}
        <button onClick={dec}>-</button>
      </div>
      <div>
        <button onClick={alternate}>Alternate</button>
      </div>
    </>
  );
}
