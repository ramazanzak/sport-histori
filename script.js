/* Хроники Спорта — база данных дисциплин */

const SPORTS_DATABASE = [
  {
    id: 'football',
    name: 'Футбол',
    subtitle: 'Игра миллионов и король мирового спорта',
    originYear: '1863 год (Англия)',
    shortYear: '1863',
    ancientRoots: 'Древний Китай («Цуцзюй», II век до н.э.)',
    category: 'Командный игровой спорт',
    shortSummary: 'Самый популярный командный вид спорта на планете, в котором две команды по 11 игроков стремятся забить мяч в ворота соперника ногами или любой другой частью тела, кроме рук.',
    heroStats: [
      { label: 'Площадка', value: '105 × 68 м' },
      { label: 'Ворота', value: '7,32 × 2,44 м' },
      { label: 'Состав', value: '11 на 11' }
    ],
    galleryFrames: [
      {
        title: 'Тактическая геометрия поля',
        caption: 'Классический размер арены 105 × 68 м с воротами 7,32 м',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="16" y="10" width="188" height="90" rx="3" stroke="#a8956a" stroke-width="1.5"/><rect x="8" y="38" width="8" height="34" stroke="#fbf3df" stroke-width="1.5"/><rect x="204" y="38" width="8" height="34" stroke="#fbf3df" stroke-width="1.5"/><path d="M40 75 Q110 20 198 52" stroke="#d4a537" stroke-width="2" stroke-dasharray="5 3"/></svg>'
      },
      {
        title: 'Эволюция футбольного мяча',
        caption: 'От шнурованной кожи 1880-х до бесшовных термопанелей',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><circle cx="65" cy="55" r="22" stroke="#a8956a" stroke-width="1.5"/><path d="M55 55H75M60 48V62M65 48V62M70 48V62" stroke="#a8956a" stroke-width="1"/><circle cx="155" cy="55" r="22" fill="#fbf3df" stroke="#d4a537" stroke-width="1.5"/><polygon points="155,46 163,52 160,62 150,62 147,52" fill="#2a200f"/></svg>'
      }
    ],
    fullHistory: {
      intro: 'Футбол прошел путь длиной более двух тысячелетий: от древнекитайской игры «Цуцзюй» до создания Футбольной ассоциации Англии в 1863 году и современных турниров Лиги чемпионов и Чемпионатов мира.',
      timeline: [
        { year: 'II век до н.э.', title: 'Китайская игра «Цуцзюй»', desc: 'Упражнение с кожаным мячом, официально признанное ФИФА древнейшим предшественником футбола.' },
        { year: '1863 год', title: 'Свод правил в Лондоне', desc: '26 октября 1863 года приняты первые официальные правила, полностью запретившие игру руками полевым игрокам.' },
        { year: '1891 год', title: 'Сетка на воротах и пенальти', desc: 'Инженер из Ливерпуля Джон Броди запатентовал сетку для ворот, а в правилах появился 11-метровый удар.' },
        { year: '1930 год', title: 'Первый Чемпионат мира', desc: 'В Уругвае прошел первый мундиаль под эгидой ФИФА.' }
      ],
      equipmentEvolution: [
        { item: 'Мяч', detail: 'От тяжелых кожаных сфер со шнуровкой до высокотехнологичных бесшовных мячей с датчиками положения.' },
        { item: 'Бутсы', detail: 'От тяжелых кожаных ботинок XIX века до ультралегких карбоновых бутс весом 170 граммов.' },
        { item: 'Система VAR', detail: 'Видеопомощь арбитрам и автоматическая фиксация пересечения линии ворот.' }
      ],
      keyStats: [
        { label: 'Длительность матча', value: '2 тайма по 45 минут' },
        { label: 'Размер ворот', value: '7,32 × 2,44 м' },
        { label: 'Состав команд', value: '11 на 11 игроков' }
      ]
    }
  },
  {
    id: 'boxing',
    name: 'Бокс',
    subtitle: 'Благородное искусство поединка на ринге',
    originYear: '1867 год (Правила Куинсберри)',
    shortYear: '1867',
    ancientRoots: 'Античная Олимпия (688 г. до н.э.)',
    category: 'Олимпийское единоборство',
    shortSummary: 'Контактное единоборство внутри квадратного ринга с канатами, где решают скорость реакции, работа ног, защита и точные удары в мягких перчатках.',
    heroStats: [
      { label: 'Ринг', value: '6,10 × 6,10 м' },
      { label: 'Раунд', value: '3 минуты' },
      { label: 'Нокдаун', value: '10 секунд' }
    ],
    galleryFrames: [
      {
        title: 'Геометрия ринга',
        caption: 'Квадрат 6,10 × 6,10 м, окруженный четырьмя канатами',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><polygon points="45,20 175,20 195,90 25,90" stroke="#a8956a" stroke-width="1.5"/><line x1="35" y1="55" x2="185" y2="55" stroke="#d4a537" stroke-width="1" stroke-dasharray="4 3"/></svg>'
      },
      {
        title: 'Чемпионский пояс',
        caption: 'Главный трофей абсолютных чемпионов мира',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="30" y="42" width="160" height="26" rx="6" stroke="#a8956a" stroke-width="1.5"/><ellipse cx="110" cy="55" rx="26" ry="18" fill="#d4a537" stroke="#fbf3df" stroke-width="1.5"/></svg>'
      }
    ],
    fullHistory: {
      intro: 'Кулачные поединки входили в античные Олимпийские игры еще в 688 году до н.э., а современный кодекс чести с раундами по 3 минуты и мягкими перчатками был утвержден маркизом Куинсберри в 1867 году.',
      timeline: [
        { year: '688 г. до н.э.', title: 'Античная «Пигмахия»', desc: 'Дебют кулачного боя на 23-х античных Олимпийских играх.' },
        { year: '1867 год', title: 'Правила маркиза Куинсберри', desc: 'Установлены раунды по 3 минуты, минутный перерыв, 10 секунд на нокдаун и обязательные перчатки.' },
        { year: '1904 год', title: 'Олимпийский бокс ХХ века', desc: 'Включение современного бокса в программу Олимпийских игр в Сент-Луисе.' }
      ],
      equipmentEvolution: [
        { item: 'Боксерские перчатки', detail: 'Калибруются по весу в унциях (8, 10, 12–16 oz) для надежной защиты кисти и соперника.' },
        { item: 'Ринг с канатами', detail: 'Амортизирующий настил и четыре упругих каната по периметру.' }
      ],
      keyStats: [
        { label: 'Раунд', value: '3 минуты (1 мин. перерыв)' },
        { label: 'Размер ринга', value: '6,10 × 6,10 м' },
        { label: 'Отсчет нокдауна', value: '10 секунд' }
      ]
    }
  },
  {
    id: 'volleyball',
    name: 'Волейбол',
    subtitle: 'Полет над сеткой и командная синхронность',
    originYear: '1895 год (США, Уильям Морган)',
    shortYear: '1895',
    ancientRoots: 'Изобретен под названием «Минтонет»',
    category: 'Командный неконтактный спорт',
    shortSummary: 'Сверхдинамичная командная игра через высокую сетку, в которой 6 игроков стремятся атаковать площадку соперника за три касания мяча.',
    heroStats: [
      { label: 'Площадка', value: '18 × 9 м' },
      { label: 'Высота сетки', value: '2,43 м / 2,24 м' },
      { label: 'Состав', value: '6 на 6' }
    ],
    galleryFrames: [
      {
        title: 'Разметка 18 × 9 метров',
        caption: '6 игровых зон и трехметровая линия атаки',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="20" y="15" width="180" height="80" stroke="#a8956a" stroke-width="1.5"/><line x1="80" y1="15" x2="80" y2="95" stroke="#a8956a" stroke-width="1"/><line x1="140" y1="15" x2="140" y2="95" stroke="#a8956a" stroke-width="1"/><line x1="110" y1="10" x2="110" y2="100" stroke="#d4a537" stroke-width="2"/></svg>'
      },
      {
        title: 'Комбинация в 3 касания',
        caption: 'Прием — Пасующая передача — Атакующий удар',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><path d="M50 70 Q80 40 110 35 Q140 30 170 60" stroke="#d4a537" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="50" cy="70" r="7" fill="#a8956a"/><circle cx="110" cy="35" r="7" fill="#d4a537"/><circle cx="170" cy="60" r="7" fill="#fbf3df"/></svg>'
      }
    ],
    fullHistory: {
      intro: 'Изобретен 9 февраля 1895 года преподавателем Уильямом Морганом в городе Холиок (США) как командная игра без жестких столкновений.',
      timeline: [
        { year: '1895 год', title: 'Рождение игры «Минтонет»', desc: 'Уильям Морган натянул сетку на высоте 198 см для перебивания мяча руками.' },
        { year: '1922 год', title: 'Правило трех касаний', desc: 'Установлен лимит в три касания мяча на команду перед переводом на сторону соперника.' },
        { year: '1964 год', title: 'Олимпийский дебют в Токио', desc: 'Включение мужского и женского волейбола в программу Олимпийских игр.' }
      ],
      equipmentEvolution: [
        { item: 'Сине-желтый мяч', detail: 'Трехцветный дизайн введен в 1998 году для лучшей видимости вращения мяча.' },
        { item: 'Амплуа Либеро', detail: 'Специализированный защитник в контрастной форме на задней линии.' }
      ],
      keyStats: [
        { label: 'Площадка', value: '18 × 9 метров' },
        { label: 'Высота сетки', value: '2,43 м (М) / 2,24 м (Ж)' },
        { label: 'Счет в партии', value: 'До 25 очков' }
      ]
    }
  },
  {
    id: 'hockey',
    name: 'Хоккей с шайбой',
    subtitle: 'Сверхскорости на льду и битва за Кубок',
    originYear: '1875 год (Канада, Монреаль)',
    shortYear: '1875',
    ancientRoots: 'Зимние игры на замерзших озерах Канады',
    category: 'Зимний командный спорт',
    shortSummary: 'Самая скоростная командная игра на льду: стальные коньки, карбоновые клюшки и молниеносные броски вулканизированной шайбы.',
    heroStats: [
      { label: 'Периоды', value: '3 по 20 минут' },
      { label: 'Вес шайбы', value: '156–170 г' },
      { label: 'Состав', value: '5 + вратарь' }
    ],
    galleryFrames: [
      {
        title: 'Ледовая коробка с бортами',
        caption: 'Три зоны и 5 кругов для вбрасывания шайбы',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="15" y="15" width="190" height="80" rx="20" stroke="#a8956a" stroke-width="1.5"/><line x1="110" y1="15" x2="110" y2="95" stroke="#d4a537" stroke-width="1.5"/><circle cx="110" cy="55" r="14" stroke="#a8956a" stroke-width="1.2"/></svg>'
      },
      {
        title: 'Вулканизированная шайба',
        caption: 'Плоская форма не дает снаряду вылетать за борта',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><ellipse cx="110" cy="55" rx="36" ry="14" fill="#433619" stroke="#d4a537" stroke-width="1.5"/></svg>'
      }
    ],
    fullHistory: {
      intro: 'Первый официальный матч в закрытом катке состоялся 3 марта 1875 года в канадском Монреале, где студенты впервые применили плоскую шайбу.',
      timeline: [
        { year: '1875 год', title: 'Первый матч в Монреале', desc: 'Игра двух команд на крытом катке «Виктория» с плоской деревянной шайбой.' },
        { year: '1893 год', title: 'Учреждение Кубка Стэнли', desc: 'Лорд Фредерик Стэнли подарил серебряную чашу для награждения лучшей команды Канады.' },
        { year: '1959 год', title: 'Появление маски вратаря', desc: 'Голкипер Жак Плант впервые вышел на лед в защитной маске из стекловолокна.' }
      ],
      equipmentEvolution: [
        { item: 'Карбоновые клюшки', detail: 'Пришли на смену деревянным клюшкам, позволив бросать шайбу со скоростью свыше 175 км/ч.' },
        { item: 'Защитный визор и шлем', detail: 'Обязательная защита головы и глаз для всех полевых игроков.' }
      ],
      keyStats: [
        { label: 'Игровое время', value: '3 периода по 20 минут' },
        { label: 'Состав на льду', value: '5 полевых + 1 вратарь' },
        { label: 'Вес шайбы', value: '156–170 граммов' }
      ]
    }
  },
  {
    id: 'basketball',
    name: 'Баскетбол',
    subtitle: 'Высота кольца 3,05 м и магия трехочковой дуги',
    originYear: '1891 год (США, Джеймс Нейсмит)',
    shortYear: '1891',
    ancientRoots: '13 правил колледжа в Спрингфилде',
    category: 'Командный игровой спорт',
    shortSummary: 'Стремительная игра на паркете, где две пятерки игроков соревнуются в дриблинге, передачах и точных бросках в кольцо на высоте 3,05 метра.',
    heroStats: [
      { label: 'Высота кольца', value: '3,05 м' },
      { label: 'Атака', value: '24 секунды' },
      { label: 'Состав', value: '5 на 5' }
    ],
    galleryFrames: [
      {
        title: 'Щит и стальное кольцо',
        caption: 'Высота 3,05 м осталась неизменной с 1891 года',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="75" y="15" width="70" height="40" rx="4" stroke="#a8956a" stroke-width="1.5"/><ellipse cx="110" cy="52" rx="18" ry="5" stroke="#d4a537" stroke-width="2"/><path d="M94 55 L100 76 M126 55 L120 76 M102 56 L106 76 M118 56 L114 76" stroke="#fbf3df" stroke-width="1" opacity="0.7"/></svg>'
      },
      {
        title: 'Счетчик 24 секунд',
        caption: 'Введен в 1954 году для поддержания высокого темпа атак',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="65" y="25" width="90" height="60" rx="8" fill="#1f1809" stroke="#d4a537" stroke-width="1.5"/><text x="110" y="65" text-anchor="middle" fill="#d4a537" font-family="monospace" font-size="24" font-weight="500">24.0</text></svg>'
      }
    ],
    fullHistory: {
      intro: 'В декабре 1891 года преподаватель Джеймс Нейсмит прибил две корзины из-под персиков к балкону спортивного зала в Спрингфилде и сформулировал 13 правил новой игры.',
      timeline: [
        { year: '1891 год', title: 'Первые 13 правил Нейсмита', desc: 'Корзины имели глухое дно, а мяч после каждого попадания доставали со стремянкой.' },
        { year: '1954 год', title: 'Правило 24 секунд', desc: 'Ограничение времени на атаку сделало баскетбол одной из самых динамичных игр мира.' },
        { year: '1979 год', title: 'Введение трехочковой дуги', desc: 'Дальние броски изменили геометрию и тактику баскетбола.' }
      ],
      equipmentEvolution: [
        { item: 'Прозрачный щит', detail: 'Заменил старые деревянные и сетчатые щиты, открыв идеальный обзор зрителям за кольцом.' },
        { item: 'Оранжевый мяч', detail: 'Введен в 1957 году для максимальной контрастности на светлом паркете.' }
      ],
      keyStats: [
        { label: 'Высота кольца', value: '3,05 метра' },
        { label: 'Время на атаку', value: '24 секунды' },
        { label: 'Состав на паркете', value: '5 на 5 игроков' }
      ]
    }
  },
  {
    id: 'tennis',
    name: 'Большой теннис',
    subtitle: 'Королевская дуэль на кортах Большого шлема',
    originYear: '1873 год (Англия, Уимблдон)',
    shortYear: '1873',
    ancientRoots: 'Французская королевская игра «Жё-де-пом»',
    category: 'Ракеточный вид спорта',
    shortSummary: 'Интеллектуальная дуэль на травяных, грунтовых и хардовых кортах, где сочетаются мощь подачи, вращение мяча и точность попадания в линию.',
    heroStats: [
      { label: 'Длина корта', value: '23,77 м' },
      { label: 'Счет в гейме', value: '15 — 30 — 40' },
      { label: 'Большой шлем', value: '4 турнира' }
    ],
    galleryFrames: [
      {
        title: 'Три типа покрытия кортов',
        caption: 'Трава, грунт и хард определяют отскок и скорость мяча',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><rect x="15" y="25" width="55" height="60" rx="4" fill="#2a4a2e" stroke="#5a9a5a" stroke-width="1"/><rect x="82" y="25" width="55" height="60" rx="4" fill="#8a4428" stroke="#c87a58" stroke-width="1"/><rect x="150" y="25" width="55" height="60" rx="4" fill="#1e3a5a" stroke="#5a8aba" stroke-width="1"/></svg>'
      },
      {
        title: 'Счет 15 — 30 — 40',
        caption: 'Историческая традиция отсчета очков по четвертям циферблата',
        svg: '<svg class="w-full h-28" viewBox="0 0 220 110" fill="none"><circle cx="110" cy="55" r="30" stroke="#d4a537" stroke-width="1.5"/><line x1="110" y1="55" x2="128" y2="55" stroke="#fbf3df" stroke-width="2"/><line x1="110" y1="55" x2="110" y2="33" stroke="#d4a537" stroke-width="1.5"/></svg>'
      }
    ],
    fullHistory: {
      intro: 'Вырос из французской игры «Жё-де-пом», а в 1877 году в Лондоне прошел первый в истории Уимблдонский турнир на травяных кортах.',
      timeline: [
        { year: 'XVI век', title: 'Появление ракеток со струнами', desc: 'На смену игре ладонью и перчаткой пришли первые деревянные ракетки.' },
        { year: '1877 год', title: 'Первый Уимблдонский турнир', desc: 'Утверждены современные размеры корта и правила подачи.' },
        { year: '1970 год', title: 'Введение тай-брейка', desc: 'Решающий гейм при счете 6:6 избавил теннис от бесконечных сетов.' }
      ],
      equipmentEvolution: [
        { item: 'Графитовые ракетки', detail: 'Сверхлегкие композитные материалы заменили дерево в 1980-х годах.' },
        { item: 'Система Hawk-Eye', detail: 'Оптические камеры строят 3D-траекторию полета мяча с точностью до миллиметра.' }
      ],
      keyStats: [
        { label: 'Длина корта', value: '23,77 метра' },
        { label: 'Счет в гейме', value: '15 — 30 — 40 — Гейм' },
        { label: 'Большой шлем', value: '4 главных турнира' }
      ]
    }
  }
];

/* Улучшенные анимированные SVG-иллюстрации арен (320×180) */
const VISUALS = {
  football: `<svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
    <defs>
      <pattern id="fb-mow" width="34" height="180" patternUnits="userSpaceOnUse">
        <rect width="17" height="180" fill="#356930"/>
        <rect x="17" width="17" height="180" fill="#417a3a"/>
      </pattern>
      <pattern id="fb-net" width="4" height="4" patternUnits="userSpaceOnUse">
        <path d="M0 0H4M0 0V4" stroke="#ffffff" stroke-width="0.6" opacity="0.65"/>
      </pattern>
    </defs>
    <rect x="4" y="8" width="312" height="164" rx="5" fill="url(#fb-mow)"/>
    <g stroke="#f5f0e1" stroke-width="1.5" fill="none">
      <rect x="24" y="16" width="272" height="148"/>
      <line x1="160" y1="16" x2="160" y2="164"/>
      <circle cx="160" cy="90" r="26"/>
      <rect x="24" y="42" width="42" height="96"/>
      <rect x="254" y="42" width="42" height="96"/>
      <rect x="24" y="60" width="16" height="60"/>
      <rect x="280" y="60" width="16" height="60"/>
      <path d="M66 72 A22 22 0 0 1 66 108"/>
      <path d="M254 72 A22 22 0 0 0 254 108"/>
      <path d="M24 23 A7 7 0 0 0 31 16"/>
      <path d="M289 16 A7 7 0 0 0 296 23"/>
      <path d="M24 157 A7 7 0 0 1 31 164"/>
      <path d="M289 164 A7 7 0 0 1 296 157"/>
    </g>
    <circle cx="160" cy="90" r="2.5" fill="#f5f0e1"/>
    <circle cx="52" cy="90" r="2" fill="#f5f0e1"/>
    <circle cx="268" cy="90" r="2" fill="#f5f0e1"/>
    <g>
      <polygon points="24,66 10,70 10,110 24,114" fill="#1d3b1b" opacity="0.55"/>
      <polygon points="24,66 10,70 10,110 24,114" fill="url(#fb-net)"/>
      <polyline points="24,66 10,70 10,110 24,114" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="24" y1="65" x2="24" y2="115" stroke="#ffffff" stroke-width="2.4"/>
      <circle cx="24" cy="66" r="1.8" fill="#ffffff"/>
      <circle cx="24" cy="114" r="1.8" fill="#ffffff"/>
    </g>
    <g>
      <polygon points="296,66 310,70 310,110 296,114" fill="#1d3b1b" opacity="0.55"/>
      <polygon points="296,66 310,70 310,110 296,114" fill="url(#fb-net)"/>
      <polyline points="296,66 310,70 310,110 296,114" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="296" y1="65" x2="296" y2="115" stroke="#ffffff" stroke-width="2.4"/>
      <circle cx="296" cy="66" r="1.8" fill="#ffffff"/>
      <circle cx="296" cy="114" r="1.8" fill="#ffffff"/>
    </g>
    <g>
      <circle cx="0" cy="0" r="6.5" fill="#fbf3df" stroke="#1e1b18" stroke-width="1.1"/>
      <polygon points="0,-3.2 3,-1 1.9,2.6 -1.9,2.6 -3,-1" fill="#1e1b18"/>
      <path d="M0,-3.2 V-6.2 M3,-1 L5.8,-2 M1.9,2.6 L4.2,4.8 M-1.9,2.6 L-4.2,4.8 M-3,-1 L-5.8,-2" stroke="#1e1b18" stroke-width="0.9"/>
      <animateMotion dur="3.4s" repeatCount="indefinite"
        path="M160,90 Q205,42 299,84 Q245,132 160,90 Q115,42 21,96 Q75,132 160,90"/>
    </g>
  </svg>`,

  boxing: `<svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
    <polygon points="18,166 302,166 266,46 54,46" fill="#46251f"/>
    <polygon points="40,152 280,152 252,58 68,58" fill="#7c4234"/>
    <polygon points="40,152 280,152 280,162 40,162" fill="#2c1713"/>
    <rect x="64" y="24" width="7" height="36" rx="2" fill="#c93b2b"/>
    <rect x="249" y="24" width="7" height="36" rx="2" fill="#2f66a3"/>
    <line x1="71" y1="30" x2="249" y2="30" stroke="#c93b2b" stroke-width="2.4"/>
    <line x1="71" y1="40" x2="249" y2="40" stroke="#f5f0e1" stroke-width="2.4"/>
    <line x1="71" y1="50" x2="249" y2="50" stroke="#2f66a3" stroke-width="2.4"/>
    <rect x="24" y="88" width="9" height="78" rx="2.5" fill="#c93b2b" stroke="#2a200f" stroke-width="1"/>
    <rect x="287" y="88" width="9" height="78" rx="2.5" fill="#2f66a3" stroke="#2a200f" stroke-width="1"/>
    <path d="M33 106 Q160 116 287 106" stroke="#c93b2b" stroke-width="3.2" fill="none"/>
    <path d="M33 123 Q160 133 287 123" stroke="#f5f0e1" stroke-width="3.2" fill="none"/>
    <path d="M33 140 Q160 150 287 140" stroke="#2f66a3" stroke-width="3.2" fill="none"/>
    <g>
      <g transform="translate(88 86)">
        <rect x="-26" y="-12" width="18" height="24" rx="4" fill="#fbf3df" stroke="#2a200f" stroke-width="1.5"/>
        <line x1="-21" y1="-8" x2="-21" y2="8" stroke="#a8956a" stroke-width="1.2"/>
        <line x1="-15" y1="-8" x2="-15" y2="8" stroke="#a8956a" stroke-width="1.2"/>
        <path d="M-9,-14 C-4,-22 18,-22 25,-12 C31,-3 30,10 21,16 C12,21 -4,19 -9,12 Z" fill="#d4a537" stroke="#2a200f" stroke-width="1.6"/>
        <path d="M-1,-14 C6,-17 16,-16 20,-10" stroke="#f6dd95" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M-4,7 C3,4 15,6 17,13 C18,19 8,23 -1,19 C-5,17 -6,11 -4,7 Z" fill="#b98a22" stroke="#2a200f" stroke-width="1.5"/>
        <path d="M12,-14 C16,-7 16,2 12,8" stroke="#7d5b11" stroke-width="1.2" stroke-linecap="round"/>
      </g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 36 -4; 0 0; 0 0"
        keyTimes="0; 0.22; 0.45; 1" dur="1.8s" repeatCount="indefinite"/>
    </g>
    <g>
      <g transform="translate(232 86) scale(-1 1)">
        <rect x="-26" y="-12" width="18" height="24" rx="4" fill="#fbf3df" stroke="#2a200f" stroke-width="1.5"/>
        <line x1="-21" y1="-8" x2="-21" y2="8" stroke="#a8956a" stroke-width="1.2"/>
        <line x1="-15" y1="-8" x2="-15" y2="8" stroke="#a8956a" stroke-width="1.2"/>
        <path d="M-9,-14 C-4,-22 18,-22 25,-12 C31,-3 30,10 21,16 C12,21 -4,19 -9,12 Z" fill="#c93b2b" stroke="#2a200f" stroke-width="1.6"/>
        <path d="M-1,-14 C6,-17 16,-16 20,-10" stroke="#f08376" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M-4,7 C3,4 15,6 17,13 C18,19 8,23 -1,19 C-5,17 -6,11 -4,7 Z" fill="#9c291c" stroke="#2a200f" stroke-width="1.5"/>
        <path d="M12,-14 C16,-7 16,2 12,8" stroke="#6b180e" stroke-width="1.2" stroke-linecap="round"/>
      </g>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 0; -36 -4; 0 0"
        keyTimes="0; 0.5; 0.72; 1" dur="1.8s" repeatCount="indefinite"/>
    </g>
    <g transform="translate(160 80)" opacity="0">
      <polygon points="0,-14 3.5,-4 14,-4 5.5,2.5 8.5,12 0,6 -8.5,12 -5.5,2.5 -14,-4 -3.5,-4" fill="#ffe066" stroke="#ffffff" stroke-width="1"/>
      <animate attributeName="opacity"
        values="0; 0; 1; 0; 0; 1; 0; 0"
        keyTimes="0; 0.18; 0.22; 0.3; 0.68; 0.72; 0.8; 1" dur="1.8s" repeatCount="indefinite"/>
    </g>
  </svg>`,

  volleyball: `<svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
    <defs>
      <pattern id="vb-mesh" width="5" height="5" patternUnits="userSpaceOnUse">
        <path d="M0 0H5M0 0V5" stroke="#fbf3df" stroke-width="0.7" opacity="0.85"/>
      </pattern>
      <pattern id="vb-wood" width="24" height="10" patternUnits="userSpaceOnUse">
        <rect width="24" height="10" fill="#d4893b"/>
        <line x1="0" y1="10" x2="24" y2="10" stroke="#bd752c" stroke-width="0.6"/>
      </pattern>
    </defs>
    <rect x="6" y="8" width="308" height="164" rx="5" fill="#1e6078"/>
    <rect x="34" y="28" width="252" height="124" fill="url(#vb-wood)"/>
    <rect x="118" y="28" width="84" height="124" fill="#c9752a" opacity="0.65"/>
    <g stroke="#ffffff" stroke-width="1.8" fill="none">
      <rect x="34" y="28" width="252" height="124"/>
      <line x1="118" y1="28" x2="118" y2="152"/>
      <line x1="202" y1="28" x2="202" y2="152"/>
      <line x1="160" y1="28" x2="160" y2="152" opacity="0.45"/>
    </g>
    <g stroke="#ffffff" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.85">
      <line x1="118" y1="16" x2="118" y2="26"/>
      <line x1="118" y1="154" x2="118" y2="164"/>
      <line x1="202" y1="16" x2="202" y2="26"/>
      <line x1="202" y1="154" x2="202" y2="164"/>
    </g>
    <rect x="163" y="28" width="8" height="124" fill="#2a190a" opacity="0.28"/>
    <g>
      <circle cx="160" cy="20" r="3.5" fill="#d9dfe3" stroke="#2a200f" stroke-width="1"/>
      <circle cx="160" cy="160" r="3.5" fill="#d9dfe3" stroke="#2a200f" stroke-width="1"/>
      <rect x="155" y="24" width="10" height="132" fill="#18323d" opacity="0.45"/>
      <rect x="155" y="24" width="10" height="132" fill="url(#vb-mesh)"/>
      <line x1="155" y1="24" x2="155" y2="156" stroke="#ffffff" stroke-width="2.2"/>
      <line x1="165" y1="24" x2="165" y2="156" stroke="#e2d9c5" stroke-width="1.2"/>
      <rect x="158.5" y="13" width="3" height="16" fill="#ffffff"/>
      <rect x="158.5" y="13" width="3" height="4" fill="#d93b2b"/>
      <rect x="158.5" y="21" width="3" height="4" fill="#d93b2b"/>
      <rect x="158.5" y="151" width="3" height="16" fill="#ffffff"/>
      <rect x="158.5" y="155" width="3" height="4" fill="#d93b2b"/>
      <rect x="158.5" y="163" width="3" height="4" fill="#d93b2b"/>
    </g>
    <g>
      <circle cx="0" cy="0" r="7" fill="#f7d046" stroke="#1e293b" stroke-width="1"/>
      <path d="M-6.5,-2 Q0,-6 6.5,-2 Q4,4 0,6.8 Q-4,4 -6.5,-2 Z" fill="#2563eb"/>
      <path d="M-4.5,-5.2 Q1,-1 -1,6.8 M4.5,-5.2 Q-1,1 5,4.8" stroke="#ffffff" stroke-width="1.3" fill="none"/>
      <animateMotion dur="2.4s" repeatCount="indefinite"
        path="M68,128 Q160,12 252,122 Q160,12 68,128"/>
    </g>
  </svg>`,

  hockey: `<svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
    <defs>
      <pattern id="hk-net" width="3.5" height="3.5" patternUnits="userSpaceOnUse">
        <path d="M0 0H3.5M0 0V3.5" stroke="#ffffff" stroke-width="0.6" opacity="0.85"/>
      </pattern>
    </defs>
    <rect x="10" y="14" width="300" height="152" rx="34" fill="#e2eef4" stroke="#8da5b5" stroke-width="3"/>
    <line x1="38" y1="22" x2="38" y2="158" stroke="#c8372d" stroke-width="1.5"/>
    <line x1="282" y1="22" x2="282" y2="158" stroke="#c8372d" stroke-width="1.5"/>
    <rect x="108" y="16" width="4.5" height="148" fill="#2a5fa8" opacity="0.85"/>
    <rect x="207.5" y="16" width="4.5" height="148" fill="#2a5fa8" opacity="0.85"/>
    <rect x="157.5" y="16" width="5" height="148" fill="#c8372d" opacity="0.85"/>
    <circle cx="160" cy="90" r="22" stroke="#2a5fa8" stroke-width="1.5"/>
    <circle cx="160" cy="90" r="3" fill="#2a5fa8"/>
    <g stroke="#c8372d" stroke-width="1.2">
      <circle cx="72" cy="52" r="14"/><circle cx="72" cy="52" r="2" fill="#c8372d"/>
      <circle cx="72" cy="128" r="14"/><circle cx="72" cy="128" r="2" fill="#c8372d"/>
      <circle cx="248" cy="52" r="14"/><circle cx="248" cy="52" r="2" fill="#c8372d"/>
      <circle cx="248" cy="128" r="14"/><circle cx="248" cy="128" r="2" fill="#c8372d"/>
    </g>
    <path d="M38,74 A16,16 0 0 1 38,106 Z" fill="#7fc4e8" fill-opacity="0.65" stroke="#c8372d" stroke-width="1.3"/>
    <path d="M38,76 L26,79 C22,82 22,98 26,101 L38,104 Z" fill="#b7cad6"/>
    <path d="M38,76 L26,79 C22,82 22,98 26,101 L38,104 Z" fill="url(#hk-net)" stroke="#c8372d" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M282,74 A16,16 0 0 0 282,106 Z" fill="#7fc4e8" fill-opacity="0.65" stroke="#c8372d" stroke-width="1.3"/>
    <path d="M282,76 L294,79 C298,82 298,98 294,101 L282,104 Z" fill="#b7cad6"/>
    <path d="M282,76 L294,79 C298,82 298,98 294,101 L282,104 Z" fill="url(#hk-net)" stroke="#c8372d" stroke-width="2.2" stroke-linejoin="round"/>
    <g transform="translate(72 42)">
      <g class="hk-stick-left">
        <line x1="0" y1="0" x2="8" y2="54" stroke="#2c241b" stroke-width="4.2" stroke-linecap="round"/>
        <line x1="0" y1="0" x2="8" y2="54" stroke="#d4a537" stroke-width="1.6" stroke-dasharray="6 6"/>
        <path d="M8,54 L25,51 C28,50 28,56 25,57 L7,58 Z" fill="#1e1b18" stroke="#1e1b18" stroke-width="1"/>
        <path d="M12,53 L21,52 M13,56 L22,55" stroke="#fbf3df" stroke-width="1.5"/>
      </g>
    </g>
    <g transform="translate(248 42)">
      <g class="hk-stick-right">
        <line x1="0" y1="0" x2="-8" y2="54" stroke="#2c241b" stroke-width="4.2" stroke-linecap="round"/>
        <line x1="0" y1="0" x2="-8" y2="54" stroke="#c8372d" stroke-width="1.6" stroke-dasharray="6 6"/>
        <path d="M-8,54 L-25,51 C-28,50 -28,56 -25,57 L-7,58 Z" fill="#1e1b18" stroke="#1e1b18" stroke-width="1"/>
        <path d="M-12,53 L-21,52 M-13,56 L-22,55" stroke="#fbf3df" stroke-width="1.5"/>
      </g>
    </g>
    <g class="hk-spark-left" stroke="#d4a537" stroke-width="1.5" stroke-linecap="round">
      <line x1="94" y1="92" x2="100" y2="87"/>
      <line x1="96" y1="98" x2="103" y2="98"/>
      <line x1="94" y1="104" x2="100" y2="109"/>
    </g>
    <g class="hk-spark-right" stroke="#c8372d" stroke-width="1.5" stroke-linecap="round">
      <line x1="226" y1="92" x2="220" y2="87"/>
      <line x1="224" y1="98" x2="217" y2="98"/>
      <line x1="226" y1="104" x2="220" y2="109"/>
    </g>
    <g class="hk-puck">
      <ellipse cx="88" cy="102" rx="10" ry="3.5" fill="#7c96a8" opacity="0.55"/>
      <ellipse cx="88" cy="99" rx="9.5" ry="4.6" fill="#0f1115" stroke="#334155" stroke-width="1"/>
      <ellipse cx="88" cy="97.5" rx="9" ry="3.8" fill="#1e242c"/>
      <path d="M83,96.5 Q88,94.8 93,96.5" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    </g>
  </svg>`,

  basketball: `<svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
    <defs>
      <pattern id="bb-wood" width="26" height="10" patternUnits="userSpaceOnUse">
        <rect width="26" height="10" fill="#c68942"/>
        <line x1="0" y1="10" x2="26" y2="10" stroke="#ae7330" stroke-width="0.6"/>
      </pattern>
    </defs>
    <rect x="14" y="16" width="292" height="148" rx="4" fill="url(#bb-wood)"/>
    <rect x="18" y="62" width="52" height="56" fill="#9c4221" opacity="0.72"/>
    <rect x="250" y="62" width="52" height="56" fill="#9c4221" opacity="0.72"/>
    <g stroke="#fbf3df" stroke-width="1.6" fill="none">
      <rect x="18" y="20" width="284" height="140"/>
      <line x1="160" y1="20" x2="160" y2="160"/>
      <circle cx="160" cy="90" r="22"/>
      <rect x="18" y="62" width="52" height="56"/>
      <rect x="250" y="62" width="52" height="56"/>
      <circle cx="70" cy="90" r="18" stroke-dasharray="3 3"/>
      <circle cx="250" cy="90" r="18" stroke-dasharray="3 3"/>
      <path d="M18 32 H42 A60 60 0 0 1 42 148 H18"/>
      <path d="M302 32 H278 A60 60 0 0 0 278 148 H302"/>
    </g>
    <rect x="8" y="72" width="5" height="36" fill="#fbf3df"/>
    <circle cx="21" cy="90" r="6" fill="none" stroke="#e05a24" stroke-width="2.4"/>
    <circle cx="21" cy="90" r="3.5" fill="none" stroke="#fbf3df" stroke-width="1" stroke-dasharray="2 2"/>
    <rect x="307" y="72" width="5" height="36" fill="#fbf3df"/>
    <circle cx="299" cy="90" r="6" fill="none" stroke="#e05a24" stroke-width="2.4"/>
    <circle cx="299" cy="90" r="3.5" fill="none" stroke="#fbf3df" stroke-width="1" stroke-dasharray="2 2"/>
    <ellipse cx="160" cy="148" rx="14" ry="3.5" fill="#2a1a0c" opacity="0.45">
      <animate attributeName="rx" values="14;7;14" keyTimes="0;0.5;1" dur="1.15s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.45;0.18;0.45" keyTimes="0;0.5;1" dur="1.15s" repeatCount="indefinite"/>
    </ellipse>
    <g>
      <circle cx="160" cy="118" r="11.5" fill="#e06d24" stroke="#2a200f" stroke-width="1.2"/>
      <path d="M148.5 118 H171.5 M160 106.5 V129.5 M152 110 Q158 118 152 126 M168 110 Q162 118 168 126" stroke="#2a200f" stroke-width="1"/>
      <animateTransform attributeName="transform" type="translate"
        values="0 0; 0 -54; 0 0" keyTimes="0; 0.5; 1" dur="1.15s" repeatCount="indefinite"
        calcMode="spline" keySplines="0.33 0.66 0.66 1; 0.33 0 0.66 0.33"/>
    </g>
  </svg>`,

  tennis: `<svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
    <defs>
      <pattern id="tn-mesh" width="4.5" height="4.5" patternUnits="userSpaceOnUse">
        <path d="M0 0H4.5M0 0V4.5" stroke="#fbf3df" stroke-width="0.65" opacity="0.85"/>
      </pattern>
      <pattern id="tn-str" width="3.5" height="3.5" patternUnits="userSpaceOnUse">
        <path d="M0 0H3.5M0 0V3.5" stroke="#fbf3df" stroke-width="0.55" opacity="0.75"/>
      </pattern>
    </defs>
    <rect x="6" y="8" width="308" height="164" rx="5" fill="#1d4d35"/>
    <rect x="34" y="24" width="252" height="132" fill="#c25e35"/>
    <g stroke="#ffffff" stroke-width="1.6" fill="none">
      <rect x="34" y="24" width="252" height="132"/>
      <line x1="34" y1="42" x2="286" y2="42"/>
      <line x1="34" y1="138" x2="286" y2="138"/>
      <line x1="96" y1="42" x2="96" y2="138"/>
      <line x1="224" y1="42" x2="224" y2="138"/>
      <line x1="96" y1="90" x2="224" y2="90"/>
      <line x1="34" y1="90" x2="41" y2="90"/>
      <line x1="279" y1="90" x2="286" y2="90"/>
    </g>
    <rect x="163" y="20" width="6" height="140" fill="#2a150b" opacity="0.28"/>
    <g>
      <circle cx="160" cy="18" r="3.2" fill="#d9dfe3" stroke="#2a200f" stroke-width="1"/>
      <circle cx="160" cy="162" r="3.2" fill="#d9dfe3" stroke="#2a200f" stroke-width="1"/>
      <rect x="156" y="20" width="8" height="140" fill="#1a1a1a" opacity="0.35"/>
      <rect x="156" y="20" width="8" height="140" fill="url(#tn-mesh)"/>
      <line x1="156" y1="20" x2="156" y2="160" stroke="#ffffff" stroke-width="2.2"/>
    </g>
    <g transform="translate(48 118)">
      <g>
        <line x1="0" y1="0" x2="0" y2="-16" stroke="#2a200f" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="0" y1="-2" x2="0" y2="-14" stroke="#d4a537" stroke-width="1.5" stroke-dasharray="3 2"/>
        <path d="M0,-15 L-5,-26 M0,-15 L5,-26" stroke="#d4a537" stroke-width="2.2" stroke-linecap="round"/>
        <ellipse cx="0" cy="-38" rx="11" ry="15" fill="url(#tn-str)" stroke="#d4a537" stroke-width="2.6"/>
        <animateTransform attributeName="transform" type="rotate"
          values="-24; 28; -6; -6; -24"
          keyTimes="0; 0.09; 0.24; 0.9; 1" dur="2.4s" repeatCount="indefinite"/>
      </g>
    </g>
    <g transform="translate(272 118)">
      <g>
        <line x1="0" y1="0" x2="0" y2="-16" stroke="#2a200f" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="0" y1="-2" x2="0" y2="-14" stroke="#fbf3df" stroke-width="1.5" stroke-dasharray="3 2"/>
        <path d="M0,-15 L-5,-26 M0,-15 L5,-26" stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round"/>
        <ellipse cx="0" cy="-38" rx="11" ry="15" fill="url(#tn-str)" stroke="#3b82f6" stroke-width="2.6"/>
        <animateTransform attributeName="transform" type="rotate"
          values="6; 24; -28; 6; 6"
          keyTimes="0; 0.44; 0.57; 0.74; 1" dur="2.4s" repeatCount="indefinite"/>
      </g>
    </g>
    <g>
      <circle cx="0" cy="0" r="5.5" fill="#d8f244" stroke="#2a200f" stroke-width="0.9"/>
      <path d="M-3.5,-3.5 Q0,0 -3.5,3.5 M3.5,-3.5 Q0,0 3.5,3.5" stroke="#ffffff" stroke-width="0.9" fill="none"/>
      <animateMotion dur="2.4s" repeatCount="indefinite"
        path="M60,82 Q160,24 260,82 Q160,24 60,82"/>
    </g>
  </svg>`
};

let visualUidCounter = 0;

function VISUAL(sport) {
  const raw = VISUALS[sport.id] || '';
  if (!raw) return '';
  const uid = ++visualUidCounter;
  return raw
    .replace(/\bid="([a-z]+-[a-z]+)"/g, `id="$1-${uid}"`)
    .replace(/url\(#([a-z]+-[a-z]+)\)/g, `url(#$1-${uid})`);
}

/* Основная логика приложения */
/* Легенды каждого вида спорта (без фото: вместо них инициалы) */
const LEGENDS = {
  football: [
    { name: 'Пеле', years: '1940–2022', country: 'Бразилия', role: 'Нападающий', highlight: '3 чемпионата мира',
      text: 'Единственный футболист, трижды выигравший чемпионат мира: в 1958, 1962 и 1970 годах. Первый мундиаль выиграл в 17 лет.' },
    { name: 'Диего Марадона', years: '1960–2020', country: 'Аргентина', role: 'Атакующий полузащитник', highlight: 'Чемпион мира 1986',
      text: 'Привёл Аргентину к титулу в Мексике. В четвертьфинале с Англией забил «гол века» и «руку Бога». С «Наполи» дважды выиграл чемпионат Италии.' },
    { name: 'Лионель Месси', years: 'р. 1987', country: 'Аргентина', role: 'Нападающий', highlight: '8 «Золотых мячей»',
      text: 'Восемь раз признавался лучшим футболистом мира по версии France Football. В 2022 году выиграл с Аргентиной чемпионат мира в Катаре.' },
    { name: 'Криштиану Роналду', years: 'р. 1985', country: 'Португалия', role: 'Нападающий', highlight: '5 «Золотых мячей»',
      text: 'Пять раз становился лучшим футболистом мира, в 2016 году выиграл с Португалией чемпионат Европы. Рекордсмен среди мужчин по голам за национальные сборные.' }
  ],
  boxing: [
    { name: 'Мохаммед Али', years: '1942–2016', country: 'США', role: 'Супертяжёлый вес', highlight: 'Олимпийский чемпион 1960',
      text: 'Олимпийский чемпион Рима и трёхкратный чемпион мира среди профессионалов. Победа над Джорджем Форманом в Заире в 1974 году вошла в историю как «Грохот в джунглях».' },
    { name: 'Джо Луис', years: '1914–1981', country: 'США', role: 'Супертяжёлый вес', highlight: '25 защит титула',
      text: 'Чемпион мира с 1937 по 1949 год: никто в тяжёлом весе не удерживал титул дольше.' },
    { name: 'Майк Тайсон', years: 'р. 1966', country: 'США', role: 'Супертяжёлый вес', highlight: 'Самый молодой чемпион',
      text: 'В 1986 году в 20 лет завоевал титул чемпиона мира по версии WBC и стал самым молодым чемпионом в тяжёлом весе.' },
    { name: 'Флойд Мейвезер', years: 'р. 1977', country: 'США', role: 'Несколько весов', highlight: '50 побед, 0 поражений',
      text: 'Завершил профессиональную карьеру без единого поражения и стал чемпионом мира в пяти весовых категориях.' }
  ],
  volleyball: [
    { name: 'Карч Кирай', years: 'р. 1960', country: 'США', role: 'Доигровщик', highlight: 'Золото в зале и на песке',
      text: 'Олимпийский чемпион 1984 и 1988 годов в классическом волейболе и 1996 года в пляжном. Единственный, кто выигрывал Олимпиаду в обеих версиях игры.' },
    { name: 'Лан Пин', years: 'р. 1960', country: 'Китай', role: 'Нападающая', highlight: 'Золото как игрок и тренер',
      text: 'Лидер сборной Китая, олимпийская чемпионка 1984 года. Как тренер привела китаянок к золоту Олимпиады 2016 года в Рио.' },
    { name: 'Сергей Тетюхин', years: 'р. 1975', country: 'Россия', role: 'Нападающий', highlight: 'Олимпийское золото 2000 и 2012',
      text: 'Один из самых титулованных волейболистов России: олимпийский чемпион Сиднея и Лондона, бронзовый призёр Игр 2004 и 2008 годов.' },
    { name: 'Жиба', years: 'р. 1976', country: 'Бразилия', role: 'Доигровщик', highlight: 'Олимпийское золото 2004',
      text: 'Лидер сборной Бразилии: олимпийский чемпион 2004 года и чемпион мира 2002 и 2006 годов.' }
  ],
  hockey: [
    { name: 'Уэйн Гретцки', years: 'р. 1961', country: 'Канада', role: 'Центральный нападающий', highlight: '2857 очков в НХЛ',
      text: 'Лучший бомбардир в истории НХЛ по очкам (894 гола и 1963 передачи), четырёхкратный обладатель Кубка Стэнли. Номер 99 выведен из обращения во всей лиге.' },
    { name: 'Владислав Третьяк', years: 'р. 1952', country: 'СССР / Россия', role: 'Вратарь', highlight: '3 олимпийских золота',
      text: 'Олимпийский чемпион 1972, 1976 и 1984 годов и десятикратный чемпион мира. Один из величайших вратарей в истории.' },
    { name: 'Валерий Харламов', years: '1948–1981', country: 'СССР', role: 'Нападающий', highlight: '8 титулов чемпиона мира',
      text: 'Звезда ЦСКА и сборной СССР, двукратный олимпийский чемпион (1972 и 1976). Погиб в автокатастрофе в 33 года.' },
    { name: 'Александр Овечкин', years: 'р. 1985', country: 'Россия', role: 'Левый нападающий', highlight: 'Рекорд по голам в НХЛ',
      text: 'В апреле 2025 года забил 895-й гол в регулярных чемпионатах НХЛ и побил рекорд Гретцки. В 2018 году выиграл Кубок Стэнли с «Вашингтоном».' }
  ],
  basketball: [
    { name: 'Майкл Джордан', years: 'р. 1963', country: 'США', role: 'Атакующий защитник', highlight: '6 титулов НБА',
      text: 'Шесть чемпионств с «Чикаго Буллз» (1991–1993 и 1996–1998), шесть раз MVP финала. Олимпийский чемпион 1984 и 1992 годов.' },
    { name: 'Коби Брайант', years: '1978–2020', country: 'США', role: 'Атакующий защитник', highlight: '81 очко в одном матче',
      text: 'Все 20 сезонов провёл в «Лос-Анджелес Лейкерс» и выиграл пять чемпионств. В 2006 году набрал 81 очко в матче с «Торонто», второй результат в истории НБА.' },
    { name: 'Леброн Джеймс', years: 'р. 1984', country: 'США', role: 'Форвард', highlight: 'Лучший бомбардир НБА',
      text: 'В 2023 году обошёл Карима Абдул-Джаббара по числу очков в НБА. Четырёхкратный чемпион лиги с «Майами», «Кливлендом» и «Лейкерс».' },
    { name: 'Уилт Чемберлен', years: '1936–1999', country: 'США', role: 'Центровой', highlight: '100 очков в одном матче',
      text: '2 марта 1962 года набрал 100 очков в игре против «Нью-Йорк Никс». Этот рекорд НБА до сих пор не побит.' }
  ],
  tennis: [
    { name: 'Роджер Федерер', years: 'р. 1981', country: 'Швейцария', role: 'Одиночный разряд', highlight: '20 титулов Большого шлема',
      text: 'Восемь побед на Уимблдоне, больше, чем у любого мужчины в Открытую эру. Провёл 310 недель во главе рейтинга ATP.' },
    { name: 'Рафаэль Надаль', years: 'р. 1986', country: 'Испания', role: 'Одиночный разряд', highlight: '14 титулов «Ролан Гаррос»',
      text: '22 победы на турнирах Большого шлема, 14 из них на грунте в Париже. Олимпийский чемпион 2008 года.' },
    { name: 'Новак Джокович', years: 'р. 1987', country: 'Сербия', role: 'Одиночный разряд', highlight: 'Рекордсмен по Большим шлемам',
      text: 'На 2025 год имеет 24 победы на турнирах Большого шлема, больше, чем у любого другого мужчины. В 2024 году выиграл Олимпиаду в Париже.' },
    { name: 'Серена Уильямс', years: 'р. 1981', country: 'США', role: 'Одиночный разряд', highlight: '23 титула Большого шлема',
      text: '23 победы в одиночном разряде в Открытую эру, рекорд. Четырёхкратная олимпийская чемпионка в одиночном и парном разрядах.' }
  ]
};

function legendInitials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function legendsSection(sportId) {
  const list = LEGENDS[sportId];
  if (!list || list.length === 0) return '';
  return `
      <div class="glass-panel border-line rounded-xl p-6 sm:p-8">
        <h2 class="font-display text-xl font-medium mb-6">Легенды</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${list.map(p => `
            <div class="legend-card box-deep rounded-lg p-4">
              <div class="flex items-center gap-3 mb-3">
                <div class="legend-avatar" aria-hidden="true">${legendInitials(p.name)}</div>
                <div class="min-w-0">
                  <div class="text-sm font-medium">${p.name}</div>
                  <div class="text-xs muted">${p.years} · ${p.country}</div>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="tag px-2 py-0.5 rounded-lg text-xs font-medium">${p.role}</span>
                <span class="text-xs font-mono accent-text">${p.highlight}</span>
              </div>
              <p class="soft text-xs leading-relaxed">${p.text}</p>
            </div>`).join('')}
        </div>
      </div>
`;
}

const appLogic = {
  currentFilter: '',
  expandedSportId: null,
  heroSportIndex: 0,

  init() {
    this.initTheme();
    this.initScrollUI();
    if (document.getElementById('hallLegendsGrid')) {
      hallLogic.init();
      return;
    }
    this.renderHeroPreview(false);
    this.renderSportsCatalog(SPORTS_DATABASE);
    qaTester.runAllTests();
    if (window.location.hash && window.location.hash.startsWith('#sport=')) {
      const sportId = window.location.hash.slice('#sport='.length);
      this.openSportDetail(sportId);
    }
  },

  initTheme() {
    let saved = 'dark';
    try {
      saved = localStorage.getItem('hc-theme') || 'dark';
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', saved);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('hc-theme', next);
    } catch (e) {}
  },

  initScrollUI() {
    const progressEl = document.getElementById('scrollProgress');
    const toTopBtn = document.getElementById('toTopBtn');
    const updateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      if (progressEl) progressEl.style.width = `${pct}%`;
      if (toTopBtn) toTopBtn.classList.toggle('is-visible', scrollTop > 380);
    };
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
  },

  renderHeroPreview(animate = true) {
    const sport = SPORTS_DATABASE[this.heroSportIndex];
    if (!sport) return;

    const card = document.getElementById('heroPreviewCard');
    const nameEl = document.getElementById('heroSportName');
    const counterEl = document.getElementById('heroSportCounter');
    const yearEl = document.getElementById('heroSportYear');
    const visualEl = document.getElementById('heroSportVisual');
    const statsEl = document.getElementById('heroSportStats');
    const dotsEl = document.getElementById('heroDots');

    if (nameEl) nameEl.textContent = sport.name;
    if (counterEl) counterEl.textContent = `${this.heroSportIndex + 1} / ${SPORTS_DATABASE.length}`;
    if (yearEl) yearEl.textContent = sport.shortYear;
    if (visualEl) visualEl.innerHTML = VISUAL(sport);
    if (statsEl) {
      const stats = sport.heroStats || sport.fullHistory.keyStats;
      statsEl.innerHTML = stats.map(st => `
        <div class="flex items-center justify-between text-xs">
          <span class="muted">${st.label}</span>
          <span class="font-mono soft tabular-nums">${st.value}</span>
        </div>`).join('');
    }

    if (dotsEl) {
      dotsEl.innerHTML = SPORTS_DATABASE.map((item, idx) => `
        <button type="button" onclick="appLogic.goToHeroSport(${idx})"
          class="hero-dot ${idx === this.heroSportIndex ? 'is-active' : ''}"
          aria-label="${item.name}" title="${item.name}"></button>`).join('');
    }

    if (animate && card) {
      card.classList.remove('hero-card-fade');
      void card.offsetWidth;
      card.classList.add('hero-card-fade');
    }
  },

  nextHeroSport() {
    this.heroSportIndex = (this.heroSportIndex + 1) % SPORTS_DATABASE.length;
    this.renderHeroPreview(true);
  },

  prevHeroSport() {
    this.heroSportIndex = (this.heroSportIndex - 1 + SPORTS_DATABASE.length) % SPORTS_DATABASE.length;
    this.renderHeroPreview(true);
  },

  goToHeroSport(index) {
    if (index < 0 || index >= SPORTS_DATABASE.length || index === this.heroSportIndex) return;
    this.heroSportIndex = index;
    this.renderHeroPreview(true);
  },

  openHeroSportDetail() {
    const sport = SPORTS_DATABASE[this.heroSportIndex];
    if (sport) this.openSportDetail(sport.id);
  },

  toggleCardPreview(sportId, event) {
    if (event) event.stopPropagation();
    this.expandedSportId = (this.expandedSportId === sportId) ? null : sportId;
    document.querySelectorAll('.sport-card').forEach(card => {
      const id = card.getAttribute('data-sport-id');
      const label = card.querySelector('.preview-toggle-label');
      if (id === this.expandedSportId) {
        card.classList.add('is-expanded', 'lg:col-span-2');
        if (label) label.textContent = 'Свернуть';
      } else {
        card.classList.remove('is-expanded', 'lg:col-span-2');
        if (label) label.textContent = 'Краткий обзор';
      }
    });
  },

  renderSportsCatalog(sportsList) {
    const container = document.getElementById('sportsGridContainer');
    if (!container) return;

    if (sportsList.length === 0) {
      container.innerHTML = `
        <div class="lg:col-span-2 glass-panel border-line rounded-xl p-8 text-center">
          <div class="text-sm font-medium mb-2">Дисциплина не найдена</div>
          <p class="text-xs muted mb-4">Попробуйте другой запрос или выберите из списка</p>
          <button onclick="appLogic.clearSearch()" class="btn-light px-4 py-2 rounded-lg text-xs font-medium">Показать все дисциплины</button>
        </div>`;
      return;
    }

    container.innerHTML = sportsList.map(sport => {
      const isExpanded = this.expandedSportId === sport.id;
      return `
      <article onclick="appLogic.toggleCardPreview('${sport.id}', event)"
        class="sport-card ${isExpanded ? 'is-expanded lg:col-span-2' : ''} rounded-xl p-5 flex flex-col justify-between"
        data-sport-id="${sport.id}">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span class="tag px-2 py-1 rounded-lg text-xs font-medium">${sport.category}</span>
            <span class="text-xs font-mono muted tabular-nums">${sport.originYear}</span>
          </div>
          <h3 class="font-display text-xl font-medium">${sport.name}</h3>
          <p class="text-xs soft mt-1 mb-4">${sport.subtitle}</p>
          <div class="box-deep rounded-lg p-3 mb-4">${VISUAL(sport)}</div>
          <p class="soft text-xs leading-relaxed mb-4">${sport.shortSummary}</p>
        </div>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-4 border-top-line">
          <button type="button" onclick="appLogic.toggleCardPreview('${sport.id}', event)"
            class="preview-toggle-label btn-dark flex-1 py-2.5 px-4 rounded-lg text-xs font-medium text-center">
            ${isExpanded ? 'Свернуть' : 'Краткий обзор'}
          </button>
          <button type="button" onclick="event.stopPropagation(); appLogic.openSportDetail('${sport.id}')"
            class="btn-light flex-1 py-2.5 px-4 rounded-lg text-xs font-medium text-center">
            Полная история
          </button>
        </div>

        <div class="sport-click-drawer mt-5 pt-5 border-top-line" onclick="event.stopPropagation()">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${sport.galleryFrames.map(frame => `
              <div class="box-deep rounded-lg p-3">
                ${frame.svg}
                <div class="mt-2">
                  <div class="text-xs font-medium">${frame.title}</div>
                  <div class="text-xs muted mt-0.5">${frame.caption}</div>
                </div>
              </div>`).join('')}
            <div class="box-raised rounded-lg p-3 flex flex-col justify-between">
              <div>
                <div class="text-xs font-medium muted mb-2">Исторические корни</div>
                <p class="text-xs soft mb-3">${sport.ancientRoots}</p>
                <div class="space-y-1.5 pt-2 border-top-line">
                  ${sport.fullHistory.keyStats.map(st => `
                    <div class="flex items-center justify-between text-xs">
                      <span class="muted">${st.label}</span>
                      <span class="font-mono soft tabular-nums">${st.value}</span>
                    </div>`).join('')}
                </div>
              </div>
              <button type="button" onclick="appLogic.openSportDetail('${sport.id}')"
                class="btn-light mt-3 w-full py-2 px-3 rounded-lg text-xs font-medium">
                Летопись: ${sport.name}
              </button>
            </div>
          </div>
        </div>
      </article>`;
    }).join('');
  },

  updateFilterChips(cleanQuery) {
    document.querySelectorAll('.filter-chip').forEach(btn => {
      const filterVal = (btn.getAttribute('data-filter') || '').toLowerCase();
      btn.classList.toggle('is-active', cleanQuery.length > 0 && cleanQuery === filterVal);
    });
  },

  handleSearch(query) {
    const cleanQuery = query.trim().toLowerCase();
    const clearBtn = document.getElementById('clearSearchBtn');
    const statusBanner = document.getElementById('searchStatusBanner');
    const statusText = document.getElementById('searchStatusText');

    this.currentFilter = cleanQuery;
    this.updateFilterChips(cleanQuery);

    if (!document.getElementById('internalSportView').classList.contains('hidden') && cleanQuery.length > 0) {
      this.showMainPage(false);
    }

    if (cleanQuery.length > 0) {
      clearBtn.classList.remove('hidden');
      const filtered = SPORTS_DATABASE.filter(s =>
        s.name.toLowerCase().includes(cleanQuery) ||
        s.subtitle.toLowerCase().includes(cleanQuery) ||
        s.shortSummary.toLowerCase().includes(cleanQuery)
      );
      statusBanner.classList.remove('hidden');
      statusText.innerHTML = `По запросу <strong>«${query}»</strong>: <strong>${filtered.length}</strong>`;
      this.renderSportsCatalog(filtered);
    } else {
      clearBtn.classList.add('hidden');
      statusBanner.classList.add('hidden');
      this.renderSportsCatalog(SPORTS_DATABASE);
    }
  },

  quickFilter(sportName) {
    const input = document.getElementById('sportSearchInput');
    if (this.currentFilter === sportName.trim().toLowerCase()) {
      this.clearSearch();
      return;
    }
    if (input) {
      input.value = sportName;
      this.handleSearch(sportName);
      this.navigateSection('sports-catalog');
    }
  },

  clearSearch() {
    const input = document.getElementById('sportSearchInput');
    if (input) input.value = '';
    this.handleSearch('');
  },

  openSportDetail(sportId) {
    const sportIndex = SPORTS_DATABASE.findIndex(s => s.id === sportId);
    if (sportIndex === -1) return;

    const sport = SPORTS_DATABASE[sportIndex];
    const prevSport = SPORTS_DATABASE[(sportIndex - 1 + SPORTS_DATABASE.length) % SPORTS_DATABASE.length];
    const nextSport = SPORTS_DATABASE[(sportIndex + 1) % SPORTS_DATABASE.length];
    const eqColsClass = sport.fullHistory.equipmentEvolution.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

    document.getElementById('internalSportContent').innerHTML = `
      <div class="glass-panel border-line rounded-xl p-6 sm:p-8">
        <span class="text-xs font-mono accent-text">${sport.category} · ${sport.originYear}</span>
        <h1 class="font-display text-2xl sm:text-4xl font-medium mt-3 mb-2">${sport.name}</h1>
        <p class="text-sm muted mb-4">${sport.subtitle}</p>
        <p class="soft text-sm leading-relaxed mb-6">${sport.fullHistory.intro}</p>
        <div class="box-deep rounded-lg p-4">${VISUAL(sport)}</div>
      </div>

      <div class="glass-panel border-line rounded-xl p-6 sm:p-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-bottom-line">
          <div>
            <span class="text-xs font-mono accent-text">Исторические корни</span>
            <p class="text-sm soft mt-1">${sport.ancientRoots}</p>
          </div>
          <span class="tag px-3 py-1 rounded-lg text-xs font-medium self-start md:self-center">${sport.originYear}</span>
        </div>
        <h2 class="font-display text-lg font-medium mb-4">Ключевые параметры</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${sport.fullHistory.keyStats.map(st => `
            <div class="box-deep p-4 rounded-lg">
              <div class="text-xs muted mb-1">${st.label}</div>
              <div class="text-sm font-mono font-medium soft tabular-nums">${st.value}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="glass-panel border-line rounded-xl p-6 sm:p-8">
        <h2 class="font-display text-xl font-medium mb-6">Схемы и детали</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${sport.galleryFrames.map(frame => `
            <div class="box-deep rounded-lg p-4">
              ${frame.svg}
              <div class="mt-3">
                <div class="text-sm font-medium">${frame.title}</div>
                <div class="text-xs muted mt-1">${frame.caption}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <div class="glass-panel border-line rounded-xl p-6 sm:p-8">
        <h2 class="font-display text-xl font-medium mb-6">Хронология</h2>
        <div class="space-y-3">
          ${sport.fullHistory.timeline.map(step => `
            <div class="box-deep p-4 rounded-lg">
              <span class="text-xs font-mono accent-text">${step.year}</span>
              <h3 class="text-sm font-medium mt-1">${step.title}</h3>
              <p class="soft text-xs mt-1">${step.desc}</p>
            </div>`).join('')}
        </div>
      </div>

      ${legendsSection(sport.id)}
      <div class="glass-panel border-line rounded-xl p-6 sm:p-8">
        <h2 class="font-display text-xl font-medium mb-6">Эволюция инвентаря</h2>
        <div class="grid grid-cols-1 ${eqColsClass} gap-3">
          ${sport.fullHistory.equipmentEvolution.map(eq => `
            <div class="box-deep p-4 rounded-lg">
              <div class="text-sm font-medium accent-text mb-2">${eq.item}</div>
              <p class="soft text-xs">${eq.detail}</p>
            </div>`).join('')}
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button type="button" onclick="appLogic.openSportDetail('${prevSport.id}')"
          class="btn-dark px-5 py-3 rounded-xl text-sm font-medium inline-flex items-center justify-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 6l-6 6 6 6"/>
          </svg>
          <span>Предыдущая: ${prevSport.name}</span>
        </button>
        <button type="button" onclick="appLogic.openSportDetail('${nextSport.id}')"
          class="btn-light px-5 py-3 rounded-xl text-sm font-medium inline-flex items-center justify-center gap-2">
          <span>Следующая: ${nextSport.name}</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </div>`;

    const mainEl = document.getElementById('mainPageView');
    const detailEl = document.getElementById('internalSportView');
    mainEl.classList.add('hidden');
    detailEl.classList.remove('hidden');
    detailEl.classList.remove('view-enter');
    void detailEl.offsetWidth;
    detailEl.classList.add('view-enter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  showMainPage(scrollToTop = true) {
    const mainEl = document.getElementById('mainPageView');
    const detailEl = document.getElementById('internalSportView');
    const wasHidden = mainEl.classList.contains('hidden');
    detailEl.classList.add('hidden');
    mainEl.classList.remove('hidden');
    if (wasHidden) {
      mainEl.classList.remove('view-enter');
      void mainEl.offsetWidth;
      mainEl.classList.add('view-enter');
    }
    if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  navigateSection(sectionId) {
    this.showMainPage(false);
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
};

/* Автоматический QA-тестер */
const qaTester = {
  runAllTests() {
    const resultsGrid = document.getElementById('qaResultsGrid');
    const summaryBadge = document.getElementById('qaSummaryBadge');
    if (!resultsGrid) return;

    const checks = [
      { title: 'Запрет фотографий', owner: 'Изамутдин', passed: document.querySelectorAll('img').length === 0, details: 'Вся графика — чистый SVG' },
      { title: 'Стабильные карточки', owner: 'Рамазан', passed: SPORTS_DATABASE.length === 6, details: '6 дисциплин, открытие по клику' },
      { title: 'Внутренняя летопись', owner: 'Хучбар', passed: !!document.getElementById('internalSportView'), details: 'Детальная история подключена' },
      { title: 'Поиск и фильтрация', owner: 'Адам', passed: !!document.getElementById('sportSearchInput'), details: 'Живой поиск по дисциплинам' },
      { title: 'Раздел «О сайте»', owner: 'Рамазан', passed: !!document.getElementById('about-site'), details: 'Описание назначения портала' }
    ];

    const allPassed = checks.every(c => c.passed);
    if (summaryBadge) {
      summaryBadge.textContent = allPassed ? 'Все проверки пройдены' : 'Найдены ошибки';
      summaryBadge.className = `px-3 py-1 rounded-lg text-xs font-medium ${allPassed ? 'qa-ok' : 'qa-fail'}`;
    }

    resultsGrid.innerHTML = checks.map(c => `
      <div class="box-deep p-3 rounded-lg">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-medium">${c.title}</span>
          <span class="text-xs font-mono ${c.passed ? 'qa-ok px-1 rounded' : 'qa-fail'}">${c.passed ? 'OK' : 'Ошибка'}</span>
        </div>
        <p class="text-xs muted mb-1">${c.details}</p>
        <div class="text-xs muted font-mono">${c.owner}</div>
      </div>`).join('');
  }
};

/* Логика второй страницы «Зал славы и хронология» */
const WORLD_RECORDS = [
  { sportId: 'basketball', title: '100 очков в одном матче НБА', holder: 'Уилт Чемберлен · 1962', detail: 'Рекорд результативности за один матч, который держится уже более 60 лет.' },
  { sportId: 'hockey', title: '895+ голов в регулярных чемпионатах НХЛ', holder: 'Александр Овечкин · 2025', detail: 'Превзошёл легендарный снайперский рекорд Уэйна Гретцки (894 гола).' },
  { sportId: 'hockey', title: '2857 очков в НХЛ (гол + пас)', holder: 'Уэйн Гретцки', detail: 'Абсолютный рекорд лиги по системе «гол + пас», номер 99 закреплён навечно.' },
  { sportId: 'tennis', title: '24 титула Большого шлема в одиночке', holder: 'Новак Джокович', detail: 'Исторический рекорд среди мужчин по победам на турнирах Большого шлема.' },
  { sportId: 'football', title: '3 титула чемпиона мира по футболу', holder: 'Пеле · 1958, 1962, 1970', detail: 'Единственный футболист в истории, выигравший три мундиаля как игрок.' },
  { sportId: 'boxing', title: '50 побед и 0 поражений на ринге', holder: 'Флойд Мейвезер', detail: 'Завершил профессиональную карьеру непобеждённым чемпионом в пяти весах.' }
];

function parseHistoryYear(yearStr) {
  if (!yearStr) return 0;
  const s = yearStr.toLowerCase();
  const isBce = s.includes('до н.э');
  const numMatch = s.match(/\d+/);
  if (numMatch) {
    const val = parseInt(numMatch[0], 10);
    return isBce ? -val : val;
  }
  if (s.includes('xvi')) return 1550;
  if (s.includes('ii')) return isBce ? -200 : 150;
  return 0;
}

const hallLogic = {
  activeSport: 'all',
  searchQuery: '',

  init() {
    this.renderRecords();
    this.renderStandardsTable();
    this.renderAll();
  },

  setSportFilter(sportId) {
    this.activeSport = sportId;
    document.querySelectorAll('[data-hall-filter]').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-hall-filter') === sportId);
    });
    this.renderAll();
  },

  handleSearch(query) {
    this.searchQuery = query.trim().toLowerCase();
    const clearBtn = document.getElementById('hallClearSearchBtn');
    if (clearBtn) clearBtn.classList.toggle('hidden', this.searchQuery.length === 0);
    this.renderAll();
  },

  clearSearch() {
    const input = document.getElementById('hallSearchInput');
    if (input) input.value = '';
    this.handleSearch('');
  },

  renderAll() {
    this.renderLegends();
    this.renderTimeline();
  },

  renderLegends() {
    const grid = document.getElementById('hallLegendsGrid');
    const status = document.getElementById('hallLegendsStatus');
    const countEl = document.getElementById('hallLegendsCount');
    if (!grid) return;

    let totalCount = 0;
    const groups = [];

    SPORTS_DATABASE.forEach(sport => {
      const sportLegends = LEGENDS[sport.id] || [];
      totalCount += sportLegends.length;

      if (this.activeSport !== 'all' && sport.id !== this.activeSport) return;

      const matched = sportLegends.filter(item => {
        if (!this.searchQuery) return true;
        const hay = `${item.name} ${item.country} ${item.role} ${item.highlight} ${item.text} ${sport.name}`.toLowerCase();
        return hay.includes(this.searchQuery);
      });

      if (matched.length > 0) {
        groups.push({ sport, legends: matched });
      }
    });

    if (countEl) countEl.textContent = totalCount;

    const shownCount = groups.reduce((sum, g) => sum + g.legends.length, 0);
    if (status) status.textContent = `Показано: ${shownCount}`;

    if (groups.length === 0) {
      grid.innerHTML = `
        <div class="glass-panel border-line rounded-xl p-8 text-center">
          <div class="text-sm font-medium mb-2">Совпадений в Зале славы не найдено</div>
          <p class="text-xs muted mb-4">Попробуйте другой запрос или выберите все дисциплины</p>
          <button onclick="hallLogic.setSportFilter('all'); hallLogic.clearSearch();" class="btn-light px-4 py-2 rounded-lg text-xs font-medium">Сбросить фильтры</button>
        </div>`;
      return;
    }

    grid.innerHTML = groups.map(({ sport, legends }) => `
      <section class="glass-panel border-line rounded-2xl p-6 sm:p-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-bottom-line">
          <div class="flex flex-wrap items-center gap-3">
            <h3 class="font-display text-xl sm:text-2xl font-medium">${sport.name}</h3>
            <span class="tag px-2.5 py-0.5 rounded-lg text-xs font-medium">${legends.length} легенд</span>
          </div>
          <a href="index.html#sport=${sport.id}" class="text-xs accent-text font-medium inline-flex items-center gap-1 hover:underline shrink-0">
            <span>История дисциплины</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${legends.map(p => `
            <article class="legend-card box-deep rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-3 mb-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="legend-avatar" aria-hidden="true">${legendInitials(p.name)}</div>
                    <div class="min-w-0">
                      <h4 class="text-sm font-medium">${p.name}</h4>
                      <div class="text-xs muted">${p.years} · ${p.country}</div>
                    </div>
                  </div>
                  <span class="tag px-2 py-0.5 rounded-lg text-xs font-medium shrink-0">${p.role}</span>
                </div>
                <div class="text-xs font-mono accent-text mb-2">${p.highlight}</div>
                <p class="soft text-xs leading-relaxed">${p.text}</p>
              </div>
            </article>`).join('')}
        </div>
      </section>`).join('');
  },

  renderTimeline() {
    const list = document.getElementById('hallTimelineList');
    const status = document.getElementById('hallTimelineStatus');
    const countEl = document.getElementById('hallEventsCount');
    if (!list) return;

    const events = [];
    SPORTS_DATABASE.forEach(sport => {
      (sport.fullHistory.timeline || []).forEach(step => {
        events.push({
          ...step,
          sportId: sport.id,
          sportName: sport.name,
          sortKey: parseHistoryYear(step.year)
        });
      });
    });
    events.sort((a, b) => a.sortKey - b.sortKey);
    if (countEl) countEl.textContent = events.length;

    const filtered = events.filter(ev => {
      if (this.activeSport !== 'all' && ev.sportId !== this.activeSport) return false;
      if (!this.searchQuery) return true;
      const hay = `${ev.year} ${ev.title} ${ev.desc} ${ev.sportName}`.toLowerCase();
      return hay.includes(this.searchQuery);
    });

    if (status) status.textContent = `Событий: ${filtered.length}`;

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="glass-panel border-line rounded-xl p-6 text-center">
          <div class="text-sm font-medium mb-1">События не найдены</div>
          <p class="text-xs muted">Измените фильтр или поисковый запрос</p>
        </div>`;
      return;
    }

    list.innerHTML = filtered.map(ev => `
      <div class="timeline-node glass-panel border-line rounded-xl p-5">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-xs font-mono accent-text font-medium">${ev.year}</span>
          <a href="index.html#sport=${ev.sportId}" class="tag px-2 py-0.5 rounded-lg text-xs font-medium">${ev.sportName}</a>
        </div>
        <h3 class="text-sm font-medium">${ev.title}</h3>
        <p class="soft text-xs leading-relaxed mt-1">${ev.desc}</p>
      </div>`).join('');
  },

  renderRecords() {
    const grid = document.getElementById('hallRecordsGrid');
    if (!grid) return;

    const sportNames = Object.fromEntries(SPORTS_DATABASE.map(s => [s.id, s.name]));
    grid.innerHTML = WORLD_RECORDS.map(rec => `
      <div class="glass-panel border-line rounded-xl p-5">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="tag px-2 py-0.5 rounded-lg text-xs font-medium">${sportNames[rec.sportId] || ''}</span>
          <span class="text-xs font-mono muted">${rec.holder}</span>
        </div>
        <h3 class="text-sm font-medium accent-text mb-1.5">${rec.title}</h3>
        <p class="soft text-xs leading-relaxed">${rec.detail}</p>
      </div>`).join('');
  },

  renderStandardsTable() {
    const tbody = document.getElementById('hallStandardsBody');
    if (!tbody) return;

    tbody.innerHTML = SPORTS_DATABASE.map(s => {
      const stats = s.fullHistory.keyStats || [];
      const standard = stats[0] ? `${stats[0].label}: ${stats[0].value}` : '—';
      const format = stats[2] ? `${stats[2].label}: ${stats[2].value}` : (stats[1] ? `${stats[1].label}: ${stats[1].value}` : '—');
      return `
        <tr class="border-top-line">
          <td class="px-5 py-3 font-medium">
            <a href="index.html#sport=${s.id}" class="accent-text hover:underline">${s.name}</a>
          </td>
          <td class="px-5 py-3 font-mono muted">${s.shortYear}</td>
          <td class="px-5 py-3 soft">${standard}</td>
          <td class="px-5 py-3 soft">${format}</td>
        </tr>`;
    }).join('');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  appLogic.init();
});
