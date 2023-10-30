import React, { Fragment } from 'react'
import "../../assets/css/custom.css"
import "../../assets/css/bootstrap.min.css"
import { Container,Row,Col} from 'react-bootstrap'

const TopFixedBannner = () => {
  return (
    <Fragment>
        <Container fluid={true} className="TopFixedBanner p-0">
             <div className="TopBannerOverlay" >
                <Container  className="BannerContent">
                    <Row >
                        <Col sm={12} md={12} lg={12}>
                            <h1 className='BannerTitle'>Welcome our Website</h1>
                            <p className="BannerSubTitle">Lorem ipsum dolor sit amet.</p>
                            <a className='BannerLink' href=''>Details</a>
                          
                        
                        </Col>

                    </Row>
                </Container>


             </div>
        </Container>
    </Fragment>
  )
}

export default TopFixedBannner