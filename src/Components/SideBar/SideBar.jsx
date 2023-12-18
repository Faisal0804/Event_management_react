import React, { Fragment } from 'react'
import { Container,Nav } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';


const SideBar = () => {
  return (
    <Fragment>
     <Container fluid={true} className="p-0">  
        
    <Menu>
    <Nav  >    
    <Nav.Item>
        <Nav.Link className="bm-item"  href="#/home">
         Home
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item"  href="#/home">
         Home
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item" href="#">
         Home
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item"  href="#">
         Home
        </Nav.Link>
    </Nav.Item>
    </Nav>
    </Menu>
    </Container>
  
    </Fragment>
  )
}

export default SideBar