"use client"
// ProjectCard.tsx
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description?: string;
  techStack: string[];
  features: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, features }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='p-4 text-zinc-300 rounded-lg '
    >
      <motion.h3 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className='text-2xl font-semibold text-white mb-2'
      >
        {title}
      </motion.h3>
      {description && <motion.p 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
        className='text-sm mb-4 text-secondary'
      >
        {description}
      </motion.p>}
      <h4 className='text-lg font-semibold mb-1 text-secondary'>Tech Stack:</h4>
      <ul className='list-disc list-inside mb-2'>
        {techStack.map((tech, index) => <li key={index}>🔧 {tech}</li>)}
      </ul>
      <h4 className='text-lg font-semibold mb-1 text-secondary'>Features:</h4>
      <ul className='list-disc list-inside'>
        {features.map((feature, index) => <li key={index}>✨ {feature}</li>)}
      </ul>
    </motion.div>
  );
}

export default ProjectCard;
