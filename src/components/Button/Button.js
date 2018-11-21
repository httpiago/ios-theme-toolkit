import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Component responsible for creating the Button.
 *
 * @since 0.1.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Button
 */
export default function Button({ children, htmlType, fill, outline, block, round, onlyIcon, uppercase, color, size, className: aditionalClasses, ...rest }) {

  const prefix = 'button'
  const classes = mapClassList({
    [`${prefix}--fill`]: fill,
    [`${prefix}--outline`]: outline,
    [`${prefix}--block`]: block,
    [`${prefix}--round`]: round,
    [`${prefix}--onlyIcon`]: onlyIcon,
    [`${prefix}--uppercase`]: uppercase,
    [`${prefix}--${color}`]: color,
    [`${prefix}--${size}`]: size,
  })

  if ('href' in rest) {
    // Return link button
    return (
      <a
        className={`${prefix} ${classes} ${aditionalClasses}`}
        role="button"
        {...rest}
      >{children}</a>
    )
  } else {
    // Return button
    return (
      <button
        type={htmlType}
        className={`${prefix} ${classes} ${aditionalClasses}`}
        {...rest}
      >{children}</button>
    )
  }
}

Button.defaultProps = {
  fill: false,
  outline: false,
  round: false,
  color: 'blue',
  size: 'default',
  block: false,
  disabled: false,
  onlyIcon: false,
  uppercase: false,
  htmlType: 'button',
  onClick: function (event) {},
  className: ''
}

Button.propTypes = {
  /** Anything that can be rendered by React. */
  children: PropTypes.node,
  /** Fill the background with a solid color set in the "color" property. */
  fill: PropTypes.bool,
  /** Remove bordes. */
  outline: PropTypes.bool,
  /** Button with or not round edges. */
  round: PropTypes.bool,
  /** Button color. */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray', 'white' ]),
  /** Size of the button. */
  size: PropTypes.oneOf([ 'default', 'small', 'big' ]),
  /** Fit button width to its parent width. */
  block: PropTypes.bool,
  /** Disable or not the button. */
  disabled: PropTypes.bool,
  /** Only icon. */
  onlyIcon: PropTypes.bool,
  /** Transform all the text inside the button in the uppercase. */
  uppercase: PropTypes.bool,
  /** If set, the component renders a link shaped as button. */
  href: PropTypes.string,
  /** Same as target attribute of a, works when href is specified. */
  target: PropTypes.string,
  /** Aditional classes. */
  className: PropTypes.string,
  /** Set the original html type of button, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type */
  htmlType: PropTypes.oneOf([ 'submit', 'button', 'reset' ]),
  /** Function that will be called when the user clicks the button. */
  onClick: PropTypes.func
}
