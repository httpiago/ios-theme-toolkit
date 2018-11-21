import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the ButtonGroup.
 * 
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/ButtonGroup
 */
export default function ButtonGroup({ children, round, className: aditionalClasses, ...rest }) {
  
  const prefix = 'button-group'
  const classes = mapClassList({
    [`${prefix}--round`]: round
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
  className: ''
}

ButtonGroup.propTypes = {
  /** Anything that can be rendered by React. */
  children: PropTypes.node,
  /** Round edges. */
  round: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
}
