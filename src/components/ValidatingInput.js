import React, { PropTypes, Component } from 'react';

export default class ValidatingInput extends Component {

  componentWillReceiveProps(nextProps) {
    const { value, className, validator, validityChanged } = nextProps;
    const isValid = validator(value);
    const prevIsValid = validator(this.props.value);
    if (isValid !== prevIsValid) validityChanged(className, isValid);
  }

  render() {
    const { onChange, label, value, className, validator, disabled } = this.props;
    const isValid = validator(value);

    return (
      <div className="input-wrap">
        <label htmlFor={className}>{label}</label>
        {isValid ? null : <span className="error-msg">Invalid {label}</span>}
        <input
          type="text"
          name={className}
          className={`${className} ${isValid ? '' : ' error'}`}
          value={value}
          onChange={onChange}
          placeholder={label}
          disabled={disabled}
        />
      </div>
    );
  }

}

ValidatingInput.propTypes = {
  validator: PropTypes.func.isRequired,
  validityChanged: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};
