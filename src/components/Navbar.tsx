
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-cafe-cream/95 backdrop-blur-sm border-b border-cafe-cream/20 shadow-sm">
      <div className="cafe-container py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <h1 className="text-cafe-red font-cursive text-3xl">Elle Aime</h1>
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 text-cafe-brown"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-6">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#menu" onClick={() => setIsOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="font-medium text-cafe-brown hover:text-cafe-red transition-colors duration-200"
    >
      {children}
    </a>
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
    <a 
      href={href}
      onClick={onClick}
      className="font-medium text-cafe-brown hover:text-cafe-red transition-colors duration-200 px-2 py-1 block"
    >
      {children}
    </a>
  );
};

export default Navbar;
