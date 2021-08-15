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

// 将button上面的属性进行获取包装
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = props => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  // 样式
  const classes = classNames('btn', className, {
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
        {...restProps}
      >
        { children }
      </a>
    )
  } else {
    return (
      <button 
        className={classes} 
        disabled={disabled}
        {...restProps}
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