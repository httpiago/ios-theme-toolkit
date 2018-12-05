import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'
import Popover from '../Popover/Popover'

/**
 * Tooltip component.
 *
 * @since 0.2.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Tooltip
 */
export default function Tooltip({ text, className: aditionalClasses, ...rest }) {

  const prefix = 'tooltip'
  const classes = mapClassList({
    // [`${prefix}--${color}`]: color,
  })

  return (
    <Popover
      trigger="hover"
      backdrop={false}
      color="black"
      content={text}
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    />
  )
}

Tooltip.defaultProps = {
  className: '',
  withoutArrow: false,
  mouseEnterDelay: 600
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  /** Aditional classes. */
  className: PropTypes.string,
  /** Without arrow */
  withoutArrow: PropTypes.bool,
  /** Delay for show tooltip */
  mouseEnterDelay: PropTypes.number
}
