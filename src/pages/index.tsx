import Image from 'next/image';
import bg from '../assets/bg.jpg'
import Layout from '../components/Layout'


export default function Home() {



  return (
    <Layout>
      <main
      >
        <div className='flex min-h-screen '>

          <div className='bg- sm:pl-32 sm:pt-20 p-5 w-full'>
            <h1 className=' textGreen text-8xl'>We Build</h1>
            <h2 className=' text-green-700 ml-6 text-4xl'>You Live</h2>

            <div>

              <div className="absolute min-h-screen inset-0 mt-20 overflow-hidden clip-triangle">
                <Image src={bg} alt="Background" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className='flex gap-5  self-end  '>
            <div className="z-10  w-40 h-40 bg-opacity-75 bg-green-500"></div>
            <div className="z-10 w-40 h-40 bg-opacity-75 bg-green-500"></div>
            <div className="z-10 w-40 h-40 bg-opacity-75 bg-green-500"></div>
          </div>
        </div>

      </main >
    </Layout >
  )
}
