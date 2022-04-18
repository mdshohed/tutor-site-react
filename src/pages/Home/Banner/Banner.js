import Slider from "react-slick";
import React, { Component } from "react";
import './Banner.css'

export default class SimpleSlider extends Component {
  render() {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
        />
      );
    }
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
        />
      );
    }
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="container mt-3">
        <Slider {...settings}>
          <div className="banner">
            <div className="text-center d-flex banner p-3">
              <div className="">
                <h5>Welcome to Programming tutor</h5>
                <p>This is a top rated course our can see course details form service section</p>
                <button className="btn text-white" id="custom-btn">See Course</button>
              </div>
              <img className='mx-auto' src={"https://img-c.udemycdn.com/course/240x135/437398_46c3_10.jpg"} alt="" />
            </div>
          </div>
          <div>
            <div className="text-center banner p-3">
              <div className="">
                <h5>Welcome to Programming tutor</h5>
                <p>This is a top rated course our can see course details form service section</p>
                <button className="btn text-white" id="custom-btn">See Course</button>
              </div>
              <img className='mx-auto' src={"https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg"} alt="" />
            </div>
          </div>
          <div>
            <div className="text-center banner p-3">
              <div className="">
                <h5>Welcome to Programming tutor</h5>
                <p>This is a top rated course our can see course details form service section</p>
                <button className="btn text-white" id="custom-btn">See Course</button>
              </div>
              <img className='mx-auto' src={"https://img-c.udemycdn.com/course/240x135/82778_94fa_6.jpg"} alt="" />
            </div>
          </div>
          <div>
            <div className="text-center banner p-3">
              <div className="">
                <h5>Welcome to Programming tutor</h5>
                <p>This is a top rated course our can see course details form service section</p>
                <button className="btn text-white" id="custom-btn">See Course</button>
              </div>
              <img className='mx-auto' src={"https://img-c.udemycdn.com/course/240x135/570072_f3e5_2.jpg"} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

