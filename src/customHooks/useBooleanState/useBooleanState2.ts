import { useCallback, useState } from "react";

const useBooleanState2 = () => {
  const [state, setState] = useState(false);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []); //дабы избежать recreate

  return [state, toggle] as const;
};

export default useBooleanState2;

const useBool = () => {
  const [sate, setState] = useState(true);

  const toggle = useCallback(() => {
    setState(!sate);
  }, []);

  return [sate , toggle] as const
};

