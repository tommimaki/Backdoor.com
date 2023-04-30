import Image from "next/image";
import bg from "../assets/bg.jpg";
import Layout from "../components/Layout";
import Sites from "../components/Sites";
import FinishedProjects from '../components/FinishedProjects';

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col bg-green-400">
        <div className="absolute left-0 top-0 z-10 sm:pl-32 sm:pt-40 p-5 w-full flex flex-col">
          <h1 className="text-gray text-9xl">We <i> Build</i> </h1>
          <h2 className="text-white ml-6 text-5xl">
            You&nbsp;
            <b>
              Live
            </b>
          </h2>
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
          <div className="content-box border-2 border-green-600 bg-white p-5 h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
            <h3 className="text-green-700  text-center text-2xl">Current Projects</h3>
            <p className="text-gray-700 pt-4">Check out our latest projects, including a new residential complex, a commercial office tower, and a public park renovation.</p>
            <button className="greenButton mt-4">Take me there</button>
          </div>


          <div className="content-box bg-white border-2 border-green-600 p-5 h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
            <h3 className="text-green-700  text-center text-2xl">Finished Projects</h3>
            <p className="text-gray-700 pt-4">Take a look at our past completed projects, including a luxury hotel, a sports arena, and a university campus expansion.</p>
            <button className="greenButton mt-4">Take me there</button>
          </div>

          <div className="content-box bg-white p-5 border-2 border-green-600 h-62 shadow-lg rounded-lg overflow-wrap max-w-xs flex flex-col justify-center">
            <h3 className="text-green-700 text-center text-2xl">Apartments For Sale</h3>
            <p className="text-gray-700 pt-4">Explore our selection of apartments for sale, ranging from cozy studios to spacious penthouses, in prime locations around the city.</p>
            <button className="greenButton mt-4">Take me there</button>
          </div>

        </div>


      </main >
      <Sites />
      <FinishedProjects />
    </Layout >
  );
}
