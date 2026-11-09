import { useAppSelector } from '../../../app/store'

export function useAuth() {
  return useAppSelector((state) => state.auth)
}