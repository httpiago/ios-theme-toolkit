import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the Input.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Input
 */
export default function Input({ htmlType, autosize, fill, error, round, block, className: aditionalClasses, ...rest }) {

  const prefix = 'input-text'
  const classes = mapClassList({
    [`${prefix}--fill`]: fill,
    [`${prefix}--round`]: round,
    [`${prefix}--block`]: block,
    [`${prefix}--error`]: error
  })

  if (htmlType === 'textarea') {
    return (
      <textarea
        className={`${prefix} ${classes} ${aditionalClasses}`}
        autosize={String(autosize)}
        {...rest}
      />
    )
  } else {
    return (
      <input
        type={htmlType}
        className={`${prefix} ${classes} ${aditionalClasses}`}
        {...rest}
      />
    )
  }
}

Input.defaultProps = {
  htmlType: 'text',
  round: false,
  block: false,
  autosize: false,
  className: '',

  onFocus: function(event) {},
  onBlur: function(event) {},
  onKeyDown: function(event) {},
  onKeyUp: function(event) {}
}

Input.propTypes = {
  /** Max length of input */
  maxLength: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** Disable or not the input. */
  disabled: PropTypes.bool,
  /** The input value for CONTROLLED components. */
  value: PropTypes.string,
  /** The initial input value for UNCONTROLLED components. */
  defaultValue: PropTypes.string,
  /** Default value that is shown when input is empty. */
  placeholder: PropTypes.string,
  /** Height autosize feature. (not finished) */
  autosize: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
  /** Fit input width to its parent width. */
  block: PropTypes.bool,
  /** Round edges. */
  round: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
  /** Set the original html type of input tag */
  htmlType: PropTypes.oneOf([ 'text', 'textarea', 'password', 'number', 'email', 'url', 'search', 'tel', 'time', 'date', 'file' ]),

  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func
}
