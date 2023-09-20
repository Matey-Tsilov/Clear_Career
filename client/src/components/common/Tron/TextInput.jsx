import React, { useMemo, useState } from "react";
import style from "./TextInput.module.css"


export const TextInput = ({ attributes, errorPredicateFunc, errorMsg }) => {
  const [inValue, setInValue] = useState('');
  const [errorObj, setErrorObj] = useState({hasError: false, errorMsg})

  const onChange = (e) => setInValue(e.target.value);

  const onBlur = (e) => {
    if (errorPredicateFunc != null && errorPredicateFunc(inValue)) {
        setErrorObj({hasError: true, errorMsg: errorObj.errorMsg})  
    }else {
        setErrorObj({hasError: false, errorMsg: ''})
    }
  }

  const textInput = useMemo(
    () =>
      React.createElement("input", {
        value: inValue,
        ...attributes,
        className: errorObj.hasError && style.errorInput,
        onBlur,
        onChange,
      }),
    [inValue, attributes, errorObj]
  );

  return (
    <>
      {errorObj.hasError && (
        <label className={style.errorLabel} htmlFor={attributes.id}>
          {errorObj.errorMsg}
        </label>
      )}
      {textInput}
    </>
  );
};
