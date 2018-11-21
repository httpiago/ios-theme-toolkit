import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the Spinner.
 * 
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Spinner
 */
export default function Spinner({ size, className: aditionalClasses, ...rest }) {
  
  const prefix = 'preloader'
  const classes = mapClassList({
    [`${prefix}--${size}`]: size,
  })
  
  return (
    <div
      className={`${prefix} ${classes} ${aditionalClasses}`}
      style={(typeof size === 'number') ? { height: size, width: size } : {}}
      {...rest}
    />
  )
}

Spinner.defaultProps = {  
  className: '',
  size: 'default'
}

Spinner.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** Size of spinner. Can be "default", "small", "big" or you can set a custom size by providing a number. */
  size: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf([ 'default', 'small', 'big' ]) ])
}