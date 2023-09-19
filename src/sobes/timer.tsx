import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [state, setState] = useState<number>(0);
  const [button, setButton] = useState<boolean>(true);

  useEffect(() => {
    if (button) {
        return
    }

    let interval = setInterval(() => {
        setState(prev => prev + 1)
    }, 1000)

    return () => {
        if (interval) {
            clearInterval(interval)
        }
    }
   
  }, [state, button]);

  return (
    <div>
      {state}
      <button onClick={() => setButton((prev) => !prev)}>
        {button ? "Start" : "Stop"}
      </button>
    </div>
  );
};

export default Timer;
