import React from 'react'
import classNames from 'classnames'

// button size 
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

// button type
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// interface 
interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children: React.ReactNode,
  href: string
}

const Button: React.FC<BaseButtonProps> = props => {
  const {
    btnType,
    disabled,
    size,
    children,
    href
  } = props

  // 样式
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  // a标签属性的ref
  if (btnType === ButtonType.Link && href) {
    return (
      <a 
        className={classes}
        href={href}
      >
        { children }
      </a>
    )
  } else {
    return (
      <button 
        className={classes} 
        disabled={disabled}
      >
        { children }
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button