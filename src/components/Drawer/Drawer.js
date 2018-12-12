import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'
import Portal from '../Portal/Portal'

/**
 * Drawer component.
 *
 * @since 0.5.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Drawer
 */
export default class Drawer extends React.Component {
  drawerRef = React.createRef()

  componentDidUpdate(prevProps) {
    if (this.props.visible !== prevProps.visible) {
      if (this.props.visible === true) this.showDrawer()
      else this.hideDrawer()
    }
  }

  /**
   * Hide drawer with animation
   */
  hideDrawer = () => {
    this.drawerRef.current.style[this.styleProp] = ''
  }

  /**
   * Show drawer with animation
   */
  showDrawer = () => {
    const drawerElement = this.drawerRef.current
    const { placement } = this.props

    if (placement == 'right') {
      var styleProp = 'left'
      var value = document.body.offsetWidth - drawerElement.offsetWidth
    } else if (placement == 'left') {
      var styleProp = 'right'
      var value = document.body.offsetWidth - drawerElement.offsetWidth
    } else if (placement == 'top') {
      var styleProp = 'bottom'
      var value = document.body.offsetHeight - drawerElement.offsetHeight
    } else if (placement == 'bottom') {
      var styleProp = 'top'
      var value = document.body.offsetHeight - drawerElement.offsetHeight
    }

    // Save for be used in closeDrawer
    this.styleProp = styleProp

    drawerElement.style[styleProp] = value + 'px'
  }

  closeDrawer = () => {
    if (this.props.closeByBackdropClick === false) return

    this.props.onRequestClose()
  }

  render() {
    const { content, visible, placement, backdrop, className: aditionalClasses, onRequestClose, closeByBackdropClick, ...rest } = this.props

    const prefix = 'drawer'
    const classes = mapClassList({
      [`${prefix}--${placement}`]: true,
    })

    return (
      <Portal>
        {visible && backdrop && <div className="drawer__backdrop" onClick={this.closeDrawer} />}

        <div
          ref={this.drawerRef}
          className={`${prefix} ${classes} ${aditionalClasses} ${visible ? 'drawer--visible' : ''}`}
          {...rest}
        >
          {content}
        </div>
      </Portal>
    )
  }
}

Drawer.defaultProps = {
  className: '',
  placement: 'right',
  backdrop: true,
  closeByBackdropClick: true,
}

Drawer.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** The visibility state of drawer */
  visible: PropTypes.bool.isRequired,
  /** Drawer content */
  content: PropTypes.node.isRequired,
  /** Drawer placement */
  placement: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  /** Function that will be called when the user clicks outside of modal and in the future when pressing the esc key */
  onRequestClose: PropTypes.func.isRequired,
  /** Show a transparent background behind the drawer */
  backdrop: PropTypes.bool,
  /** Close the drawer when user click in the backdrop */
  closeByBackdropClick: PropTypes.bool
}
