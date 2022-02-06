import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../components/Navbar";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="d">
        <Navbar />
        <h1 style={{ color: "red", marginTop: "0px" }}>
          Certificate & Acknowledgement
        </h1>
        <div
          style={{
            height: "600px",
            width: "700px",
            marginLeft: "350px",
            // marginBottom: "30px",
          }}
        >
          <Carousel>
            <div>
              <img src="/1.png" alt="image1" style={{ borderRadius: "10px" }} />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img src="/2.png" alt="image2" style={{ borderRadius: "10px" }} />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img src="/3.png" alt="image3" style={{ borderRadius: "10px" }} />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img src="/4.png" alt="image4" style={{ borderRadius: "10px" }} />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img src="/5.png" alt="image5" style={{ borderRadius: "10px" }} />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
