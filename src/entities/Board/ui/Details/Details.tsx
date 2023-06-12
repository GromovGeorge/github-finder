import { FC } from 'react'

import { IGithubUser } from 'app/types'
import DetailsItem from './DetailsItem'

import cls from './Details.module.scss'

interface DetailsProps
  extends Pick<
    IGithubUser,
    'blog' | 'company' | 'location' | 'twitter_username'
  > {}

const Details: FC<DetailsProps> = (props) => {
  const { location, blog, company, twitter_username } = props

  const items = [
    { id: 1, xLink: '/icons/sprite.svg#location', text: location },
    { id: 2, xLink: '/icons/sprite.svg#website', text: blog, isLink: true },
    { id: 3, xLink: '/icons/sprite.svg#company', text: company },
    { id: 4, xLink: '/icons/sprite.svg#twitter', text: twitter_username },
  ]

  return (
    <>
      <div className={cls.details}>
        <ul className={cls.details__list}>
          {items.map((item) => (
            <li key={item.id}>
              <DetailsItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default Details
