import React, { Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import About1 from "../../assets/img/about1.jpg"
import About2 from "../../assets/img/about2.jpg"
import { motion } from 'framer-motion';

const About = () => {
    


    const containerVariants = {
        hidden: { 
          opacity: 0, 
          x: '100vw',
          transition: {
            staggerChildren: 0.5,
          } 
        },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            type: 'spring',
            delay:0.5,
            duration:2.5,
            mass: 0.4,
            damping: 8,
            staggerChildren: 0.4,
            when: "beforeChildren",


          }
        },
      };

      const childVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        }
      }

      const buttonVariants = {
        visible: {
          x: [0, -20, 20, -20, 20, 0],
          transition: { delay: 2 }
          },
        hover: {
          scale: [1, 1.1, 1, 1.1, 1, 1.1],
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          transition: {
            duration: .5,
            yoyo:2.5
          }
        }
      }
      
      




  return (
    <Fragment>
        <Container className="AboutMian ms-5" fluid={true}>
            <Row>
                <Col sm={12} md={6} lg={6} >
                    <motion.h6 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    
                    
                    className="AboutTitle">JOIN THE EVENT</motion.h6>
                    <motion.h1
                     variants={containerVariants}
                     initial="hidden"
                     animate="visible"
                    
                    
                    >We Create and Turn Into Reality</motion.h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reprehenderit sint tempora at quasi saepe animi, eaque, perspiciatis odio deleniti nihil libero cupiditate pariatur quae! Facere ipsa officia fugit placeat.</p>
                    <a href=""  className="AboutLinkOne">Read More</a>
                    <motion.a 
                    variants={buttonVariants}
                    animate="visible"
                    whileHover="hover"
                     
                    
                    href="" className="AboutLinkTwo">Buy Ticket</motion.a>

                    
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