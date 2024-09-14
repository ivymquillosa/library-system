import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Adjust the import path as necessary
import ButtonIcon from "../atom/ButtonIcon";
import { cn } from "@/lib/utils";
import { FiMenu, FiHome, FiHeart, FiList, FiLayout, FiUpload, FiSettings } from "react-icons/fi";
import Divider from "../atom/Divider";


const menuItems =[
  {
      title:'Home',
      path:'/home',
      icon: <FiHome/>,
      disable: false
  },
  {
      title:'Favorites',
      path:'/favorites',
      icon: <FiHeart/>,
      disable: false

  },
  {
    title:'Categories',
    path:'/',
    icon: <FiList/>,
      disable: true

},
{
    title:'Book Request',
    path:'/',
    icon: <FiLayout/>,
      disable: true

},
{
  title:'Upload Book',
  path:'/',
  icon: <FiUpload/>,
      disable: true

},
]


const SideBar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const[curr, setCurr]=useState<number>(-1);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick =({index, path} : any)=>{
        setCurr(index)
        navigate(path)
    }

    const navClass = 'flex items-center text-xl gap-3 px-3 py-2.5 hover:bg-primary-300 hover:text-white active:bg-primary-600 rounded-sm'

  return (
    <div>
      {/* The collapsible menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        {/* Button to trigger the menu */}
        <SheetTrigger asChild>
          <ButtonIcon variant="ghost" color='default' className="hover:bg-transparent text-default-950 text-2xl p-0" onClick={() => setOpen(true)}>
            <FiMenu/>
          </ButtonIcon>
        </SheetTrigger>

        {/* The content of the collapsible menu */}
        <SheetContent side="left" className="w-72 p-4">
          <nav className="pt-6">
            <ul className="flex flex-col gap-3">
              { menuItems.map(({title, path, icon, disable}, index)=> {
                return(
                  <li 
                    key={index}
                    className={cn(navClass, disable ? '!pointer-events-none  !text-default-500' : '', index === curr || pathname === path ? 'bg-primary-500 text-white': 'text-default-950' )}
                    onClick={()=>handleClick({index, path})}>
                    {icon}
                    <Link className="text-base" to={path}>{title}</Link>
                  </li>
                )
              })}
              <Divider/>
              <li 
                className={cn(navClass,'!pointer-events-none !text-default-500' )}>
                <FiSettings/>
                <Link className="text-base" to={'/'}>{'Settings'}</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SideBar