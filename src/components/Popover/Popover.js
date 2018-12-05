import React from 'react'
import PropTypes from 'prop-types'
import { mapClassList } from '../../Utils'
import Portal from '../Portal/Portal'

/**
 * Popover component.
 *
 * @since 0.2.0
 * @see https://httpiago.github.io/ios-theme-toolkit/#/components/Popover
 *
 * @todo Make more keyboard-friendly navigation
 */
export default class Popover extends React.Component {
  state = {
    isOpen: false,

    popoverPosition: { top: 0, left: 0},
    arrowPosition: { top: 0, left: 0}
  }

  childrenRef = React.createRef() // Referência ao elemento filho
  popoverRef = React.createRef() // Referência ao popover criado na tela

  componentDidMount() {
    if (this.props.trigger === 'hover') {
      var t = null
      this.childrenRef.current.addEventListener('mouseenter', this.me = () => {
        t = setTimeout(this.open, this.props.mouseEnterDelay)
      })
      this.childrenRef.current.addEventListener('mouseleave', this.ml = () => {
        clearTimeout(t)
        this.close()
      })
    } else {
      document.addEventListener('click', this.handleClick)
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
    this.childrenRef.current.removeEventListener('mouseenter', this.me)
    this.childrenRef.current.removeEventListener('mouseleave', this.ml)
  }

  /**
   * Mostrar popover na tela.
   */
  open = () => {
    this.setState({ isOpen: true }, this.calcPopoverPosition)

    this.popoverRef.current.getElementsByClassName('popover__content')[0].focus()
  }

  /**
   * Ocultar popover na tela.
   */
  close = () => {
    this.setState({ isOpen: false })
  }

  /**
   * Alterar visibilidade com base no estado anterior.
   */
  troggleVisibility = () => {
    let { isOpen } = this.state

    if (isOpen === true) this.close()
    else this.open()
  }

  /**
   * Calcular a posição do popover baseado no elemento filho.
   */
  calcPopoverPosition = () => {
    const child = this.childrenRef.current.getBoundingClientRect()
    const pop = this.popoverRef.current.getBoundingClientRect()

    const childWidthMiddle = child.left + (child.width / 2)
    const childHeightMiddle = child.top + (child.height / 2)
    const maxLeft = window.innerWidth - pop.width - 4 // Impedir que o popover ultrapasse os limites da tela

    switch (this.props.placement) {
      // Popover posicionado abaixo do elemento
      case 'bottom': {
        var popoverPosition = {
          top: (window.scrollY + child.top + child.height + 10),
          left: window.scrollX + Math.max(4, Math.min(maxLeft, (childWidthMiddle - (pop.width / 2))))
        }
        var arrowPosition = {
          top: -(13 / 2),
          left: childWidthMiddle - popoverPosition.left
        }
        break;
      }

      // Popover posicionado acima do elemento
      case 'top': {
        var popoverPosition = {
          top: (window.scrollY + child.top - pop.height - 5),
          left: window.scrollX + Math.max(4, Math.min(maxLeft, (childWidthMiddle - (pop.width / 2))))
        }
        var arrowPosition = {
          top: pop.height - (20 / 2),
          left: childWidthMiddle - popoverPosition.left
        }
        break;
      }

      // Popover posicionado do lado direito do elemento
      case 'right': {
        var popoverPosition = {
          top: (window.scrollY + childHeightMiddle - (pop.height / 2) + 2),
          left: (window.scrollX + child.left + child.width + 3)
        }
        var arrowPosition = {
          top: (pop.height / 2) - (14 / 2),
          left: 4
        }
        break;
      }

      // Popover posicionado do lado esquerdo do elemento
      case 'left': {
        var popoverPosition = {
          top: (window.scrollY + childHeightMiddle - (pop.height / 2) + 2),
          left: (window.scrollX + child.left - pop.width - 3)
        }
        var arrowPosition = {
          top: (pop.height / 2) - (14 / 2),
          left: pop.width
        }
        break;
      }

      default: break;
    }

    this.setState({
      popoverPosition,
      arrowPosition
    })
  }

  /**
   * Função que é chamada em qualquer clique do usuário e checa o que deve ser feito,
   * se deve abrir ou fechar o popover.
   */
  handleClick = (event) => {
    if (this.childrenRef.current.contains(event.target)) {
      // Click no this.childrenRef
      this.troggleVisibility()
    } else {
      // Click fora this.childrenRef

      // Checar se o click foi dentro do popover e se a propriedade "closeOnInnerClick" for true, fechar o popover
      if (
        this.popoverRef.current && this.popoverRef.current.contains(event.target)
        && !this.props.closeOnInnerClick
      ) return;

      this.close()
    }
  }

  render() {
    const { children, content, backdrop, placement, withoutArrow, color, className: aditionalClasses, trigger, closeOnInnerClick, mouseEnterDelay, ...rest } = this.props

    const prefix = 'popover'
    const classes = mapClassList({
      [`${prefix}--${placement}`]: placement,
      [`${prefix}--${color}`]: color,
    })

    const { isOpen, popoverPosition, arrowPosition } = this.state

    return (
      <React.Fragment>
        <span ref={this.childrenRef}>
          {children}
        </span>

        {isOpen && (
          <Portal>
            {backdrop && (<div className="popover__backdrop" />)}

            <div
              ref={this.popoverRef}
              className={`${prefix} ${classes} ${aditionalClasses}`}
              style={popoverPosition}
              {...rest}
            >
              {!withoutArrow && (<span className="popover__arrow" style={arrowPosition} />)}
              <div className="popover__content" tabIndex="-1">{content}</div>
            </div>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}

Popover.defaultProps = {
  className: '',
  backdrop: false,
  trigger: 'click',
  mouseEnterDelay: 250,
  placement: 'bottom',
  closeOnInnerClick: false,
  color: 'default',
  withoutArrow: false
}

Popover.propTypes = {
  /** Aditional classes. */
  className: PropTypes.string,
  /** Element the will be used to trigger the popover */
  children: PropTypes.node.isRequired,
  /** The content of popover (anything that can be rendered by React) */
  content: PropTypes.node.isRequired,
  /** Show a transparent background behind the popover */
  backdrop: PropTypes.bool,
  /** The trigger */
  trigger: PropTypes.oneOf([ 'click', 'hover' ]),
  /**  */
  mouseEnterDelay: PropTypes.number,
  /** Popover position */
  placement: PropTypes.oneOf([ 'top', 'left', 'bottom', 'right']),
  /** Close when user click inside popover */
  closeOnInnerClick: PropTypes.bool,
  /** Popover color */
  color: PropTypes.oneOf([ 'default', 'blue', 'red', 'green', 'yellow', 'gray', 'black' ]),
}
