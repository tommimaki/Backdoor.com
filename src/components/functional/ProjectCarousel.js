/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

const ProjectCarousel = ({ project }) => {
  return (
    <Carousel
      showArrows
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop
      autoPlay
      interval={2500}
      transitionTime={500}
    >
      {project?.images.map((image, index) => (
        <div key={index}>
          <Link href={`/inconstruction/${project._id}`}>
            <img src={image} alt={`Project ${index + 1}`} />
            <p className="legend">{project.title}</p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
