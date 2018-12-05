import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * RangeSlider component.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/RangeSlider
 *
 * @todo Quandos o React hooks for lançado fazer um componente controlado para criar uma barrinha colorida atrás da bolinha do elemento e um balãozinho com o valor selecionado em cima .
 */
export default function RangeSlider({ block, /*color,*/ className: aditionalClasses, ...rest }) {

  const prefix = 'range-slider'
  const classes = mapClassList({
    // [`${prefix}--${color}`]: color,
    [`${prefix}--block`]: block,
  })

  return (
    <input
      type="range"
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    />
  )
}

RangeSlider.defaultProps = {
  className: '',
  // color: 'default',
  disabled: false,
  block: false,
  min: 0,
  max: 100,
  step: 1,
  onChange: function(event) {}
}

RangeSlider.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** Minimum value. */
  min: PropTypes.number,
  /** Maximum value. */
  max: PropTypes.number,
  /** Minimal step between values. */
  step: PropTypes.number,
  /** The input value for CONTROLLED components */
  value: PropTypes.number,
  /** The initial input value for UNCONTROLLED components */
  defaultValue: PropTypes.number,
  /** Color of the element. */
  // color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray', 'white' ]),
  /** Disable or not the range. */
  disabled: PropTypes.bool,
  /** Fit range width to its parent width. */
  block: PropTypes.bool,
  /** Event fired when slider value change. */
  onChange: PropTypes.func
}
