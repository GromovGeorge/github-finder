import { useTheme } from 'shared/hooks/useTheme'
import cls from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
  const { label, xLink, toggleTheme } = useTheme()

  return (
    <>
      <button className={cls.switcher} onClick={toggleTheme}>
        <label className={cls.label}>{label}</label>
        <svg className={cls.icon}>
          <use xlinkHref={xLink}></use>
        </svg>
      </button>
    </>
  )
}
export default ThemeSwitcher
