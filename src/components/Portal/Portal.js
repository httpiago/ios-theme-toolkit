import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { canUseDOM } from '../../Utils'

/**
 * Create an React Portal with component.
 *
 * @since 0.2.0
 */
class Portal extends React.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }

    this.defaultNode = null
  }

  render() {
    if (!canUseDOM) return null

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div')

      document.body.appendChild(this.defaultNode)
    }

    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || this.defaultNode
    )
  }
}

Portal.propTypes = {
  /** Portal content */
  children: PropTypes.node.isRequired,
  /** The root node for React create the portal, if not specified, a div will automatically be created at the end of the body tag. */
  node: PropTypes.any
}

export default Portal
