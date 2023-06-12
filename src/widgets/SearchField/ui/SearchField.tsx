import { FC } from 'react'
import { Button } from 'shared/ui/button'
import cls from './SearchField.module.scss'

interface SearchFieldProps {
  isError: boolean
  onSubmit: (text: string) => void
}

interface IFormField {
  username: HTMLInputElement
}

const SearchField: FC<SearchFieldProps> = ({ isError, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & IFormField>) => {
    e.preventDefault()
    const text = e.currentTarget.username.value

    console.log(text)

    if (text.trim()) {
      onSubmit(text)
      e.currentTarget.reset()
    }
  }

  return (
    <>
      <form className={cls.form} onSubmit={handleSubmit} autoComplete='off'>
        <div className={cls.form__wrapper}>
          <svg className={cls.form__icon}>
            <use xlinkHref='/icons/sprite.svg#search'></use>
          </svg>
          <input
            className={cls.form__field}
            type='text'
            name='username'
            id='search'
            placeholder='Search user'
          />

          {isError && <div className={cls.form__error}>No Result</div>}
          <Button type='submit'>Search</Button>
        </div>
      </form>
    </>
  )
}
export default SearchField
