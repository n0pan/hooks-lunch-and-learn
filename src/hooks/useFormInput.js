import React, { useState } from "react";

function useFormInput(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = event => {
    setValue(event.target.value);
  };

  return [value, onChange];
}

export default useFormInput;
