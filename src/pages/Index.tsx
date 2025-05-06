
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Improved smooth scroll to section when clicking on navigation links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#') && href !== '#') {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Get the navbar height dynamically
          const navbar = document.querySelector('header');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          
          // Calculate the element's position and adjust for the navbar
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20; // Extra 20px buffer
          
          // Smooth scroll to the adjusted position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cafe-red z-50 origin-left"
          style={{ scaleX }}
        />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Menu />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
