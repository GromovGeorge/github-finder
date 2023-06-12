import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Header.module.scss'

const Header = () => {
  return (
    <>
      <header className={cls.header}>
        <div className={cls.header__logo}>Github Finder</div>
        <ThemeSwitcher />
      </header>
    </>
  )
}
export default Header
