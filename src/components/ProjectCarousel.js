// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import bg from "../assets/bg.jpg";
// import asunto1 from "../assets/asunto1.jpeg";
// import asunto2 from "../assets/asunto2.webp";
// import Image from "next/image";
// import Link from "next/link";

// const ProjectCarousel = () => {
//   return (
//     <Carousel
//       showArrows
//       showThumbs={false}
//       showStatus={true}
//       showIndicators={false}
//       infiniteLoop
//       autoPlay
//       interval={3000}
//       transitionTime={500}
//     >
//       <div>
//         <Link href={"/"}>
//           <Image src={bg} alt="Project 1" />
//           <p className="legend">Project 1</p>
//         </Link>
//       </div>
//       <div>
//         <Image src={asunto1} alt="Project 2" />
//         <p className="legend">Project 2</p>
//       </div>
//       <div>
//         <Image src={asunto2} alt="Project 3" />
//         <p className="legend">Project 3</p>
//       </div>
//     </Carousel>
//   );
// };

// export default ProjectCarousel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
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
