import React, { Fragment,useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'

import Star from '../Star/Star'


const Reviews = ({ onChange }) => {
    //const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
        onChange?.(newRating);
      };
     


  return (
    <Fragment>
          <Container   className="text-center mt-5 ">

            <h1 className="serviceMainTitle">Reviews</h1>
            <hr className="hr"></hr>
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={4}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <p>
                                  
                                 <span>

                                 { [1,2,3,4,5].map((value) =>(

                                
                                 
                                 <Star
                                     key={value}
                                     
                                     filled={value <= rating}
                                     onClick={() => changeRating(value)}
                                  
                                
                                
                                
                                />
                                ))}

                                        


                                
                                    
                                </span>   
                                    
                               </p>
                            </Card.Body>
                        </Card>

                        </Col>


                        <Col sm={12} md={4} lg={4}>

<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <p>
          
         <span>

         { [1,2,3,4,5].map((value) =>(

        
         
         <Star
             key={value}
             
             filled={value <= rating}
             onClick={() => changeRating(value)}
          
        
        
        
        />
        ))}

                


        
            
        </span>   
            
       </p>
    </Card.Body>
</Card>

</Col>
                    </Row>
                </Container>
          </Container>
    </Fragment>
  )
}

export default Reviews