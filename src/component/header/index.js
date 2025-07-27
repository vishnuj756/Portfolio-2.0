
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assests/images/logo.png"
import color from '../../utils/color';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
export default function Header() {
  const links=[  { name: "HOME", path: "/" },
    { name: "ABOUT", path: "about-us" },

    { name: "PORTFOLIO", path: "portfolio" },
  
    { name: "CONTACT", path: "contact-us" }
  ]
  return (
    <>
       {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="pb-3" style={{height:"5rem",backgroundColor:"#070D1B"}}>
          <Container>
            <Navbar.Brand href="#" className='d-flex align-items-center'><img src={logo} alt=""  className='' style={{height:45,width:52}}/> <div className='d-flex gap-1'><h2 style={{color:color.primary}} className='fs-1'>V</h2> <h2 style={{color:color.white}} className='fs-1'>ishal</h2></div></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
             {
              links.map((item)=>{
                return(<>
                  <NavLink 
  to={item.path} 
  className="mx-2 text-decoration-none fs-6 p-1" 
  style={{ color: "white" }}>
  {item.name}
</NavLink>
                </>)
              })
             }
             <div className='d-flex align-items-center'>
            <div className='border-2 border-start mx-5' style={{height:15}}></div>
              <Icon icon="mingcute:phone-fill" className='fs-6 me-2' style={{color:color.white}}/>
              <h5 className='' style={{color:color.primary}}>+91 8871942880</h5>
             </div>
                
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
