import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/molecules/NavBar'
import Footer from './components/molecules/Footer'

import { DataProvider } from './contexts/DataContext'
import ProtectedRoute from './pages/protected-route/ProtectedRoute'
import Home from './pages/home/Home'
import Docs from './pages/docs/Docs'
import Favorites from './pages/favorites/Favorites'
import Divider from './components/atom/Divider'
import { PaginationDemo } from './components/molecules/Pigination'

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/docs' element={<Docs/>}/>
            <Route path='*' element={<Navigate to='/'/>} />
          </Route>
        </Routes>
        <PaginationDemo />
        <Divider className='mt-7'/>
        <Footer content='All Rights Reserved &copy; 2024'/>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
