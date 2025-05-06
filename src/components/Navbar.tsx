
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 bg-cafe-cream/95 backdrop-blur-sm border-b border-cafe-cream/20 shadow-sm"
    >
      <div className="cafe-container py-4">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#" 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-cafe-red font-cursive text-3xl">Elle Aime</h1>
          </motion.a>
          
          {/* Mobile menu button */}
          <motion.button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-cafe-brown"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <motion.div 
          className={cn(
            "md:hidden",
            isOpen ? "block" : "hidden"
          )}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-6">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#menu" onClick={() => setIsOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.a 
      href={href}
      className="font-medium text-cafe-brown hover:text-cafe-red transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const MobileNavLink = ({ 
  href, 
  onClick,
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => {
  return (
    <motion.a 
      href={href}
      onClick={onClick}
      className="font-medium text-cafe-brown hover:text-cafe-red transition-colors duration-200 px-2 py-1 block"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default Navbar;
