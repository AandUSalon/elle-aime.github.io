
import { Card, CardContent } from "@/components/ui/card";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-cafe-lightorange overflow-hidden">
      <div className="cafe-container px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-subtitle">Visit Us</h2>
          <h3 className="section-title">Find Our Café</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-cafe-wood/20 shadow-md bg-white">
              <CardContent className="p-4 sm:p-6">
                <motion.div 
                  className="flex items-center justify-center mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-cafe-red/10 flex items-center justify-center">
                    <Coffee size={28} className="text-cafe-red" />
                  </div>
                </motion.div>
                <h4 className="text-lg sm:text-xl font-semibold text-cafe-brown text-center mb-4">
                  Opening Hours
                </h4>
                <div className="space-y-2 text-sm sm:text-base">
                  <motion.div 
                    className="flex justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-cafe-brown/80">Monday - Friday</span>
                    <span className="font-medium text-cafe-brown">7:00 AM - 7:00 PM</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-cafe-brown/80">Saturday</span>
                    <span className="font-medium text-cafe-brown">8:00 AM - 7:00 PM</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-cafe-brown/80">Sunday</span>
                    <span className="font-medium text-cafe-brown">8:00 AM - 6:00 PM</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-cafe-wood/20 shadow-md bg-white">
              <CardContent className="p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold text-cafe-brown mb-4">Contact & Location</h4>
                <div className="space-y-4 text-sm sm:text-base">
                  <motion.p 
                    className="text-cafe-brown/80"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium block text-cafe-brown">Address:</span>
                    5005 Rue Sherbrooke O, <br />
                    Westmount, Montreal, Quebec
                  </motion.p>
                  <motion.p 
                    className="text-cafe-brown/80"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium block text-cafe-brown">Phone:</span>
                    (514) 555-1234
                  </motion.p>
                  <motion.p 
                    className="text-cafe-brown/80"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium block text-cafe-brown">Email:</span>
                    bonjour@cafeelleaime.com
                  </motion.p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 sm:mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Card className="border-cafe-wood/20 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <iframe
                title="Cafe Elle Aime Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.735886679311!2d-73.60237752346726!3d45.47976253344176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a11b6be3451%3A0xdf38ba4720526711!2s5005%20Sherbrooke%20St%20W%2C%20Westmount%2C%20QC!5e0!3m2!1sen!2sca!4v1715031036035!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
