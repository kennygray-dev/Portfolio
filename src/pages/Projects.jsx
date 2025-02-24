
import Project from './Project';

const Projects = () => {
  const projectData = [
    {
      links: 'https://eventticketken.vercel.app/',
      image: '/tide.jpg',
      title: 'TIDECON',
      details: 'An Event Registration Web Application for a Tech conference, featuring a countdown timer, responsive design, and payment supported by Paystack.'
    },

   
    {
      links: 'https://craft9ja.vercel.app//',
      image: '/Craft.jpg',
      title: 'Craft9JA',
      details: 'An E-commerce, Fully responsive interior/Furiture services Web application .'
    },

    {
      links: 'https://kennygraysgymapp.vercel.app/',
      image: '/gym.jpg',
      title: 'WorkoutTracking App',
      details: 'Featureing a collection of muscles group options with thoughfully curated workout exercises,Set Tracking, Downloadable workout summary, This App helps every gym buddy'
    },
 

   
    {
      links: 'https://dakestel.vercel.app/',
      image: '/dakestell.png',
      title: 'Dakestel Home/Car Care',
      details: 'An E-commerse Website for Da-kestel resources with amazing features built with React, featuring Home and Car care product page list, A cart section, Contact and a sleek and responsive design.'
    },
    {
      links: 'https://ben-payments.vercel.app/',
      image: '/offering.png',
      title: 'Online Payment App',
      details: 'Allows users to make online donations to a church using the Paystack payment gateway, capturing their name and the amount they wish to donate. '
    },
    {
      links: 'https://grayshub.vercel.app/',
      image: '/proj.png',
      title: 'Wallpaper/Inspo App',
      details: 'A wallpaper and inspo app where users can view and download different categories of interests, featuring light and dark mode based on system settings.'
    },
    {
      links: 'https://todo-progress.vercel.app//',
      image: '/mkuo.png',
      title: 'To-do list app Featuring a progress bar',
      details: 'a React to-do list application where users can add new tasks, toggle task completion, Remove tasks, view a progress bar that updates as tasks are completed.'
    },
    {
      links: 'https://tic-tac-toe-two-nine.vercel.app/',
      image: '/tic.png',
      title: 'Tic Tac Toe',
      details: 'A classic Tic-Tac-Toe game built with React, featuring a sleek and responsive design.'
    },


    // Add more project data as needed
  ];

  return (
    <div>
      <h2 className='myWorks'>My Works</h2>
    <div id='projects' className="projects-container">
      
      {projectData.map((project, index) => (
        
        <Project
          key={index}
          links={project.links}
          image={project.image}
          title={project.title}
          details={project.details}
        />
      ))}
    </div>
    </div>
    
  );
};

export default Projects;
