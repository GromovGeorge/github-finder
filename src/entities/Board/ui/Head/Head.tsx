import { IGithubUser } from 'app/types'
import { FC } from 'react'

import cls from './Head.module.scss'

interface HeadProps extends IGithubUser {}

const Head: FC<HeadProps> = ({ avatar_url, name, login, bio, html_url }) => {
  return (
    <>
      <div className={cls.head}>
        <div className={cls.avatar}>
          <img className={cls.image} src={avatar_url} alt={login} />
        </div>
        <h2 className={cls.name}>{name}</h2>
        <h3 className={cls.username}>
          <a href={html_url} target='_blank' rel='noreferrer'>
            @{login}
          </a>
        </h3>
        <div className={`${cls.bio} ${bio ? '' : `${cls.empty}`}`}>
          Bio: {bio || 'This profile has no bio'}
        </div>
      </div>
    </>
  )
}
export default Head
