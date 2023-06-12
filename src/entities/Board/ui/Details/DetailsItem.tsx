import { FC } from 'react'
import cls from './Details.module.scss'

export interface DetailsItemProps {
  xLink: string
  text?: string | null
  isLink?: boolean
}

const DetailsItem: FC<DetailsItemProps> = ({ xLink, text, isLink }) => {
  const displayText = text || 'Not Available'
  let href = ''

  if (isLink) {
    href = text && text.startsWith('http') ? text : `https://${text}`
  }

  return (
    <>
      <div className={`${cls.item} ${text ? '' : `${cls.empty}`}`}>
        <svg className={cls.icon}>
          <use xlinkHref={xLink}></use>
        </svg>
        <div>
          {isLink && text ? (
            <a className='' href={href} target='_blank' rel='noreferrer'>
              {displayText}
            </a>
          ) : (
            displayText
          )}
        </div>
      </div>
    </>
  )
}
export default DetailsItem
