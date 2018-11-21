import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the Select.
 * 
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Select
 */
export default function Select({ children, block, fill, outline, className: aditionalClasses, ...rest }) {
  
  const prefix = 'select-input'
  const classes = mapClassList({
    [`${prefix}--block`]: block,
    [`${prefix}--fill`]: fill,
    [`${prefix}--outline`]: outline,
    [`${prefix}--multiple`]: rest.multiple,
  })
  
  return (
    <label
      className={`${prefix} ${classes} ${aditionalClasses}`}
    >
      <select
        {...rest}
      >{children}</select>
    </label>
  )
}

Select.defaultProps = {  
  className: '',
  multiple: false,
  disabled: false,
  block: false,
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
  /** . */
  fill: PropTypes.bool,
  /** . */
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