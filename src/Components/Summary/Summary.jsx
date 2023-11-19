import React, { Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Summary = () => {
  return (
    <Fragment>
        <Container fluid={true} className="FeaturesFixedBanner mt-5 p-0">
        <div className="FeaturesBannerOverlay" >
            <Container className='SummaryMain'>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div>
                            <img src="" alt=""/>
                            <h4 className='SummaryCount'>
                            <CountUp start={0} end={250}>
                                {({ countUpRef, start }) => (
                                     <VisibilitySensor onChange={start} delayedCall >
                                  
                                    <span ref={countUpRef} />
                                    </VisibilitySensor>
                                   
                                  
                                )}
                          </CountUp>


                          + </h4>
                            <p className='SummaryDesk'>Total Topics</p>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={3}>
                        <div>
                            <img src="" alt=""/>
                            <h4 className='SummaryCount'>
                            <CountUp start={0} end={280}>
                                {({ countUpRef, start }) => (
                                     <VisibilitySensor onChange={start} delayedCall >
                                  
                                    <span ref={countUpRef} />
                                    </VisibilitySensor>
                                   
                                  
                                )}
                          </CountUp>


                          + 


                            </h4>
                            <p className='SummaryDesk' >Total Topics</p>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={3}>
                        <div>
                            <img src="" alt=""/>
                            <h4 className='SummaryCount'>
                            <CountUp start={0} end={150}>
                                {({ countUpRef, start }) => (
                                     <VisibilitySensor onChange={start} delayedCall >
                                  
                                    <span ref={countUpRef} />
                                    </VisibilitySensor>
                                   
                                  
                                )}
                          </CountUp>


                          + 


                            </h4>
                            <p className='SummaryDesk'>Total Topics</p>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={3}>
                        <div>
                            <img src="" alt=""/>
                            <h4 className='SummaryCount'>

                            <CountUp start={0} end={100}>
                                {({ countUpRef, start }) => (
                                     <VisibilitySensor onChange={start} delayedCall >
                                  
                                    <span ref={countUpRef} />
                                    </VisibilitySensor>
                                   
                                  
                                )}
                          </CountUp>


                          + 

                            </h4>
                            <p className='SummaryDesk'>Total Topics</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>    

        </Container>
        
       
    </Fragment>
  )
}

export default Summary