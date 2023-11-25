import React, { Fragment,useState } from 'react'

import { Container,Row,Col,Button, Modal} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"

import Poster from "../../assets/img/about1.jpg"
import { Player, BigPlayButton, ControlBar ,ReplayControl,ForwardControl,VolumeMenuButton} from 'video-react';


const TopFixedBannner = () => {

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
                            <h1 className='BannerTitle'>Welcome our Website</h1>
                            <p className="BannerSubTitle">Lorem ipsum dolor sit amet.</p>
                            <a className='BannerLink' href=''>Details</a>
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
                                <Button   variant="info" onClick={handleClose}>
                                    Close
                                </Button>                               
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