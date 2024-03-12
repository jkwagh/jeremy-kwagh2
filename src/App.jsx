import './App.css'
import Profile from "./assets/Photo.jpeg";
import EventPlanner from "./assets/EventPlanner.png";
import FitnessEquip from "./assets/FitnessEquip.png";
import FlatironEats from "./assets/FlatironEats.png";

function App() {

  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between item-center'>
            <div>
              <h1 className='font-bold text-2xl'>Jeremy Portfolio</h1>
            </div>
            <div>
              <ul className = 'flex gap-4'>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a className='text-gray-400 hover:text-white cursor-pointer'>About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>  
      </header>
      <main>
        {/* Intro/Banner Section */}
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h2 className='font-bold text-4xl'>Hello, I am Jeremy, </h2>
              <h2 className='font-bold text-4xl mt-1 gradiant-text'>Full-Stack Software Developer</h2>
              <p className='mt-4 text-gray-400'>Former accoutant turned coder. Looking to apply years of corporate experience and understanding of business needs with coding skills.</p>
            </div>
            <div className='relative'>
              <img src={Profile} width={320} className='relative z-1' alt='Photo of Jeremy Kwagh' ></img>
              {/* <img src={ProfileBg} className='absolute top-0 left-10 -z-0'/> */}
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>
              Projects
            </h2>
            <div className='flex gap-10 mt-10'>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={EventPlanner} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Event Planner</h3>
                <p className='text-gray-400 text-sm mt-2'>Fullstack web app for planning and organizing events</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hove:from-blue-700 hover:to-cyan-700'>Demo</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={FlatironEats} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Flatiron Eats</h3>
                <p className='text-gray-400 text-sm mt-2'>Fullstack web app for ordering food and managing users</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hove:from-blue-700 hover:to-cyan-700'>Demo</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5'>
                <img src={FitnessEquip} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Fitness Equipment Marketplace</h3>
                <p className='text-gray-400 text-sm mt-2'>React web app for viewing list of fitnesss equipment</p>
                <div className='flex justify-evenly mt-12'>
                  <button className='px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hove:from-blue-700 hover:to-cyan-700'>Demo</button>
                  <button className='px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button>
                </div>
              </div>
            </div>

          </div> 
          {/* Technologies Section */}
          <section className='mt-12'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Technologies</h2>
            <div className='mt-14'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
          </div>
          </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
