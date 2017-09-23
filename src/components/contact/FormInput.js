import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function FormInput({
  value, errors, edit, label, name, classWrapperName, className, placeHolder, onChange, errorMsg, type = 'text',
}) {
  const renderInputElement = () => {
    if (type === 'textarea') {
      return (
        <textarea
          className={classNames(className, { error: errors && errors[name] })}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeHolder}
          disabled={!edit}
        />
      );
    }
    return (
      <input
        type={type}
        className={classNames(className, { error: errors && errors[name] })}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
        disabled={!edit}
      />
    );
  };
  return (
    <div className="input-wrap">
      {!edit && <div className={classWrapperName}>{value}</div>}
      <label htmlFor={name}>{label}</label>
      {errors && errors[name] && <span className="error-msg">{errorMsg}</span>}
      {edit && renderInputElement()}
    </div>
  );
}

FormInput.propTypes = {
  value: PropTypes.any,
  errors: PropTypes.object,
  edit: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  classWrapperName: PropTypes.string,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
};
