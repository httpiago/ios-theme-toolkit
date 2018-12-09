import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Badge component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Badge
 */
export default function Badge({ children, color, size, uppercase, round, className: aditionalClasses, ...rest }) {

  const prefix = 'badge'
  const classes = mapClassList({
    [`${prefix}--${color}`]: color,
    [`${prefix}--${size}`]: size,
    [`${prefix}--uppercase`]: uppercase,
  })

  return (
    <span
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    >
      {size !== 'tiny' && children}
    </span>
  )
}

Badge.defaultProps = {
  className: '',
  color: 'default',
  size: 'default',
  uppercase: false,
  children: ''
}

Badge.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** Badge color. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray', 'white', 'black' ]),
  /** Badge size. */
  size: PropTypes.oneOf([ 'default', 'tiny', 'small', 'big' ]),
  /** Transform all the text inside the badge in the uppercase. */
  uppercase: PropTypes.bool,
  /** Anything that can be rendered by React. */
  children: PropTypes.node
}
