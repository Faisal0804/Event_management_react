import React, { Fragment,useState } from 'react'
import { Container, Row,Col,Form,InputGroup,Button} from 'react-bootstrap'
import Iframe from 'react-iframe'


const Contact = () => {

    const [user, setInputs] = useState({
        firstname:"",
        lastname:"",

        username:"",
        email:"",
        text:""
  });
const handleChange = (event) => {
 const name = event.target.name;
 const value = event.target.value;
setInputs({
...user,[name]:value
 })
};

const handleSubmit = (event) => {
 event.preventDefault();
alert(JSON.stringify(user));

};
  return (
    <Fragment>
        <Container>
        <h1 className="serviceMainTitle">Quick Contact</h1>
        <hr className="hr"></hr>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.184943131785!2d91.87125995301831!3d24.891672445519884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab2b25be8105%3A0x4e97a32cf9300bf4!2sInfinity%20Flame%20Soft!5e0!3m2!1sen!2sbd!4v1696611320909!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>

                  
                </Col>

                <Col sm={12} md={6} lg={6}>

                <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                               type="text"
                               name="firstname"
                               onChange={handleChange}

                
                            />
                           
                       </Form.Group>
                       <Form.Group >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                             
                              type="text"
                              name="lastname"
                              onChange={handleChange}
                
                            />
                          
                       </Form.Group>
                       <Form.Group >
                            <Form.Label>user name</Form.Label>
                            <InputGroup >
                          <InputGroup.Text >@</InputGroup.Text>
                            <Form.Control
                               type="text"
                               name="username"
                               onChange={handleChange}
                
                            />
                           
                            </InputGroup> 
                       </Form.Group>

                       <Form.Group >
                            <Form.Label>email</Form.Label>
                            <Form.Control
                               type='email'
                               name="email"
                               onChange={handleChange}
                               
                
                            />
                         
                       </Form.Group>

                       <Form.Group >
                            <Form.Label>your text</Form.Label>
                            <Form.Control
                               type="text"
                               name="text"
                               as="textarea" rows="3"
                               onChange={handleChange}
                
                            />
                         
                       </Form.Group>
                       <Button className="btn-contact d-inline-block mt-3 ms-0px;" variant="info"  type="submit">
                         Submit
                      </Button>

                        </Form>
                  
                </Col>
            </Row>
        </Container>
        </Container>
    </Fragment>
  )
}

export default Contact