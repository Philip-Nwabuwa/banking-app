import React from 'react'

interface ButtonProps {
  onClick?: () => void
  text: string
  iconClass?: string
  position?: string
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  iconClass,
  position,
  disabled,
  className,
}) => {
  return (
    <button
      type="button"
      className="btn btn-lg btn-primary"
      onClick={onClick}
      disabled={disabled}
    >
      {position === 'me-1' ? (
        <>
          <i className={`ki-outline ${iconClass} fs-4 ${position}`}></i>
          {text}
        </>
      ) : (
        <>
          {text}
          <i className={`ki-outline ${iconClass} fs-4 ${position}`}></i>
        </>
      )}
    </button>
  )
}

export default Button
