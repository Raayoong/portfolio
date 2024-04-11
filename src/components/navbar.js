import Profile from "../assets/rc_laptop.png"
import Github from "../assets/github-fill.svg"
import Facebook from "../assets/facebook-circle-fill.svg"
import Linkedin from "../assets/linkedin-box-fill.svg"
import Google from "../assets/google-fill.svg"
import MenuIcon from "../assets/menu-line.svg"
import {useState, useRef} from "react";


const Navbar = () => {
    const menus = ['Home', 'About', 'Skills', 'Contact'];
    const smIcons = [Github, Facebook,Linkedin,Google];
    const icons = smIcons.map((icon) =>(
                            
        <img className="w-[28px] rounded-full" src={icon} alt="" />  
 ))

    const socialRef = useRef();
    const profileRef = useRef();
    const menuIconRef = useRef();
    const menuRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
        window.addEventListener("click", (e)=>{
            if(profileRef.current !== e.target && socialRef.current !== e.target){
                setIsOpen(false)
            }
            
            if(menuIconRef.current !== e.target && menuRef.current !== e.target){
                setMenuIsOpen(false)
            } 
            
        })
    return ( 
        <div className="bg-blue-950 flex items-center p-2 justify-between fixed top-0 w-full z-50">
            <div className="logo">
                <img onClick={()=>{
                    setIsOpen(!isOpen)}} className="max-w-12 rounded-full cursor-pointer bg-blue-700 " src={Profile} alt="" ref={profileRef} />
            </div>
            <div className="navmenu hidden lg:flex">
                <ul className="flex gap-12 mx-4 text-blue-200">
                    {
                        menus.map((menu) => (
                        <li key={menu}><a className="font-semibold" href={`#${menu}`}>{menu}</a></li>
                    )
                        
                    )}
                </ul>
            </div>
            {/* open menu */}
            {
                menuIsOpen &&
                <div className="navmenu absolute lg:hidden rounded-lg bg-blue-950 p-4 -bottom-[17.3rem] right-1" ref={menuRef}>
                <ul className="flex flex-col gap-12 mx-4 text-blue-200">
                    {
                        menus.map((menu) => (
                        <li key={menu}><a className="font-semibold" href={`#${menu}`}>{menu}</a></li>
                    )
                        
                    )}
                </ul>
            </div>
            }
            
            { isOpen &&
                <div className="absolute -bottom-[12.3rem] drop-shadow-2xl left-1" ref={socialRef}>
                <div className="text-blue-50 flex flex-row gap-8">
                <ul className="flex flex-col gap-4 bg-blue-950 rounded-lg p-4">
                            <li ><a href=" " className="flex items-center gap-2 font-semibold text-blue-200 tracking-wide">{icons[0]}Github</a></li>
                            <li><a href=" " className="flex items-center gap-2 font-semibold text-blue-200 tracking-wide">{icons[1]}Facebook</a></li>
                            <li><a href=" " className="flex items-center gap-2 font-semibold text-blue-200 tracking-wide">{icons[2]}LinkedIn</a></li>
                            <li><a href=" " className="flex items-center gap-2 font-semibold text-blue-200 tracking-wide">{icons[3]}Gmail</a></li>
                </ul>
                
                </div>
            </div>
            }
            <div className="menu-icon lg:hidden">
                <img className="w-[28px]" src={MenuIcon} alt="" onClick={()=>{
                    setMenuIsOpen(!menuIsOpen)
                }} ref={menuIconRef}/>
            </div>
            
        </div>
     );
}
 
export default Navbar;