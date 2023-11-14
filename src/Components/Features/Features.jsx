
import React, { Fragment } from 'react'
import { Container,Row,Col,Card,Button} from 'react-bootstrap'
import Music from "../../assets/img/musical-note.png"

const Features = () => {
  return (
     <Fragment>
    <Container fluid={true} className="FeaturesFixedBanner mt-5 p-0">
         <div className="FeaturesBannerOverlay" >
            <Container  className="BannerContent">
                <Row >
                    <Col sm="12" md="6" lg="3">
                      <Card className="MainCard" style={{ width: '15rem' }}>
                        <Card.Img className="img" variant="top" src={Music} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="info ">Go somewhere</Button>
                        </Card.Body>
                     </Card>


                    </Col>

                   
                    <Col sm="12" md="6" lg="3">
                      <Card className="MainCard" style={{ width: '15rem' }}>
                        <Card.Img className="img" variant="top" src={Music} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                    </Col>

                    <Col sm="12" md="6" lg="3">
                      <Card className="MainCard" style={{ width: '15rem' }}>
                        <Card.Img className="img" variant="top" src={Music}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>

                    </Col>

                    <Col sm="12" md="6" lg="3">
                      <Card className="MainCard" style={{ width: '15rem' }}>
                        <Card.Img className="img" variant="top" src={Music}s />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>

                    </Col>

                </Row>
            </Container>


         </div>
    </Container>
</Fragment>
  )
}

export default Features