import React, { Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import About1 from "../../assets/img/about1.jpg"
import About2 from "../../assets/img/about2.jpg"

const About = () => {
  return (
    <Fragment>
        <Container className="AboutMian ms-5" fluid={true}>
            <Row>
                <Col sm={12} md={6} lg={6} >
                    <h6 className="AboutTitle">JOIN THE EVENT</h6>
                    <h1>We Create and Turn Into Reality</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit sint tempora at quasi saepe animi, eaque, perspiciatis odio deleniti nihil libero cupiditate pariatur quae! Facere ipsa officia fugit placeat.</p>
                    <a href=""  className="AboutLinkOne">Read More</a>
                    <a href="" className="AboutLinkTwo">Buy Ticket</a>

                    
                </Col>
                <Col sm={12} md={6} lg={6} >
                  
                    <img  src={About1} alt="About1" />
                    <img src={About2} alt="About2" />
                    <a href=""></a>
                    
                   
                </Col>

            </Row>

        </Container>
    </Fragment>
  )
}

export default About