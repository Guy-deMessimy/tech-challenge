import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// styles
import "./style.scss";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="gallery">
        <h1 className="title_gallery">The Royal's Asset Gallery</h1>
        <div className="carousel">
          <Carousel
            width="50%"
            showArrows={true}
            centerMode={false}
            autoFocus={true}
            autoPlay={true}
            dynamicHeight={false}
          >
            <div>
              <img src="/images/armor.jpg" alt="" />
              <p className="legend">Armors</p>
            </div>
            <div>
              <img src="/images/cannon.jpg" alt="" />
              <p className="legend">Cannons</p>
            </div>
            <div>
              <img src="/images/castle.jpg" alt="" />
              <p className="legend">Castles</p>
            </div>
            <div>
              <img src="/images/guard.jpg" alt="" />
              <p className="legend">Guards</p>
            </div>

            <div>
              <img src="/images/livestock.jpg" alt="" />
              <p className="legend">Livestock</p>
            </div>
            <div>
              <img src="/images/stable.jpg" alt="" />
              <p className="legend">Stables</p>
            </div>
            <div>
              <img src="/images/wagon.jpg" alt="" />
              <p className="legend">Wagons</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;
