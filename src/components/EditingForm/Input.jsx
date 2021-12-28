import { useField } from 'formik';
import React from 'react';
import '../Input.scss';

const Input = ({ type, name, placeholder, classname = 'input__field' }) => {
  const [field, meta] = useField(name);

  return (
    <div className="form__input">
      <input
        placeholder={placeholder}
        className={classname}
        type={type}
        name={field.name}
        {...field}
      />
    </div>
  );
};

export default Input;