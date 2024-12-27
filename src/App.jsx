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
              <h1 className='font-bold text-2xl'><a href="#home">Jeremy Kwagh</a></h1>
            </div>
            <div>
              <ul className = 'flex gap-4'>
                <li>
                  <a href="#projects" className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
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
        <section id="home">
          <div className='container m-auto px-4 pt-12 sm:py-32  flex flex-col sm:flex-row gap-6'>
            <div>
              <h2 className='font-bold text-4xl'>Hello, I am Jeremy,</h2>
              <h2 className='font-bold text-4xl mt-1 gradiant-text'>Back-End Software Developer</h2>
              <p className='mt-4 text-gray-400'>🫘 Former bean counter turned code writer.</p>
              <p className='mt-4 text-gray-400'>👨‍💻 With a unique blend of 10 years in accounting and a passion for coding, I bring a diverse skill set to the world of software development. My technical proficiency includes, but is not limited to, JavaScript, React, HTML/CSS, Python, and SQL.</p>
              <p className='mt-4 text-gray-400'>👨‍💻 My journey started in accounting, where I honed my analytical skills, problem-solving abilities, and gained experience working collaboratively. However, my fascination with technology led me to transition into pursuing a career in software engineering. I am looking to leverage my background in accounting to help any team come up with solutions that meet technical requirements, while also keeping an eye on business needs and understanding how the two sides should work together.</p>
            </div>
            <div className='relative'>
              <img src={Profile} className='relative z-10 w-[220px] m-auto sm:w-auto' alt='Photo of Jeremy Kwagh' ></img>
              <div className='m-auto item-center'>
                <ul className='flex mt-2 gap-2'>
                  <li>
                    <a href='https://github.com/jkwagh' target="_blank" rel="noopener noreferrer"><img src={Github} className='w-5' /></a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/jeremiahkwagh/' target="_blank" rel="noopener noreferrer"><img src={Linkedin} className='w-5'/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className='py-10' id="projects">
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

                <a href='https://www.loom.com/share/cc49767968a946acba817ed04eb6509f?sid=d3d57971-ef4b-4e58-ba76-dcc9f90382ab' target="_blank" rel="noopener noreferrer"><button className='flex-1 text-sm px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Demo</button></a>
                <a href='https://github.com/jkwagh/p5-project-jeremykwagh' target="_blank" rel="noopener noreferrer"><button className='flex-1 text-sm px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button></a>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={FlatironEats} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Flatiron Eats</h3>
                <p className='text-gray-400 text-sm mt-2'>A clone of a food delivery app that contains a small sample of foods from different menus that can be added to a cart.</p>
                <div className='flex mt-12 gap-2'>
                  <a href='https://www.loom.com/share/5f893c63d9ee4c188721fabb2e955dec?sid=20ed6bcd-eaa7-4d28-a3b5-db000a37211e' target="_blank" rel="noopener noreferrer"><button className='flex-1 text-sm px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Demo</button></a>
                  <a href='https://github.com/jkwagh/P4-Project' target="_blank" rel="noopener noreferrer"><button className='flex-1 text-sm px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button></a>
                </div>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={FitnessEquip} className='w-full h-auto'/>
                <h3 className='text-2xl font-semibold mt-8'>Fitness Equipment Marketplace</h3>
                <p className='text-gray-400 text-sm mt-2'>A marketplace for fitness equipment where users can browse and add items.</p>
                <div className='flex mt-12 gap-2'>
                  <a href='https://www.loom.com/share/e5c4a9e2c2a1480aa5f07ee567043055?sid=21a68f24-3976-445a-be1f-a7e6cb5402ee' target="_blank" rel="noopener noreferrer"><button className='flex-1 text-sm px-6 py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700'>Demo</button></a>
                  <a href='https://github.com/jkwagh/phase2project-Ecommerce' target="_blank" rel="noopener noreferrer"><button className='flex-1 text-sm px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>Github</button></a>
                </div>
              </div>
            </div>
          </div>
          </section>
          {/* Technologies Section */}
          <section className='py-10' id='technologies'>
            <div className='container m-auto px-4 py-14'>
            <h2 className='text-2xl font-semibold'>Technologies and Skills</h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Go (Golang)</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Javascript</p>
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
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>MongoDB</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>SQLite</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>PostgreSQL</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Database Development</p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>React</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Git</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>REST API Development</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Object Oriented Programming</p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-3'>Collaborative Work Experience</p>
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
                  <p>Ama Earth Group - Led the development of a back-end REST API for an eco-friendly short-term rental platform, using Go (Golang) and PostgreSQL, ensuring high performance and reliability. Conducted research and made strategic decisions on tech tools such as language and database selection, optimizing for project requirements and long-term maintainability. Collaborated closely with the front-end team to align API functionality with front-end user interface components, enhancing user experience and overall system performance.
                  </p>
                  <p>Flatiron School - An immmersive coding bootcamp that gives students the education to become lifelong professional software engineers. Flatiron’s full stack program teaches programming fundamentals (HTML & CSS, OOP, SQL), web frameworks (Flask), Python, JavaScript, and front-end frameworks (React). Students build advanced portfolios to demonstrate their technical skills and creativity and immerse themselves in the technical community.</p>
                </div>
                <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2022</h3>
                  <p>Your Part-Time Controller, Staff Accountant - Performed weekly and monthly transactional processes as an outsourced accountant for various non-profit organizations. Additionally provided financial anaylsis and cash-flow projections and addressed any administrative or finance-related questions or tasks clients would need taken care of.</p>
                </div>
                <div className='pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2016</h3>
                  <p>Comcast, Senior Accountant - Performed monthly accountant duties for the Revenue Department of Comcast Cable. Including, but not limited to, monitoring and analying general ledger accounts, providing monthly explanations of changes in BS, and preparing/posting monthly journal entries.</p>
                </div>
                <div className='pl-24 mt-12 backdrop:relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:absolute before:rounded-full before:left-[58px]'>
                  <h3 className='absolute left-0 text-lg font-semibold'>2013</h3>
                  <p>Eisner Amper, Senior Auditor - Performed and assisted audits and reviews for clients in various industries such as commercial, manudacturing, non-profit, and emploee behefit for a 1,200+ emplpyee national public accounting firm.</p>
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
