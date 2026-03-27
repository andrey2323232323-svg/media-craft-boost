import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Контакт</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Готовы обсудить
            <br />
            <span className="text-gradient">ваш проект?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            Расскажите о задачах — мы предложим решение и рассчитаем бюджет.
          </p>
          <a
            href="mailto:hello@agency.ru"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5" />
            Написать нам
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
