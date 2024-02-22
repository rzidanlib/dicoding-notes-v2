import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  return [value, changeValueHandler];
};

export default useInput;
