
import { Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cafe-brown text-cafe-cream py-10">
      <div className="cafe-container">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="font-cursive text-3xl">Elle Aime</h2>
            <div className="flex items-center justify-center mt-1">
              <Coffee size={16} className="mr-1" />
              <span className="text-sm">Coffee with love</span>
            </div>
          </div>
          
          <div className="flex space-x-8 mb-6">
            <a href="#home" className="text-cafe-cream hover:text-white transition-colors">Home</a>
            <a href="#menu" className="text-cafe-cream hover:text-white transition-colors">Menu</a>
            <a href="#about" className="text-cafe-cream hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-cafe-cream hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-center text-cafe-cream/70 text-sm">
            <p>&copy; {currentYear} Café Elle Aime. All rights reserved.</p>
            <p className="mt-1">5005 Rue Sherbrooke O, Westmount, Montreal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
