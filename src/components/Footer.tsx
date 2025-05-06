
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cafe-brown text-cafe-cream py-10">
      <div className="cafe-container">
        <div className="flex flex-col items-center">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="font-cursive text-3xl"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 } 
              }}
            >
              Elle Aime
            </motion.h2>
            <motion.div 
              className="flex items-center justify-center mt-1"
              animate={{ 
                y: [0, -2, 0, 2, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut" 
              }}
            >
              <Coffee size={16} className="mr-1" />
              <span className="text-sm">Coffee with love</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex space-x-8 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#menu">Menu</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </motion.div>
          
          <motion.div 
            className="text-center text-cafe-cream/70 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>&copy; {currentYear} Café Elle Aime. All rights reserved.</p>
            <p className="mt-1">5005 Rue Sherbrooke O, Westmount, Montreal</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.a 
      href={href} 
      className="text-cafe-cream hover:text-white transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default Footer;
