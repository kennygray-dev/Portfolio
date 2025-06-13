import { motion } from 'framer-motion';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const toolVariants = {
    hover: {
      scale: 1.1,
      filter: 'none',
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.div 
      id='about' 
      className='about-all'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className='about-me'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className='about-container'
          variants={itemVariants}
        >
          <motion.div 
            className='image-board'
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-container"></div>
          </motion.div>
          
          <motion.p 
            className='about'
            variants={itemVariants}
          >
            A front-end heavy fullstack Software engineer with over 10 years of experience converting challenges & ideas into intuitive and scalable solutions.
            <motion.a 
              className='mail-link' 
              href="mailto:kenagbapuonwu@gmail.com"
              whileHover={{ 
                color: '#FF5B04',
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
            >
              kenagbapuonwu@gmail.com
            </motion.a>
          </motion.p>
        </motion.div>

        <motion.div 
          className='skills'
          variants={itemVariants}
        >
          Tools I use-
        </motion.div>
        
        <motion.div 
          className='tools-section'
          variants={containerVariants}
        >
          {[
            { name: 'HTML', img: 'Html.jpeg' },
            { name: 'CSS', img: 'CSS.jpeg' },
            { name: 'JS', img: 'Js.jpeg' },
            { name: 'Tailwind', img: 'Tailwind.jpeg' },
            { name: 'React', img: 'React.jpeg' },
            { name: 'Typescript', img: 'TypeScript.jpeg' },
            { name: 'MongoDB', img: 'MongoDB.jpeg' },
            { name: 'express', img: 'express.jpeg' },
            { name: 'GIT', img: 'Git.jpeg' },
            { name: 'Github', img: 'github.jpeg' },
            { name: 'Node.js', img: 'nodejs.jpeg' }
          ].map((tool, index) => (
            <motion.div 
              key={index}
              className='tool-item'
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className='tools'
                variants={toolVariants}
              >
                <img src={tool.img} alt={tool.name} />
              </motion.div>
              <p>{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;