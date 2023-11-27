import React from 'react'
import { Fragment } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { BarChart,XAxis,Bar, ResponsiveContainer,Tooltip } from 'recharts';



const data = [
    {
      name: "marraige",
      program: 20

    },
    {
      name: "birthday",
      program: 40
  
    },
    {
      name: "yellow",
      program: 20
   
    },
    {
      name: "event",
      program: 27
    },
    {
      name: "engagement",
      program: 18
   
    },
    {
      name: "baby shower",
      Videos: 23
   
    },
    {
      name: "propose",
      program: 34
   
    }
  ];

const Analysis = () => {
  return (
    <Fragment>
        <Container fluid={true} className="FeaturesFixedBanner mt-5 p-0">
           <div className="FeaturesBannerOverlay" >
            <Container className='SummaryMain'>
                <Row>
                     <Col  style={{width:'50%', height:'350px'}} sm={12} md={6} lg={6}>
                        
                           <ResponsiveContainer>
                                    <BarChart  width={50} height={350} data={data}>
                                    <XAxis dataKey="name"/>
                                    <Tooltip/>
                                    <Bar dataKey="program" fill="brown" />

                                    </BarChart>

                            </ResponsiveContainer> 
                          
                     



                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <h1>describe</h1>
                        
                    </Col>
                </Row>
            </Container>    

            </div>

        </Container>
    </Fragment>
  )
}

export default Analysis