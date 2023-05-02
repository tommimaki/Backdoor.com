import Image from "next/image";
import bg from "../assets/bg.jpg";
import Layout from "../components/Layout";
import Sites from "../components/Sites";
import FinishedProjects from '../components/FinishedProjects';
import Apartments from '../components/Apartments';
import WhyUs from '../components/WhyUs'

export default function Home() {

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layout>
      <main className="flex flex-col bg-bgDark">
        <div className="absolute left-0 top-0 z-10 sm:pl-20 sm:pt-40 p-5 w-full flex flex-col">
          <h1 className="text-textDark font-heading  text-9xl">We Build </h1>
          <h2 className="text-white ml-6 font-heading font-quicksand text-5xl">
            You&nbsp;
            <b className="text-white">
              Live
            </b>
          </h2>
          <h3 className="font-text text-accent text-2xl ml-10"> -Backdoor</h3>
        </div>
        <div
          className="min-h-screen min-w-full relative clip-triangle"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </div>
        <div className="absolute bottom-0 left-0 w-full flex flex-wrap justify-around p-5">
          <div className="content-box border-2 border-accent bg-bgLight p-5 h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
            <h3 className="text-textDark  font-heading  text-center text-2xl">Current Projects</h3>
            <p className="text-textDark font-text pt-4">Check out our latest projects, including a new residential complex, a commercial office tower, and a public park renovation.</p>
            <button onClick={() => scrollToSection("sites")} className="bg-accent text-white font-text border w-full border-accent rounded-md px-4 py-2 mt-2 hover:bg-bgDark">
              Take me there
            </button>
          </div>


          <div className="content-box border-2 border-accent bg-bgLight p-5 h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
            <h3 className=" text-center font-heading text-2xl">Finished Projects</h3>
            <p className="text-gray-700 font-text pt-4">Take a look at our past completed projects, including a luxury hotel, a sports arena, and a university campus expansion.</p>
            <button onClick={() => scrollToSection("finishedProjects")} className="bg-accent text-white font-text border w-full border-accent rounded-md px-4 py-2 mt-2 hover:bg-bgDark">
              Take me there
            </button>
          </div>

          <div className="content-box border-2 border-accent bg-bgLight p-5 h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
            <h3 className=" text-center  font-heading  text-2xl">Apartments For Sale</h3>
            <p className="text-textDark font-text  pt-4">Explore our selection of apartments for sale, ranging from cozy studios to spacious penthouses, in prime locations around the city.</p>
            <button onClick={() => scrollToSection("apartments")} className="bg-accent text-white font-text border w-full border-accent rounded-md px-4 py-2 mt-2 hover:bg-bgDark">
              Take me there
            </button>
          </div>

        </div>


      </main >
      <Sites />
      <FinishedProjects />
      <Apartments />
      <WhyUs />
    </Layout >
  );
}
