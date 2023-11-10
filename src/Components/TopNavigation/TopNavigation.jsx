import React, { Fragment ,useState,useEffect} from 'react'
import "../../assets/css/custom.css"
import "../../assets/css/bootstrap.min.css"
import { Container,Nav,Navbar} from 'react-bootstrap'

const TopNavigation = () => {
    const [scrollPosition, setScrollPosition] = useState(

    {
        navBarTitle:"navTitle",
        navItem:"navItem",
        navBackground:"navBackground"

    }

    );

    
    const onScroll=()=>{
       if(window.scrollY>100) {

        setScrollPosition({navBarTitle:'navTitleScroll',  navBackground:'navBackgroundScroll', navItem:'navBarItemScroll'})
          
         
       }else if(window.scrollY<100){
        setScrollPosition({navBarTitle:'navTitle',  navBackground:'navBackground', navItem:'navItem'})

       }
        
    }

    useEffect(()=>{

        window.addEventListener("scroll", onScroll) 



     },[])


  return (
    <Fragment>
    <Navbar className={scrollPosition.navBackground} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className={scrollPosition.navBarTitle} href="#home">Infinity </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className=" navBarMain me-auto">
            <Nav.Link className={scrollPosition.navItem} href="#home">Home</Nav.Link>
            <Nav.Link className={scrollPosition.navItem} href="#link">About</Nav.Link>
            <Nav.Link className={scrollPosition.navItem} href="#home">Gallery</Nav.Link>
            <Nav.Link className={scrollPosition.navItem} href="#link">Blog</Nav.Link>
            <Nav.Link className={scrollPosition.navItem} href="#link">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default TopNavigation