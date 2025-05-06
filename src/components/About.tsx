
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="cafe-container px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-subtitle">Our Story</h2>
          <h3 className="section-title">About Café Elle Aime</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="relative">
                  <motion.div 
                    className="absolute -top-4 -left-4 w-full h-full bg-cafe-red rounded-md -z-10 opacity-10"
                    animate={{ 
                      opacity: [0.1, 0.2, 0.1],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.img 
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src="/lovable-uploads/e2e54234-d5bd-4a62-96de-56b790e594db.png" 
                    alt="Inside Café Elle Aime" 
                    className="rounded-md shadow-md w-full"
                  />
                  <motion.div 
                    className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 overflow-hidden rounded-md shadow-lg hidden sm:block"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ rotate: 3, scale: 1.05 }}
                  >
                    <img 
                      src="/lovable-uploads/5be94d14-4a68-4654-b232-d14dfa1889a9.png" 
                      alt="Coffee and pastries at Elle Aime" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="mt-12 lg:mt-0 px-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h4 
              className="text-xl sm:text-2xl font-serif font-semibold text-cafe-brown mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              A Cozy Corner in Westmount
            </motion.h4>
            <motion.p 
              className="text-cafe-brown/80 mb-6 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nestled in the charming neighborhood of Westmount, Café Elle Aime brings a touch of warmth
              and comfort to Montreal's coffee scene. Our café was born from a simple love for great coffee
              and creating a welcoming space for our community.
            </motion.p>
            <motion.p 
              className="text-cafe-brown/80 mb-6 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With our vibrant red chairs, wooden tables, and friendly atmosphere, we've created a spot
              where neighbors become friends and every cup is served with care. Our name "Elle Aime"
              means "She Loves" in French – reflecting our passion for what we do.
            </motion.p>
            <motion.p 
              className="text-cafe-brown/80 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Whether you're stopping by for a quick espresso, settling in with a cappuccino and one of our
              freshly baked pastries, or meeting friends for conversation over lattes, we're delighted to
              have you with us.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
