import { useEffect, useState } from 'react'
import axios from 'axios'
import { IGithubUser } from 'app/types'
import { Header } from 'widgets/Header'
import { SearchField } from 'widgets/SearchField'
import { Container } from 'shared/ui/container'
import { Board } from 'entities/Board'

const API_URL = process.env.REACT_APP_API_URL

const HomePage = () => {
  const [user, setUser] = useState<IGithubUser | null>(null)

  const fetchUser = async (username: string = 'gromovgeorge') => {
    try {
      const URL = API_URL + username
      const res = await axios.get(URL)
      console.log(res)

      const user = res.data
      setUser(user)
    } catch (error) {
      throw new Error('Failed to find user')
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <Container>
        <Header />
        <SearchField isError={!user} onSubmit={fetchUser} />
        {user && <Board {...user} />}
      </Container>
    </>
  )
}

export default HomePage
