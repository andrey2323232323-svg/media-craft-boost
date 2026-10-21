import type { CaseImage } from './case-media';

type CaseStudy = { title: string; company: string; services: string; number: string; link: string; results: string[]; details: { subtitle: string; tags: string[]; metrics: string[][]; task: string; work: string[]; note?: string; platform: string; handle: string }; media: { cover: CaseImage; gallery: CaseImage[] }; ceremony?: boolean; videos?: {title:string;file:string;poster:string}[]; galleryTitle?: string; achievements?: string[]; verticalGallery: boolean; formatsOnly: boolean };

export const cases: CaseStudy[] = [
  {
    "title": "Атомариум",
    "services": "SMM + YouTube канал + Таргетированная реклама",
    "number": "01",
    "link": "https://www.youtube.com/@HomoScience",
    "results": [
      "Запуск с 0",
      "+55 000 подписчиков на канал (органическое продвижение) и 4 млн просмотров",
      "+5 000 в сообществе во ВКонтакте (таргетинг)",
      "В проекте приняли участие звёзды научпопа: Владимир Сурдин, Константин Северинов, Алексей Семихатов, Станислав Дробышевский и другие"
    ],
    "company": "Росатом",
    "details": {
      "subtitle": "Научно-популярный YouTube-проект о науке, людях и технологиях.",
      "tags": [
        "SMM",
        "YouTube",
        "Таргет",
        "Работа с экспертами"
      ],
      "metrics": [
        [
          "55K",
          "подписчиков YouTube",
          "органическое продвижение"
        ],
        [
          "4 млн",
          "просмотров",
          "на канале"
        ],
        [
          "+5K",
          "подписчиков ВКонтакте",
          "таргетированная реклама"
        ]
      ],
      "task": "Запустить научно-популярный проект с нуля и привлечь аудиторию на YouTube и во ВКонтакте с помощью контента и продвижения.",
      "work": [
        "Запустили YouTube-канал с нуля",
        "Развивали канал с помощью органического продвижения",
        "Привлекали аудиторию во ВКонтакте через таргетированную рекламу",
        "Работали с экспертами научно-популярного направления"
      ],
      "note": "В проекте участвовали Владимир Сурдин, Константин Северинов, Алексей Семихатов, Станислав Дробышевский и другие.",
      "platform": "YouTube",
      "handle": "@HomoScience"
    },
    "media": {
      "cover": {
        "file": "covers/atomarium-v2.webp",
        "width": 2172,
        "height": 724,
        "crop": [
          0,
          0,
          2172,
          724
        ],
        "caption": "Художественная обложка проекта"
      },
      "gallery": [
        {
          "file": "atomarium.webp",
          "width": 1386,
          "height": 792,
          "crop": [
            17,
            454,
            434,
            244
          ],
          "caption": "Загадки времени"
        },
        {
          "file": "atomarium.webp",
          "width": 1386,
          "height": 792,
          "crop": [
            471,
            454,
            435,
            244
          ],
          "caption": "Красота"
        },
        {
          "file": "atomarium.webp",
          "width": 1386,
          "height": 792,
          "crop": [
            926,
            454,
            434,
            244
          ],
          "caption": "Воспитание"
        }
      ]
    },
    "verticalGallery": false,
    "formatsOnly": false
  },
  {
    "title": "Челябинский трубопрокатный завод",
    "services": "SMM + Таргетированная реклама",
    "number": "02",
    "link": "https://vk.ru/chtpz.tmk_group",
    "results": [
      "+4 000 в течение года в сообществе во ВКонтакте",
      "Перезапущена контент-стратегия и визуальный стиль соцсетей",
      "Внедрены новые форматы: клипы, интерактив, автоматизированные конкурсы"
    ],
    "company": "ТМК",
    "details": {
      "subtitle": "Новый визуальный язык и контент-стратегия промышленного бренда в социальных сетях.",
      "tags": [
        "SMM",
        "Таргет",
        "Контент-стратегия",
        "Дизайн"
      ],
      "metrics": [
        [
          "+4K",
          "подписчиков ВКонтакте",
          "в течение года"
        ]
      ],
      "task": "Обновить присутствие компании в социальных сетях и привлечь новую аудиторию в сообщество ВКонтакте.",
      "work": [
        "Перезапустили контент-стратегию",
        "Обновили визуальный стиль социальных сетей",
        "Внедрили клипы и интерактивные форматы",
        "Внедрили автоматизированные конкурсы",
        "Вели таргетированное продвижение"
      ],
      "platform": "ВКонтакте",
      "handle": "chtpz.tmk_group"
    },
    "media": {
      "cover": {
        "file": "covers/tmk-v2.webp",
        "width": 2172,
        "height": 724,
        "crop": [
          0,
          0,
          2172,
          724
        ],
        "caption": "Художественная обложка проекта"
      },
      "gallery": [
        {
          "file": "tmk.webp",
          "width": 1158,
          "height": 760,
          "crop": [
            31,
            532,
            200,
            150
          ],
          "caption": "ЧТПЗ"
        },
        {
          "file": "tmk.webp",
          "width": 1158,
          "height": 760,
          "crop": [
            247,
            532,
            200,
            150
          ],
          "caption": "Производство и события"
        },
        {
          "file": "tmk.webp",
          "width": 1158,
          "height": 760,
          "crop": [
            463,
            532,
            200,
            150
          ],
          "caption": "Жизнь команды"
        }
      ]
    },
    "verticalGallery": false,
    "formatsOnly": false
  },
  {
    "title": "Челябинский троллейбус",
    "services": "SMM",
    "number": "03",
    "link": "https://t.me/cheltrolleybus",
    "results": [
      "Запуск с 0",
      "Разработана контент-стратегия и визуальный стиль соцсетей",
      "+5 000 в течение года в сообществе во ВКонтакте и Телеграм"
    ],
    "company": "Синара",
    "details": {
      "subtitle": "Социальные сети транспортного холдинга: запуск и развитие городского сообщества.",
      "tags": [
        "SMM",
        "Стратегия",
        "Контент",
        "Дизайн"
      ],
      "metrics": [
        [
          "С нуля",
          "запуск проекта",
          "социальные сети"
        ],
        [
          "+5K",
          "подписчиков за год",
          "ВКонтакте и Telegram"
        ]
      ],
      "task": "С нуля выстроить присутствие транспортного холдинга в социальных сетях и сформировать аудиторию сообществ.",
      "work": [
        "Запустили проект с нуля",
        "Разработали контент-стратегию",
        "Разработали визуальный стиль социальных сетей",
        "Развивали сообщества во ВКонтакте и Telegram"
      ],
      "platform": "Telegram",
      "handle": "@cheltrolleybus"
    },
    "media": {
      "cover": {
        "file": "covers/transport-v2.webp",
        "width": 2172,
        "height": 724,
        "crop": [
          0,
          0,
          2172,
          724
        ],
        "caption": "Художественная обложка проекта"
      },
      "gallery": [
        {
          "file": "transport-clips.webp",
          "width": 644,
          "height": 702,
          "crop": [
            0,
            65,
            202,
            361
          ],
          "caption": "Люди и транспорт"
        },
        {
          "file": "transport-clips.webp",
          "width": 644,
          "height": 702,
          "crop": [
            214,
            65,
            203,
            361
          ],
          "caption": "5 лет перемен"
        },
        {
          "file": "transport-clips.webp",
          "width": 644,
          "height": 702,
          "crop": [
            429,
            65,
            203,
            361
          ],
          "caption": "Истории сотрудников"
        },
        {
          "file": "transport.webp",
          "width": 1170,
          "height": 747,
          "crop": [
            3,
            0,
            1140,
            376
          ],
          "caption": "Оформление сообщества"
        }
      ]
    },
    "verticalGallery": true,
    "formatsOnly": false
  },
  {
    "title": "Есть решение",
    "services": "Социальные сети + Короткие видео + Дизайн",
    "number": "04",
    "link": "",
    "results": [],
    "company": "Россия 24",
    "details": {
      "subtitle": "«Есть решение» — проект о бизнесе в России. Короткие видео и наглядный контент для социальных сетей.",
      "tags": [
        "Социальные сети",
        "Короткие видео",
        "Дизайн"
      ],
      "metrics": [],
      "task": "Рассказывать о бизнесе понятным языком: через короткие видео, визуальные объяснения и тематические публикации.",
      "work": [
        "Короткие видео с героями и экспертами",
        "Информационные карточки для социальных сетей",
        "Единый визуальный стиль публикаций"
      ],
      "platform": "Россия 24",
      "handle": "Есть решение"
    },
    "media": {
      "cover": {
        "file": "covers/tv-v3.webp",
        "width": 2172,
        "height": 724,
        "crop": [
          0,
          0,
          2172,
          724
        ],
        "caption": "Художественная обложка проекта"
      },
      "gallery": []
    },
    "verticalGallery": true,
    "formatsOnly": true,
    "videos": [
      {
        "title": "Ролик с делового форума",
        "file": "videos/est-reshenie/clip-2.mp4",
        "poster": "videos/est-reshenie/poster-2.webp"
      },
      {
        "title": "Интервью с предпринимателем",
        "file": "videos/est-reshenie/clip-1.mp4",
        "poster": "videos/est-reshenie/poster-1.webp"
      }
    ]
  },
  {
    "number": "05",
    "formatsOnly": false,
    "details": {
      "tags": [
        "SMM",
        "Разработка сайта",
        "PR",
        "Офлайн-мероприятие"
      ],
      "handle": "@fhistory_official",
      "platform": "Telegram",
      "task": "Обеспечить комплексное сопровождение литературной премии в digital и организовать офлайн-мероприятие.",
      "metrics": [],
      "work": [
        "Полное сопровождение в социальных сетях",
        "Разработка сайта проекта",
        "PR-сопровождение",
        "Организация офлайн-мероприятия"
      ],
      "subtitle": "Полное сопровождение литературной премии: от социальных сетей и сайта до PR и церемонии награждения."
    },
    "media": {
      "gallery": [
        {
          "height": 1707,
          "file": "literary-award/ceremony-2.webp",
          "caption": "Вручение награды",
          "crop": [
            0,
            0,
            2560,
            1707
          ],
          "width": 2560
        },
        {
          "height": 1708,
          "file": "literary-award/ceremony-3.webp",
          "caption": "Гости церемонии",
          "crop": [
            0,
            0,
            2560,
            1708
          ],
          "width": 2560
        },
        {
          "height": 1707,
          "file": "literary-award/ceremony-4.webp",
          "caption": "Интервью на церемонии",
          "crop": [
            0,
            0,
            2560,
            1707
          ],
          "width": 2560
        },
        {
          "height": 1707,
          "file": "literary-award/ceremony-5.webp",
          "caption": "Световое шоу",
          "crop": [
            0,
            0,
            2560,
            1707
          ],
          "width": 2560
        }
      ],
      "cover": {
        "height": 1708,
        "file": "literary-award/ceremony-1.webp",
        "caption": "Сцена церемонии награждения литературной премии",
        "crop": [
          0,
          380,
          2560,
          1000
        ],
        "width": 2560
      }
    },
    "company": "Росатом",
    "results": [],
    "services": "SMM + Разработка сайта + PR + Офлайн-мероприятие",
    "verticalGallery": false,
    "title": "Литературная премия",
    "link": "https://t.me/fhistory_official",
    "ceremony": true
  },
  {
    "title": "Строгоорганик",
    "services": "YouTube",
    "number": "06",
    "link": "https://www.youtube.com/@strogoorganic/",
    "results": [
      "Перезапущен видеопродакшен для YouTube",
      "Опубликовано более 100 роликов",
      "+3 000 лидов в течение года (органическое продвижение)"
    ],
    "company": "Строгоорганик",
    "details": {
      "subtitle": "Видеоконтент для онлайн-образования: от перезапуска производства до привлечения лидов.",
      "tags": [
        "YouTube",
        "Видеопродакшен",
        "Органическое продвижение"
      ],
      "metrics": [
        [
          "100+",
          "опубликованных роликов",
          "на YouTube"
        ],
        [
          "+3K",
          "лидов за год",
          "органическое продвижение"
        ]
      ],
      "task": "Перезапустить видеопродакшен онлайн-школы и развивать YouTube как канал органического привлечения лидов.",
      "work": [
        "Перезапустили видеопродакшен для YouTube",
        "Подготовили и опубликовали более 100 роликов",
        "Привлекли более 3 000 лидов за год через органическое продвижение"
      ],
      "platform": "YouTube",
      "handle": "@strogoorganic"
    },
    "media": {
      "cover": {
        "file": "covers/school-v2.webp",
        "width": 2172,
        "height": 724,
        "crop": [
          0,
          0,
          2172,
          724
        ],
        "caption": "Художественная обложка проекта"
      },
      "gallery": [
        {
          "file": "school.webp",
          "width": 1425,
          "height": 782,
          "crop": [
            39,
            468,
            434,
            244
          ],
          "caption": "Путь длиною в 7 лет"
        },
        {
          "file": "school.webp",
          "width": 1425,
          "height": 782,
          "crop": [
            493,
            468,
            435,
            244
          ],
          "caption": "Сажайте лаванду"
        },
        {
          "file": "school.webp",
          "width": 1425,
          "height": 782,
          "crop": [
            948,
            468,
            434,
            244
          ],
          "caption": "Гортензии на участке"
        }
      ]
    },
    "verticalGallery": false,
    "formatsOnly": false,
    "videos": [
      {
        "title": "Мария Винокур — ролик 1",
        "file": "videos/strogoorganic/clip-1.mp4",
        "poster": "videos/strogoorganic/poster-1.webp"
      },
      {
        "title": "Мария Винокур — ролик 2",
        "file": "videos/strogoorganic/clip-2.mp4",
        "poster": "videos/strogoorganic/poster-2.webp"
      },
      {
        "title": "Мария Винокур — ролик 3",
        "file": "videos/strogoorganic/clip-3.mp4",
        "poster": "videos/strogoorganic/poster-3.webp"
      }
    ]
  },
  {
    "title": "Мотив × «Одна Шестая»",
    "company": "Сотовый оператор Мотив × кинофестиваль «Одна Шестая»",
    "services": "Производство коротких видеороликов",
    "number": "07",
    "link": "",
    "results": [],
    "details": {
      "subtitle": "«Экскурсии по киноместам Екатеринбурга» — серия коротких видеороликов.",
      "tags": [
        "Видеопродакшен",
        "Сценарий",
        "Кастинг",
        "Съёмки",
        "Постпродакшен"
      ],
      "metrics": [],
      "task": "Создать короткие видеоролики «Экскурсии по киноместам Екатеринбурга» для совместного проекта оператора Мотив и кинофестиваля «Одна Шестая».",
      "work": [
        "Разработка сценария",
        "Поиск актёров",
        "Организация и проведение съёмок",
        "Постпродакшен"
      ],
      "platform": "",
      "handle": ""
    },
    "media": {
      "cover": {
        "file": "covers/motiv-film.webp",
        "width": 2172,
        "height": 724,
        "crop": [
          0,
          0,
          2172,
          724
        ],
        "caption": "Экскурсии по киноместам Екатеринбурга"
      },
      "gallery": []
    },
    "videos": [
      {
        "title": "Литературный квартал",
        "file": "videos/motiv/clip-1.mp4",
        "poster": "videos/motiv/poster-1.webp"
      },
      {
        "title": "Кинематограф Екатеринбурга",
        "file": "videos/motiv/clip-2.mp4",
        "poster": "videos/motiv/poster-2.webp"
      },
      {
        "title": "Храм на Крови",
        "file": "videos/motiv/clip-3.mp4",
        "poster": "videos/motiv/poster-3.webp"
      }
    ],
    "verticalGallery": false,
    "formatsOnly": false
  }
];
