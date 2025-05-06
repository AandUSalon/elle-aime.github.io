
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-b from-cafe-lightorange to-cafe-cream py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5be94d14-4a68-4654-b232-d14dfa1889a9.png')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
      <div className="cafe-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cursive text-cafe-brown text-3xl mb-2">Welcome to</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cafe-red mb-6">
            Café Elle Aime
          </h1>
          <p className="text-cafe-brown text-lg md:text-xl mb-8 max-w-xl mx-auto">
            A cozy café in the heart of Westmount, Montreal, offering delicious coffee, pastries,
            and a warm atmosphere to brighten your day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-cafe-red hover:bg-cafe-red/90 text-white px-6 py-6">
              <a href="#menu">
                <Coffee className="mr-2 h-5 w-5" />
                View Our Menu
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cafe-brown text-cafe-brown hover:bg-cafe-brown/10 px-6 py-6">
              <a href="#contact">Find Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
