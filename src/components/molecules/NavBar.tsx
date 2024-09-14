import SideBar from "./SideBar"
import librarylogo from '../../assets/librarybrand.png' 
import { FiUser } from "react-icons/fi";


const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-24 z-50 bg-white shadow-md px-7 flex items-center gap-4">
      <SideBar/>
      <div className="flex-1">
        <img className="h-11" src={librarylogo}/>
      </div>
      <FiUser className="text-2xl text-default-600"/>
      <span className="">User</span>
    </div>
  )
}

export default NavBar