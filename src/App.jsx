import './App.css'
import Profile from "./assets/Photo.jpeg";
import EventPlanner from "./assets/EventPlanner.png";
import FitnessEquip from "./assets/FitnessEquip.png";
import FlatironEats from "./assets/FlatironEats.png";
import Github from "./assets/GithubIcon.png"
import Linkedin from "./assets/LinkedinIcon.png"
import ArrowUp from './assets/arrow-up.svg';
import { useEffect, useState } from 'react';

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.scrollY > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])


  return (
    <div className='max-w-4xl m-auto relative'>
      <header className={`${scrolling ? 'border-b border-gray-900' : ''} fixed left-0 right-0 top-0 z-20`} id='home'>
        <div className='container m-auto px-4 py-6 max-w-4xl bg-black'>
          <div className='flex flex-col gap-4 sm:flex-row justify-between item-center'>
            <div>
              <h1 className='font-bold text-2xl'><a href='#home'>Jeremy Kwagh</a></h1>
            </div>
            <div>
              <ul className = 'flex gap-4'>
                <li>
                  <a href='#projects' className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a href="#technologies" className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a href="#aboutme" className='text-gray-400 hover:text-white cursor-pointer'>About Me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>  
      </header>
      <main className='relative mt-28'>
        {/* Intro/Banner Section */}
        <section id='home'>
          <div className='container m-auto px-4 pt-12 sm:py-32  flex flex-col sm:flex-row gap-6'>
            <div>
              <h2 className='font-bold text-4xl'>Hello, I am Jeremy,</h2>
              <h2 className='font-bold text-4xl mt-1 gradiant-text'>Full-Stack Software Developer</h2>
              <p className='mt-4 text-gray-400'>🫘 Former bean counter turned code writer.</p>
              <p className='mt-4 text-gray-400'>👨‍💻 With a unique blend of 10 years in accounting and a passion for coding, I bring a diverse skill set to the world of software development. My technical proficiency includes, but is not limited to, JavaScript, React, HTML/CSS, Python, and SQL.</p>
              <p className='mt-4 text-gray-400'>👨‍💻 My journey started in accounting, where I honed my analytical skills, problem-solving abilities, and gained experience working collaboratively. However, my fascination with technology led me to transition into pursuing a career in software engineering. I am looking to leverage my background in accounting to help any team come up with solutions that meet technical requirements, while also keeping an eye on business needs and understanding how the two sides should work together.</p>
            </div>
            <div className='relative'>
              <img src={Profile} className='relative z-10 w-[220px] m-auto sm:w-auto' alt='Photo of Jeremy Kwagh' ></img>
              <div className='m-auto item-center'>
                <ul className='flex mt-2 gap-2'>
                  <li>
                    <a href='https://github.com/jkwagh'><img src={Github} className='w-5' /></a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/jeremiahkwagh/'><img src={Linkedin} className='w-5'/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id='projects'>
          <div className='container m-auto px-4 sm:py-12'>
            <h2 className='text-2xl font-semibold'>
              Projects
            </h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={EventPlanner} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Event Planner</h3>
                <p className='text-gray-400 text-sm mt-2'>An event organizing app that allows prospective attendees to see event details and the event organizer to see attendee information.</p>
                <div className='flex mt-12 gap-2'>
                <button className='flex-1 text-sm px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Demo</button>
                  <button className='flex-1 text-sm px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={FlatironEats} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Flatiron Eats</h3>
                <p className='text-gray-400 text-sm mt-2'>A clone of a food delivery app that contains a small sample of foods from different menus that can be added to a cart.</p>
                <div className='flex mt-12 gap-2'>
                  <button className='flex-1 text-sm px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Demo</button>
                  <button className='flex-1 text-sm px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={FitnessEquip} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Fitness Equipment Marketplace</h3>
                <p className='text-gray-400 text-sm mt-2'>A marketplace for fitness equipment where users can browse and add items.</p>
                <div className='flex mt-12 gap-2'>
                  <button className='flex-1 text-sm px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Demo</button>
                  <button className='flex-1 text-sm px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button>
                </div>
              </div>
            </div>
          </div>
          </section>
          {/* Technologies Section */}
          {/* <section className="py-10" id="technologies">
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Technologies</h2>
            <div className='mt-14'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Javascript</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>React</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Python</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Flask-SQLAlchemy</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
              <div className='mt-8'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Bootstrap</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md' />
              </div>
          </div>
          </div>
          </section> */}
          {/* Additional Skills Section */}
          <section className='py-10'>
            <div className='container m-auto px-4 py-14'>
            <h2 className='text-2xl font-semibold'>Technologies and Skills</h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Javascript</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>React</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Python</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Flask-SQLAlechemy</p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Git</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>RESTful APIs</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Tailwind</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Object Oriented Programming</p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Teamwork</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Problem Solving</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Presentation Skills</p>
              </div>
            </div>
            </div>
          </section>
          {/* About Me Section */}
          <section className='py-8' id='aboutme'>
            <div className='container m-auto px-4'>
              <h2 className='text-2xl font-semibold'>About Me</h2>
              <div className='mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-3 before:w-1 before:bg-white'>
                <div className='pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2024</h3>
                  <p>Completed the Flatiron School - Software Engineering program.</p>
                </div>
                <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2022</h3>
                  <p>Your Part-Time Controller - Staff Accountant</p>
                </div>
                <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2016</h3>
                  <p>Comcast - Senior Accountant</p>
                </div>
                <div className='pl-24 mt-12 backdrop:relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2013</h3>
                  <p>Eisner Amper - Senior Auditor</p>
                </div>
              </div>
            </div>
          </section>
      </main>
      <footer>
        <div className='container m-auto flex justify-between px-4 py-6'>
          {/* <div>
            <p className='text-gray-300 text-sm'>Copyright @ 2024</p>
          </div> */}
          <div>
            <ul className='flex gap-4'>
              <li>
                <a href='https://github.com/jkwagh'><img src={Github} className='w-5' /></a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/jeremiahkwagh/'><img src={Linkedin} className='w-5'/></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowUp} alt='Arrow Up' />
          </button>
        )
      }
    </div>
  );
}

export default App;
