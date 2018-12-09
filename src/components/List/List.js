import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'

/**
 * List component.
 *
 * @since 0.2.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/List
 */
export default function List({ children, className: aditionalClasses, ...rest }) {

  const prefix = 'list'
  const classes = ''//mapClassList({})

  return (
    <ul
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    >{children}</ul>
  )
}

List.defaultProps = {
  className: '',
}

List.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
}


/**
 * List.Item component.
 *
 * @since 0.2.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/List
 */
List.Item = function({ children, href, target, after, media, className: aditionalClasses, ...rest }) {

  const prefix = 'list__item'
  const classes = mapClassList({
    [`${prefix}--link`]: href,
  })

  const content = (
    <React.Fragment>
      {media && (<div className="list__item__media">{media}</div>)}

      <div className="list__item__content">
        {children}

        {after && (<div className="list__item__after">{after}</div>)}
      </div>
    </React.Fragment>
  )

  return (
    <li
      className={`${prefix} ${classes} ${aditionalClasses}`}
      {...rest}
    >
      {href ? (<a href={href} target={target ? target : undefined}>{content}</a>) : content }
    </li>
  )
}

List.Item.defaultProps = {
  className: ''
}

List.Item.propTypes = {
  /** Aditional classes */
  className: PropTypes.string,
  /** Item with link */
  href: PropTypes.string,
  /** link target */
  target: PropTypes.string,
  /** Item media (anything that can be rendered by React, link <img/>) */
  media: PropTypes.node,
  /** Item after (anything that can be rendered by React, link <Badge/> or text) */
  after: PropTypes.node,
}
