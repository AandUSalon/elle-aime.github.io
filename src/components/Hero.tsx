
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-b from-cafe-lightorange to-cafe-cream py-16 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5be94d14-4a68-4654-b232-d14dfa1889a9.png')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
      <div className="cafe-container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-cursive text-cafe-brown text-2xl sm:text-3xl mb-2"
          >
            Welcome to
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-cafe-red mb-6 px-2"
          >
            Café Elle Aime
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cafe-brown text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto px-4 sm:px-0"
          >
            A cozy café in the heart of Westmount, Montreal, offering delicious coffee, pastries,
            and a warm atmosphere to brighten your day.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
          >
            <Button asChild className="bg-cafe-red hover:bg-cafe-red/90 text-white w-full sm:w-auto px-4 sm:px-6 py-5 sm:py-6">
              <a href="#menu">
                <Coffee className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                View Our Menu
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cafe-brown text-cafe-brown hover:bg-cafe-brown/10 w-full sm:w-auto px-4 sm:px-6 py-5 sm:py-6">
              <a href="#contact">Find Us</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
