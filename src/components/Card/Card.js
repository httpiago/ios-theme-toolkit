import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * Card component.
 *
 * @since 0.2.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Card
 */
export default function Card({ children, shadow, outline, header, footer, className: aditionalClasses, ...rest }) {

  const prefix = 'card'
  const classes = mapClassList({
    [`${prefix}--shadow`]: shadow,
    [`${prefix}--outline`]: outline,
  })

  return (
    <div
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    >
      {header && (
        <div className="card__header">{header}</div>
      )}
      <div className="card__content">{children}</div>
      {footer && (
        <div className="card__footer">{footer}</div>
      )}
    </div>
  )
}

Card.defaultProps = {
  className: '',
  outline: false,
  shadow: false,
  header: false,
  footer: false
}

Card.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** Enable long shadow */
  shadow: PropTypes.bool,
  /** Card without shadow */
  outline: PropTypes.bool,
  /** Anything that can be rendered by React */
  children: PropTypes.node,
  /** Card header (anything that can be rendered by React) */
  header: PropTypes.oneOfType([ PropTypes.node, PropTypes.bool ]),
  /** Card footer (anything that can be rendered by React) */
  footer: PropTypes.oneOfType([ PropTypes.node, PropTypes.bool ]),

}
