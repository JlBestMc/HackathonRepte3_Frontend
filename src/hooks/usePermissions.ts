import { useMemo } from 'react'
import type { UserRoleType } from '@/types/interfaces'

type UsePermissionsReturn = {
  isAuthenticated: boolean
  isPending: boolean
  canAccess: (allowed: UserRoleType[]) => boolean
}

// Minimal stub: considers a default role 'user' and authenticated = true.
// Replace with real auth logic when available.
export function usePermissions(): UsePermissionsReturn {
  const currentRole: UserRoleType = 'user'
  const isAuthenticated = true
  const isPending = false

  const canAccess = useMemo(() => {
    return (allowed: UserRoleType[]) =>
      !allowed?.length || allowed.includes(currentRole)
  }, [currentRole])

  return { isAuthenticated, isPending, canAccess }
}

export default usePermissions
