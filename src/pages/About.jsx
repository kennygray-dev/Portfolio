import { motion } from 'framer-motion';

function About() {
  return (
    <div id='about' className='about-all'>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='about-me'>
        <div className='about-container'>
        <div className='image-board'>
            <div className="image-container"></div>
          </div>
          <p className='about'>
            a self-taught Frontend developer with a passion for creating elegant, responsive websites and web applications. I'm all about turning ideas into reality, one line of code at a time. I thrive on bringing creativity and innovation to every project.
            <br />
            Come on board, let's build something amazing together!
            <br />
            <br />
            <a className='mail-link' href="mailto:kenagbapuonwu@gmail.com">kenagbapuonwu@gmail.com</a>
          </p>
          
        </div>
        <br />
        <br />
        <div className='skills'>Tools I use-</div>
        <div className='tools-section'>
          <div className='tool-item'>
            <div className='tools'>
              <img src='Html.jpeg' alt='HTML' />
            </div>
            <p>HTML</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='CSS.jpeg' alt='CSS' />
            </div>
            <p>CSS</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='Js.jpeg' alt='JavaScript' />
            </div>
            <p>JS</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='Tailwind.jpeg' alt='Tailwind' />
            </div>
            <p>Tailwind</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='React.jpeg' alt='React' />
            </div>
            <p>React</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='Git.jpeg' alt='GIT' />
            </div>
            <p>GIT</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='github.jpeg' alt='Github' />
            </div>
            <p>Github</p>
          </div>
          <div className='tool-item'>
            <div className='tools'>
              <img src='nodejs.jpeg' alt='Node.js' />
            </div>
            <p>Node.js</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
