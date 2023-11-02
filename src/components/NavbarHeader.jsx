
import { Button, Navbar } from 'flowbite-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function NavbarHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Navbar fluid className='shadow'>
      <Navbar.Brand href="/">
        <img src="/atrix-logo.png" className="" width={150} alt="Flowbite React Logo" />
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='mr-2' onClick={()=> navigate('/newsfeed')}>News Feed</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to='/'>

        <Navbar.Link active={location.pathname =='/'?true:false}>
          Home
        </Navbar.Link>
        </NavLink>
        <NavLink to='/aboutus'>

        <Navbar.Link active={location.pathname =='/aboutus'?true:false}>About Us</Navbar.Link>
        </NavLink>
        <NavLink to='/contactus'>

        <Navbar.Link active={location.pathname =='/contactus'?true:false}>Contact Us</Navbar.Link>
        </NavLink>

        <NavLink to='/newsfeed'>
        <Navbar.Link active={location.pathname =='/newsfeed'?true:false}>News Feed</Navbar.Link>
        </NavLink>
        
      </Navbar.Collapse>
    </Navbar>
  )
}


