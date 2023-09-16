import React from "react";

const Input = ({
  type,
  nameInput,
  value,
  required = true,
  id,
  onChange,
  label = false,
  labelText,
  placeholder,
  classLabel,
  className,
}) => {
  return (
    <>
      {label ? (
        <label htmlFor={id} className={classLabel}>
          {labelText}
        </label>
      ) : null}

      <input
        type={type}
        name={nameInput}
        id={id}
        className={className}
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
