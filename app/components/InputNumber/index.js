import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';

import styles from './styles.scss';

/* eslint-disable jsx-a11y/no-autofocus */
function InputNumber(props) {
  return (
    <FormattedMessage id={props.placeholder} defaultMessage={props.placeholder}>
      {message => (
        <input
          autoFocus={props.autoFocus}
          className={cn(
            styles.input,
            'form-control',
            !props.deactivateErrorHighlight && props.error && 'is-invalid',
            !isEmpty(props.className) && props.className,
          )}
          disabled={props.disabled}
          id={props.name}
          name={props.name}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
          placeholder={message}
          ref={props.inputRef}
          style={props.style}
          tabIndex={props.tabIndex}
          type="number"
          value={props.value}
        />
      )}
    </FormattedMessage>
  );
}

InputNumber.defaultProps = {
  autoFocus: false,
  className: '',
  deactivateErrorHighlight: false,
  disabled: false,
  error: false,
  inputRef: () => {},
  onBlur: () => {},
  onFocus: () => {},
  placeholder: 'app.utils.placeholder.defaultMessage',
  style: {},
  tabIndex: '0',
};

InputNumber.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  deactivateErrorHighlight: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inputRef: PropTypes.func,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default InputNumber;
