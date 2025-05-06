
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="cafe-container">
        <div className="text-center mb-12">
          <h2 className="section-subtitle">Our Story</h2>
          <h3 className="section-title">About Café Elle Aime</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-cafe-red rounded-md -z-10 opacity-10"></div>
                  <img 
                    src="/lovable-uploads/e2e54234-d5bd-4a62-96de-56b790e594db.png" 
                    alt="Inside Café Elle Aime" 
                    className="rounded-md shadow-md"
                  />
                  <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-md shadow-lg">
                    <img 
                      src="/lovable-uploads/5be94d14-4a68-4654-b232-d14dfa1889a9.png" 
                      alt="Coffee and pastries at Elle Aime" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <h4 className="text-2xl font-serif font-semibold text-cafe-brown mb-4">
              A Cozy Corner in Westmount
            </h4>
            <p className="text-cafe-brown/80 mb-6">
              Nestled in the charming neighborhood of Westmount, Café Elle Aime brings a touch of warmth
              and comfort to Montreal's coffee scene. Our café was born from a simple love for great coffee
              and creating a welcoming space for our community.
            </p>
            <p className="text-cafe-brown/80 mb-6">
              With our vibrant red chairs, wooden tables, and friendly atmosphere, we've created a spot
              where neighbors become friends and every cup is served with care. Our name "Elle Aime"
              means "She Loves" in French – reflecting our passion for what we do.
            </p>
            <p className="text-cafe-brown/80">
              Whether you're stopping by for a quick espresso, settling in with a cappuccino and one of our
              freshly baked pastries, or meeting friends for conversation over lattes, we're delighted to
              have you with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
