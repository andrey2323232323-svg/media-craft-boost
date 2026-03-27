import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Научно-популярный проект",
    services: "SMM + YouTube канал",
    number: "01",
    link: "https://www.youtube.com/@HomoScience",
    results: [
      "Запуск с 0",
      "+55 000 подписчиков на канал (органическое продвижение) и 4 млн просмотров",
      "+5 000 в сообществе во ВКонтакте (таргетинг)",
      "В проекте приняли участие звёзды научпопа: Владимир Сурдин, Константин Северинов, Алексей Семихатов, Станислав Дробышевский и другие",
    ],
  },
  {
    title: "Онлайн-школа",
    services: "YouTube",
    number: "02",
    link: "https://www.youtube.com/@strogoorganic/",
    results: [
      "Перезапущен видеопродакшен для YouTube",
      "Опубликовано более 100 роликов",
      "+3 000 лидов в течение года (органическое продвижение)",
    ],
  },
  {
    title: "Металлургическая компания",
    services: "SMM",
    number: "03",
    link: "https://vk.com/chtpz.tmk_group",
    results: [
      "+4 000 в течение года в сообществе во ВКонтакте",
      "Перезапущена контент-стратегия и визуальный стиль соцсетей",
      "Внедрены новые форматы: клипы, интерактив, автоматизированные конкурсы",
    ],
  },
  {
    title: "Транспортный холдинг",
    services: "SMM",
    number: "04",
    link: "https://t.me/cheltrolleybus",
    results: [
      "Запуск с 0",
      "Разработана контент-стратегия и визуальный стиль соцсетей",
      "+5 000 в течение года в сообществе во ВКонтакте и Телеграм",
    ],
  },
  {
    title: "ТВ-передача",
    services: "SMM + Таргетированная реклама",
    number: "05",
    link: "https://t.me/resheniee",
    results: [
      "Запуск с 0",
      "Разработана контент-стратегия и визуальный стиль соцсетей",
      "+15 000 в течение года в сообществе во ВКонтакте и Телеграм (таргетинг и интеграции)",
    ],
  },
  {
    title: "Научно-популярный телеграм-канал",
    services: "Telegram",
    number: "06",
    link: undefined,
    results: [],
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
              className="group border-b border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between py-6 md:py-8">
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-muted-foreground text-sm font-mono">{item.number}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading text-lg md:text-2xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{item.services}</p>
                  </div>
                </div>
              </div>

              {item.results.length > 0 && (
                <div className="pl-12 md:pl-24 pb-6 md:pb-8">
                  <ul className="space-y-2">
                    {item.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
