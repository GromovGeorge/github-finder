import { FC } from 'react'
import { IGithubUser } from 'app/types'

import cls from './Board.module.scss'
import Details from '../Details/Details'
import Head from '../Head/Head'
import Stats from '../Stats/Stats'

interface BoardProps extends IGithubUser {}

const Board: FC<BoardProps> = (props) => {
  console.log(props)

  return (
    <>
      <div className={cls.board}>
        <Head {...props} />
        <Stats {...props} />
        <Details {...props} />
      </div>
    </>
  )
}
export default Board
