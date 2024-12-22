
import Loader from '@/components/Loader'
import { AuthContext } from '@/provider/AuthProvider'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <Loader></Loader>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute
