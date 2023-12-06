import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from 'react';
import { Row,Col, Container } from 'react-bootstrap'
import Slider from "react-slick";

//arrow

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "brown" }}
        onClick={onClick}
      />
    );
  }

  
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "brown" }}
        onClick={onClick}
      />
    );
  }
  





const settings= {
    autoplaySpeed:500,
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };
  

const Testimonial = () => {


  return (
    <Fragment>
         <Container   className="text-center mt-5 ">

            <h1 className="serviceMainTitle">What client Say</h1>
            <hr className="hr"></hr>
            <Slider {...settings}>

            <div className="studentSection">

                <img className="circleImg " src=""/>

                <h1 className="studentName">Nader Nihal Neep</h1>
                <h4 className="studentTitle">Web Developer</h4>
                <p className="studentDescription" >"Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."</p>
              </div>

              <div className="studentSection">

                <img className="circleImg " src=""/>

                <h1 className="studentName">Nader Nihal Neep</h1>
                <h4 className="studentTitle">Web Developer</h4>
                <p className="studentDescription" >"Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."</p>
            </div>

            <div className="studentSection">

            <img className="circleImg " src=""/>

            <h1 className="studentName">Nader Nihal Neep</h1>
            <h4 className="studentTitle">Web Developer</h4>
            <p className="studentDescription" >"Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."</p>
        - </div>
            <div className="studentSection">

            <img className="circleImg " src=""/>

            <h1 className="studentName">Nader Nihal Neep</h1>
            <h4 className="studentTitle">Web Developer</h4>
            <p className="studentDescription" >"Our group is working with this team for more than 2 years now. They are undoubtedly talented and we are more than happy to work with them."</p>
            </div>

            </Slider> 

            

         </Container>   


    </Fragment>
  )
}

export default Testimonial