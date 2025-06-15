import { motion } from 'framer-motion';
import "./About.css"; 

function About() {
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
      <motion.h2 className='meet-heading'>Meet Kennedy Agbapuonwu</motion.h2>

      <motion.div className='about-grid' variants={containerVariants} initial="hidden" animate="visible">
        {/* Top Full Box */}
        <motion.div className='about-box full' variants={itemVariants}>
          <p>A front-end focused fullstack Software Engineer with over 10 years of experience crafting scalable and intuitive web applications.</p>
        </motion.div>

        {/* Middle Left: Highlights */}
        <motion.div className='about-box left' variants={itemVariants}>
          <div className="profile-highlight">
            <img src="/your-image.jpg" alt="Kennedy Agbapuonwu" className='about-profile-image' />
            <p><strong>Location:</strong> Nigeria</p>
            <p><strong>Email:</strong> kenagbapuonwu@gmail.com</p>
          </div>
        </motion.div>

        {/* Middle Right: Favorite Tools */}
        <motion.div className='about-box right' variants={itemVariants}>
          <h3>Favorite Tools</h3>
          <div className='tools-wrapper'>
            {["React", "Tailwind", "JavaScript", "Git", "Node.js"].map((tool, idx) => (
              <motion.span key={idx} className='tool-item' variants={toolVariants} whileHover="hover">
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Left: Experience */}
        <motion.div className='about-box left' variants={itemVariants}>
          <h3>Years of Experience</h3>
          <p>10+ Years designing & developing user interfaces.</p>
        </motion.div>

        {/* Bottom Right: Something Cool */}
        <motion.div className='about-box right' variants={itemVariants}>
          <h3>Something Cool</h3>
          <p>I blend engineering logic with a photographer’s eye — creating visual harmony in every layout.</p>
        </motion.div>

        {/* Bottom Full: Articles */}
        <motion.div className='about-box full' variants={itemVariants}>
          <h3>Read My Articles</h3>
          <p>Explore insights on frontend trends, design principles, and real-world development tips on my blog.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
