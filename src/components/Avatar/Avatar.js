import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the Avatar.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Avatar
 */
export default function Avatar({ src, size, round, className: aditionalClasses, ...rest }) {

  const prefix = 'avatar'
  const classes = mapClassList({
    [`${prefix}--${size}`]: size,
    [`${prefix}--round`]: round
  })

  return (
    <img
      src={src}
      className={`${prefix} ${classes} ${aditionalClasses}`}
      style={(typeof size === 'number') ? { height: size, width: size } : {}}
      {...rest}
    />
  )
}

Avatar.defaultProps = {
  size: 'default',
  round: false,
  className: ''
}

Avatar.propTypes = {
  /** Image url. */
  src: PropTypes.string.isRequired,
  /** Size of avatar. Can be "default", "small", "big" or you can set a custom size by providing a number. */
  size: PropTypes.oneOfType([ PropTypes.number, PropTypes.oneOf([ 'default', 'small', 'big' ]) ]),
  /** Rounded element */
  round: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
}
