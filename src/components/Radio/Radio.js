import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Radio component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Radio
 */
export default function Radio({ color, size, className: aditionalClasses, ...rest }) {

  const prefix = 'radio'
  const classes = mapClassList({
    [`${prefix}--${color}`]: color,
    [`${prefix}--${size}`]: size,
  })

  return (
    <input
      type="radio"
      className={`${prefix} ${classes} ${aditionalClasses}`}
      style={(typeof size === 'number') ? { height: size, width: size } : {}}
      {...rest}
    />
  )
}

Radio.defaultProps = {
  className: '',
  color: 'default',
  size: 'default'
}

Radio.propTypes = {
  /** State of radio for CONTROLLED components. */
  checked: PropTypes.bool,
  /** The initial radio state for UNCONTROLLED components. */
  defaultChecked: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
  /** Color of radio. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray' ]),
  /** Size of radio. */
  size: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf([ 'default', 'small', 'big' ]) ]),
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name */
  name: PropTypes.string,
  /** Callback function when user change state */
  onChange: PropTypes.func
}
