import { useState } from "react";

const useDmm = () => {
  const [actresses, setActresses] = useState();

  const states = {
    actresses,
  };

  const callBacks = {
    setActresses,
  };

  return { states, callBacks };
};

export default useDmm;
