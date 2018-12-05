import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * ProgressBar component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/ProgressBar
 */
export default function ProgressBar({ value, height, round, color, infinite, className: aditionalClasses, ...rest }) {

  const prefix = 'progressbar'
  const classes = mapClassList({
    [`${prefix}--${color}`]: color,
    [`${prefix}--round`]: round,
    [`${prefix}--infinite`]: infinite
  })
  let percentage = Math.max(0, Math.min(value, 100))

  return (
    <div
      className={`${prefix} ${classes} ${aditionalClasses}`}
      style={{ height }}
      {...rest}
    >
      <span style={{ width: percentage + '%' }} />
    </div>
  )
}

ProgressBar.defaultProps = {
  height: 3,
  round: false,
  color: 'blue',
  infinite: false,
  className: ''
}

ProgressBar.propTypes = {
  /** Percentage of progress. (0 - 100) */
  value: PropTypes.number.isRequired,
  /** Height of element */
  height: PropTypes.number,
  /** Round edges. */
  round: PropTypes.bool,
  /** Color of progress bar. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray', 'white' ]),
  /** Show an animation when load it is not forecast to end. */
  infinite: PropTypes.bool,
  /** Aditional classes. */
  className: PropTypes.string,
}
