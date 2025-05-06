
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Drink = {
  name: string;
  price: string;
  category?: string;
};

const Menu = () => {
  const drinks: Drink[] = [
    { name: "Thé-tea", price: "3.75" },
    { name: "Espressa", price: "3.50" },
    { name: "Allong", price: "3.50" },
    { name: "Americano", price: "3.75" },
    { name: "Macchiato", price: "3.75" },
    { name: "Cortado", price: "4.75" },
    { name: "Flat White", price: "5.00" },
    { name: "Cappuccino", price: "5.25" },
    { name: "Laile", price: "5.50" },
    { name: "Matcha Latte", price: "5.75" },
    { name: "Vanilla Latte", price: "6.00" },
    { name: "Mocha Latte", price: "6.25" },
    { name: "Chocolat chaud", price: "3.75" },
    { name: "Freshly Squeezed Juices", price: "6.25-9.50" }
  ];

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

  return (
    <section id="menu" className="py-16 md:py-24 bg-cafe-cream overflow-hidden">
      <div className="cafe-container px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-subtitle">Discover Our</h2>
          <h3 className="section-title">Boissons - Drinks</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cafe-red rounded-full opacity-10"></div>
            <Card className="border border-cafe-wood/20 bg-white/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src="/lovable-uploads/e2e54234-d5bd-4a62-96de-56b790e594db.png" 
                  alt="Coffee at Elle Aime Cafe" 
                  className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                />
                <motion.ul 
                  className="space-y-3 sm:space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {drinks.slice(0, 7).map((drink, index) => (
                    <MenuItem 
                      key={index}
                      name={drink.name}
                      price={drink.price}
                      isHighlighted={index % 3 === 0}
                    />
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cafe-wood rounded-full opacity-10"></div>
            <Card className="border border-cafe-wood/20 bg-white/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src="/lovable-uploads/5be94d14-4a68-4654-b232-d14dfa1889a9.png" 
                  alt="Pastries at Elle Aime Cafe" 
                  className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                />
                <motion.ul 
                  className="space-y-3 sm:space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {drinks.slice(7).map((drink, index) => (
                    <MenuItem 
                      key={index + 7}
                      name={drink.name}
                      price={drink.price}
                      isHighlighted={(index + 7) % 3 === 0}
                    />
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type MenuItemProps = {
  name: string;
  price: string;
  isHighlighted?: boolean;
};

const MenuItem = ({ name, price, isHighlighted = false }: MenuItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.li 
      variants={itemVariants}
      whileHover={{ x: 5 }}
      className={cn(
        "flex justify-between items-center py-2 border-b border-dashed border-cafe-brown/20 text-sm sm:text-base",
        isHighlighted && "font-medium"
      )}
    >
      <span className={cn(
        "font-medium",
        isHighlighted && "text-cafe-red"
      )}>
        {name}
      </span>
      <span className="text-cafe-brown">${price}</span>
    </motion.li>
  );
};

export default Menu;
