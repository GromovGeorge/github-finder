import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, ...rest } = props
  return (
    <>
      <button className={cls.button} onClick={onClick} {...rest}>
        {children}
      </button>
    </>
  )
}
export default Button
