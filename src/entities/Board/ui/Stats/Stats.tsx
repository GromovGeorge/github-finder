import { FC } from 'react'
import { IGithubUser } from 'app/types'

import cls from './Stats.module.scss'

interface StatsProps
  extends Pick<IGithubUser, 'public_repos' | 'followers' | 'following'> {}

const Stats: FC<StatsProps> = ({ public_repos, following, followers }) => {
  const items = [
    {
      id: 1,
      title: 'Repositories',
      number: public_repos,
    },
    {
      id: 2,
      title: 'Following',
      number: following,
    },
    {
      id: 3,
      title: 'Followers',
      number: followers,
    },
  ]

  return (
    <>
      <div className={cls.stats}>
        {items.map((item) => (
          <div className='stats-column' key={item.id}>
            <div className='stats__title text-xs font-bold'>{item.title}</div>
            <div className='stats__number text-xl font-bold'>{item.number}</div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Stats
