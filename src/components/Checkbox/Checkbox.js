import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Checkbox component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Checkbox
 */
export default function Checkbox({ color, size, className: aditionalClasses, ...rest }) {

  const prefix = 'checkbox'
  const classes = mapClassList({
    [`${prefix}--${color}`]: color,
    [`${prefix}--${size}`]: size,
  })

  return (
    <input
      type="checkbox"
      className={`${prefix} ${classes} ${aditionalClasses}`}
      style={(typeof size === 'number') ? { height: size, width: size } : {}}
      {...rest}
    />
  )
}

Checkbox.defaultProps = {
  className: '',
  color: 'default',
  size: 'default'
}

Checkbox.propTypes = {
  /** State of checkbox for CONTROLLED components. */
  checked: PropTypes.bool,
  /** The initial checkbox state for UNCONTROLLED components. */
  defaultChecked: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
  /** Color of checkbox. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray' ]),
  /** Size of checkbox. */
  size: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf([ 'default', 'small', 'big' ]) ]),
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name */
  name: PropTypes.string,
}
