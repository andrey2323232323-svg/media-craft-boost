import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Научно-популярный проект",
    services: "SMM + YouTube канал",
    number: "01",
  },
  {
    title: "Онлайн-школа",
    services: "YouTube",
    number: "02",
  },
  {
    title: "Металлургическая компания",
    services: "SMM",
    number: "03",
  },
  {
    title: "Транспортный холдинг",
    services: "SMM",
    number: "04",
  },
  {
    title: "ТВ-передача",
    services: "SMM + Таргетированная реклама",
    number: "05",
  },
  {
    title: "Научно-популярный телеграм-канал",
    services: "Telegram",
    number: "06",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Портфолио</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Кейсы</h2>
        </motion.div>

        <div className="space-y-0">
          {cases.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-center justify-between py-6 md:py-8 border-b border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-muted-foreground text-sm font-mono">{item.number}</span>
                <div>
                  <h3 className="font-heading text-lg md:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.services}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
