import React, { Fragment,useState } from 'react'

import { Container,Row,Col,Button, Modal} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"

import Poster from "../../assets/img/about1.jpg"
import { Player, BigPlayButton, ControlBar ,ReplayControl,ForwardControl,VolumeMenuButton} from 'video-react';
import { motion } from "framer-motion"

const TopFixedBannner = () => {

    const buttonVariants = {
        // visible: {
        //   x: [0, -20, 20, -20, 20, 0],
        //   transition: { delay: 2 }
        // },
        hover: {
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
          transition: {
            duration: .5
          }
        }
      }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
        <Container fluid={true} className="TopFixedBanner p-0">
             <div className="TopBannerOverlay" >
                <Container  className="BannerContent">
                    <Row >
                        <Col sm={12} md={12} lg={12}>
                            <motion.h1 className='BannerTitle'
                               initial={{ opacity:0,x: '-100vw' }}
                               animate={{ opacity: 5,x: 0 ,fontSize: 50, color: '#ff2994'}}
                               transition={{ delay: .2, duration: 2.5 }}
                            
                            
                            >Welcome our Website
                            
                            </motion.h1>
                            <motion.p 

                              variants={buttonVariants}
                              whileHover="hover"
                            
                            className="BannerSubTitle">Lorem ipsum dolor sit amet.</motion.p>
                            <motion.a 
                              whileHover={{ 
                                scale: 1.5, 
                                textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)",
                            }}
                            
                            className='BannerLink' href=''>Details</motion.a>
                            <p className="mt-2"><FontAwesomeIcon className="playBtn" onClick={handleShow}   icon={faPlayCircle} /></p>

                            <Modal size='sm'  show={show} onHide={handleClose} animation={false}>
            
                                <Modal.Body>
                                <Player  
                                     poster={Poster }               
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                    <BigPlayButton position="center" />
                                    <ControlBar autoHide={false}>                               
                                        <ReplayControl seconds={30} order={2.3} />
                                        <ForwardControl seconds={30} order={3.3} />                        
                                    </ControlBar>
                              </Player>
                                </Modal.Body>
                                <Modal.Footer>
                                <button   onClick={handleClose}
                                
                  s              
                                           
                                                                            
                                >
                                    Close
                                </button>                               
                                </Modal.Footer>
                            </Modal>
                                                
                        
                        </Col>

                    </Row>
                </Container>


             </div>

             
       
        </Container>
    </Fragment>
  )
}

export default TopFixedBannner