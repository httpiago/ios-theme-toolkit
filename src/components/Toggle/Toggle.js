import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the Toggle.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Toggle
 */
export default function Toggle({ checked, color, size, className: aditionalClasses, ...rest }) {

  const prefix = 'toggle'
  const classes = mapClassList({
    [`${prefix}--${color}`]: color,
    [`${prefix}--${size}`]: size
  })

  return (
    <React.Fragment>
      <input
        type="checkbox"
        className={`${prefix} ${classes} ${aditionalClasses}`}
        checked={checked}
        {...rest}
      />
      <div className="toggle__icon" />
    </React.Fragment>
  )
}

Toggle.defaultProps = {
  color: 'green',
  size: 'default',
  className: ''
}

Toggle.propTypes = {
  /** State of checkbox */
  checked: PropTypes.bool.isRequired,
  /** Color of progress bar. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray' ]),
  /** size of toggle */
  size: PropTypes.oneOf([ 'default', 'small', 'big' ]),
  /** Aditional classes. */
  className: PropTypes.string
}
