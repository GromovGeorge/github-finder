import { useState } from 'react'

type CallBackType = (username: string) => Promise<void>
type ArgsType = string
type ReturnType = [CallBackType, boolean, boolean]

export const useFetch = (callback: CallBackType): ReturnType => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetching = async (username: ArgsType) => {
    try {
      setIsLoading(true)
      await callback(username)
    } catch (e: unknown) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, isError]
}