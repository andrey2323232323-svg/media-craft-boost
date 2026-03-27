import { motion } from "framer-motion";
import { Target, MessageSquare, Newspaper, Video } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Таргетированная реклама",
    description: "ВКонтакте, Яндекс Директ, YouTube — настраиваем и ведём рекламные кампании с прозрачной аналитикой.",
    tags: ["VK Ads", "Яндекс Директ", "YouTube"],
  },
  {
    icon: MessageSquare,
    title: "SMM сопровождение",
    description: "Стратегия, контент-план, создание и публикация материалов, работа с комьюнити.",
    tags: ["Стратегия", "Контент", "Аналитика"],
  },
  {
    icon: Newspaper,
    title: "Размещение в СМИ",
    description: "Публикации в федеральных изданиях. Повышаем узнаваемость и экспертность бренда.",
    tags: ["PR", "Медиа", "Репутация"],
  },
  {
    icon: Video,
    title: "Видеоконтент",
    description: "Подкасты, шоу, короткие форматы — полный цикл производства видео для digital-каналов.",
    tags: ["Подкасты", "Шоу", "Shorts/Reels"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Услуги</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Что мы делаем</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
