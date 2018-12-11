import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Toggle component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Toggle
 */
export default function Toggle({ color, size, className: aditionalClasses, ...rest }) {

  const prefix = 'toggle'
  const classes = mapClassList({
    [`${prefix}--${color}`]: color,
    [`${prefix}--${size}`]: size
  })

  return (
    <label>
      <input
        type="checkbox"
        className={`${prefix} ${classes} ${aditionalClasses}`}
        {...rest}
      />
      <div className="toggle__icon" />
    </label>
  )
}

Toggle.defaultProps = {
  color: 'green',
  size: 'default',
  className: ''
}

Toggle.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** The checked state for CONTROLLED components. */
  checked: PropTypes.bool,
  /** The initial state value for UNCONTROLLED components. */
  defaultChecked: PropTypes.bool,
  /** Disable or not the toggle. */
  disabled: PropTypes.bool,
  /** Color of progress bar. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray' ]),
  /** size of toggle */
  size: PropTypes.oneOf([ 'default', 'small', 'big' ]),
  /** Function callback when user change the state */
  onChange: PropTypes.func
}
