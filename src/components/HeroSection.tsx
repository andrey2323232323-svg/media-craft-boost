import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6">
          
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-wide">
            ​СТУДИЯ ПРОДВИЖЕНИЯ  
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
          
          Делаем бренды
          <br />
          <span className="text-gradient">заметными</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          
          Таргет, SMM, видеопродакшн и размещения в&nbsp;СМИ.
          Комплексный подход к продвижению вашего проекта.
        </motion.p>

        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors cursor-pointer">
          
          <span className="text-sm tracking-widest uppercase">Узнать больше</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>

      {/* Decorative accent */}
      <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />
    </section>);

};

export default HeroSection;
