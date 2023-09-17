import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import "../homePageFront/styles/Navbar.css"
import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu , setToggleMenu] = React.useState(false)
  
  
  return (
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
       <img src={images.awallogo} style={{width:"300px"}} alt='logoimg'/>
    </div>
    <ul className='app__navbar-links'>
        <li className='p__opensans'><a className='a-tag' href='#home'>Home</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>About</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>Menu</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>Contact us</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>awards</a></li>
    </ul>
    <div className='app__navbar-login'>
    <ul className='app__navbar-links'>
        <a href='#shop' className='a-tag'>shop</a>
        <div />
        <a href='#login' className='a-tag'>login</a>
    </ul>
    </div>
  <div className='app__navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>


    
    {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__centre slide-bottom'>
      <MdOutlineRestaurantMenu fontSize={27} onClick={() => setToggleMenu(false)} />
      <div className='o'>
      <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><a className='a-tag' href='#home'>Home</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>About</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>Menu</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>Contact us</a></li>
        <li className='p__opensans'><a className='a-tag' href='#home'>awards</a></li>
      </ul>
      </div>
      </div>
    )}


    </div>
   </nav>
  )
}

export default Navbar