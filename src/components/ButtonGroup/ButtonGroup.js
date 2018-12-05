import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * ButtonGroup component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/ButtonGroup
 */
export default function ButtonGroup({ children, round, outline, direction, className: aditionalClasses, ...rest }) {

  const prefix = 'button-group'
  const classes = mapClassList({
    [`${prefix}--round`]: round,
    [`${prefix}--outline`]: outline,
    [`${prefix}--${direction}`]: direction,
  })

  return (
    <div
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    >{children}</div>
  )
}

ButtonGroup.defaultProps = {
  round: false,
  className: '',
  direction: 'horizontal',
  outline: false
}

ButtonGroup.propTypes = {
  /** Round edges */
  round: PropTypes.bool,
  /** Remove external borders */
  outline: PropTypes.bool,
  /** Position of the buttons */
  direction: PropTypes.oneOf([ 'vertical', 'horizontal' ]),
  /** Aditional classes. */
  className: PropTypes.string,
  /** The Buttons. (Only accepts "Button" components as children") */
  children: (props, propName, componentName) => {
    var error = null, prop = props[propName]

    if (typeof prop === 'undefined') {
      return error = new Error(`${componentName} requires at least one button`);
    }

    React.Children.forEach(prop, (child) => {
      if (typeof child.type.displayName === 'undefined' || child.type.displayName !== 'Button') {
        error = new Error(`${componentName} only accepts "Button" component as children.`);
      }
    })

    return error
  }
}
