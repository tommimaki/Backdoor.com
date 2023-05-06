import Image from "next/image";
import bg from "../assets/bg.jpg";
import Layout from "../components/Layout/Layout";
import Sites from "../components/Projects/Sites";
import FinishedProjects from '../components/Projects/FinishedProjects';
import Apartments from '../components/Apartments/Apartments';
import WhyUs from '../components/Misc/WhyUs'
import Newsletter from '../components/Misc/Newsletter'
import Head from "next/head";

export default function Home() {

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layout onLandingPage={true}>
      <Head>
        <title>Backdoor Homes</title>
      </Head>
      <main className="flex flex-col bg-bgDark">
        <div className="absolute left-0 top-0 z-10 sm:pl-20 sm:pt-40 pl-10 sm:mt-0 mt-72 w-full flex flex-col">
          {/* todo opacity largescreen 0 bghn */}
          <div className=" sm:bg-none bg-bgLight  rounded-l-lg shadow-accent ">
            <h1 className="sm:text-textDark   md:text-7xl  p-4 font-heading  text-5xl sm:text-6xl   lg:text-9xl">We Build </h1>
          </div>
          <h2 className="text-white ml-6 mt-2 font-heading font-quicksand sm:text-5xl text-3xl">
            You&nbsp;
            <b className="text-white ">
              Live
            </b>
          </h2>
          <h3 className="font-text text-accent sm:text-2xl text-xl ml-6 sm:ml-10"> -Backdoor</h3>
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
        {/* todo md: boxlayout  */}
        <div className="lg:absolute gap-2 bottom-0 left-0 w-full flex flex-wrap justify-around p-5">
          <div className="content-box border-2 border-accent bg-bgLight p-5 sm:h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
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
      <Newsletter />
    </Layout >
  );
}
