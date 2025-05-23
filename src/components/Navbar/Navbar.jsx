import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'

import logo from '../../assets/logo.png'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  // const sideMenu = useRef()
  
  
  // For scroll
useEffect(() => {
  const handleScroll = () => setSticky(window.scrollY > 100);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// For sidebar
// useEffect(() => {
//   if (sideMenu.current) {
//     if (sideBar) {
//       sideMenu.current.style.display = "block";
//       sideMenu.current.style.transition = "0.5s"
//       sideMenu.current.style.right = "0px";
//     } else {
//       sideMenu.current.style.right = "-200px";
//     }
//   }
// }, [sideBar]);



  return (
    <nav className ={`container contain ${sticky? 'dark-nav':''}`}>
      <img className='logo' src={logo} alt="edu_site logo" />
     <ul className={sideBar?'mobile-view':''}>
       <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
      <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
      <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
      <li><Link to='contact' smooth={true} offset={-260} duration={500} ><button className='btn'>Contact us</button></Link></li>
     </ul>
     <img onClick={() =>{setSideBar(!sideBar)}} className='menu-icon' src={menu_icon} alt="" />
    </nav>
  )
  
}

export default Navbar
