import React from 'react'
import FNDTheme from '../../theme'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary' | 'error' | 'base'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'larger'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  color = 'base',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const colorClass = FNDTheme.button.color[color]
  const sizeClass = FNDTheme.button.size[size]
  return (
    <button
      type='button'
      className={['text-white', colorClass, sizeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
