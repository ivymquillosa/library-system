import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  return (
    <div className='flex'>
        <div className='flex-1'><Outlet/></div>
    </div>
  )
}

export default ProtectedRoute