import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * ButtonGroup component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/ButtonGroup
 */
export default function ButtonGroup({ children, round, outline, vertical, className: aditionalClasses, ...rest }) {

  const prefix = 'button-group'
  const classes = mapClassList({
    [`${prefix}--round`]: round,
    [`${prefix}--outline`]: outline,
    [`${prefix}--${vertical ? 'vertical' : 'horizontal'}`]: true,
  })

  return (
    <div
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    >
      {children}
    </div>
  )
}

ButtonGroup.defaultProps = {
  round: false,
  className: '',
  vertical: false,
  outline: false,
  children: [],
}

ButtonGroup.propTypes = {
  /** Round edges */
  round: PropTypes.bool,
  /** Remove external borders */
  outline: PropTypes.bool,
  /** Position of the buttons */
  vertical: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
  /** The Buttons. (Only accepts "Button" components as children") */
  children: PropTypes.node.isRequired
}
