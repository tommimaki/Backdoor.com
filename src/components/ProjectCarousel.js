import React from "react";
import { Carousel } from "react-responsive-carousel";

const ProjectCarousel = () => {
  return (
    <Carousel
      showArrows
      showThumbs={true}
      showStatus={true}
      showIndicators={false}
      infiniteLoop
      autoPlay
      interval={3000}
      transitionTime={500}
    >
      <div>
        <img src="https://via.placeholder.com/300" alt="Project 1" />
        <p className="legend">Project 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/300" alt="Project 2" />
        <p className="legend">Project 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/300" alt="Project 3" />
        <p className="legend">Project 3</p>
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
