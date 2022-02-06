import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../components/Navbar";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="d">
        <Navbar />
        <h1 style={{ color: "red" }}>Certifigates & Acknowledgement</h1>
        <div
          style={{
            height: "500px",
            width: "500px",
            margin: "auto",
            marginTop: "80px",
          }}
        >
          <Carousel>
            <div>
              <img src="/1.png" alt="image1" />
              <p className="legend">Image 1</p>
            </div>
            <div>
              <img src="/2.png" alt="image2" />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img src="/3.png" alt="image3" />
              <p className="legend">Image 3</p>
            </div>
            <div>
              <img src="/4.png" alt="image4" />
              <p className="legend">Image 4</p>
            </div>
            <div>
              <img src="/5.png" alt="image5" />
              <p className="legend">Image 5</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import { RWebShare } from "react-web-share";

// export default function WebShareGfg() {
//   return (
//     <div>
//       <h1>NextJs Web Share - GeeksforGeeks</h1>
//       <RWebShare
//         data={{
//           text: "Web Share - GfG",
//           url: "http://localhost:3000",
//           title: "GfG",
//         }}
//         onClick={() => console.log("shared successfully!")}
//       >
//         <button>Share on Web</button>
//       </RWebShare>
//     </div>
//   );
// }
