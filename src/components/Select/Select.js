import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Select component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Select
 */
export default function Select({ children, block, fill, color, outline, className: aditionalClasses, ...rest }) {

  const prefix = 'select-input'
  const classes = mapClassList({
    [`${prefix}--block`]: block,
    [`${prefix}--multiple`]: rest.multiple,
  })
  const buttonClasses = mapClassList({
    [`button--fill`]: fill,
    [`button--${color}`]: color,
    [`button--outline`]: outline,
    [`button--disabled`]: rest.disabled,
  })

  return (
    <label
      className={`${prefix} ${classes} ${aditionalClasses}`}
    >
      <select
        className={!rest.multiple && `button ${buttonClasses}`}
        {...rest}
      >
        {children}
      </select>
    </label>
  )
}

Select.defaultProps = {
  className: '',
  multiple: false,
  disabled: false,
  block: false,
  color: 'default',
  fill: false,
  outline: false,
}

Select.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** The selected item for CONTROLLED components. */
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.array ]),
  /** The initial selected item for UNCONTROLLED components. */
  defaultValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.array ]),
  /** Allow multiple selected items. */
  multiple: PropTypes.bool,
  /** Disable or not the select tag */
  disabled: PropTypes.bool,
  /** Fit select tag width to its parent width. */
  block: PropTypes.bool,
  /** Select color. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray', 'white', 'black' ]),
  /** Fill the background with a solid color set in the "color" property. */
  fill: PropTypes.bool,
  /** Remove bordes */
  outline: PropTypes.bool,
  /** The options of select tag. (Only accepts children of type "options" and "optgroup") */
  children: (props, propName, componentName) => {
    var error = null, prop = props[propName]

    if (typeof prop === 'undefined') {
      return error = new Error(`${componentName} require "options" or "optgroup" tags inside.`);
    }

    React.Children.forEach(prop, (child) => {
      if (child.type !== 'option' && child.type !== 'optgroup') {
        error = new Error(`${componentName} only accepts children of type "options" and "optgroup".`);
      }
    })

    return error
  }
}
