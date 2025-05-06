
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

  return (
    <section id="menu" className="py-16 md:py-24 bg-cafe-cream">
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="section-subtitle">Discover Our</h2>
          <h3 className="section-title">Boissons - Drinks</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cafe-red rounded-full opacity-10"></div>
            <Card className="border border-cafe-wood/20 bg-white/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/e2e54234-d5bd-4a62-96de-56b790e594db.png" 
                  alt="Coffee at Elle Aime Cafe" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <ul className="space-y-4">
                  {drinks.slice(0, 7).map((drink, index) => (
                    <MenuItem 
                      key={index}
                      name={drink.name}
                      price={drink.price}
                      isHighlighted={index % 3 === 0}
                    />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cafe-wood rounded-full opacity-10"></div>
            <Card className="border border-cafe-wood/20 bg-white/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/5be94d14-4a68-4654-b232-d14dfa1889a9.png" 
                  alt="Pastries at Elle Aime Cafe" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <ul className="space-y-4">
                  {drinks.slice(7).map((drink, index) => (
                    <MenuItem 
                      key={index + 7}
                      name={drink.name}
                      price={drink.price}
                      isHighlighted={(index + 7) % 3 === 0}
                    />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
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
  return (
    <li 
      className={cn(
        "flex justify-between items-center py-2 border-b border-dashed border-cafe-brown/20",
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
    </li>
  );
};

export default Menu;
