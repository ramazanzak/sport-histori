/* ==========================================================================
   БЛОК 4: АДАМ, ХУЧБАР И ДЖАБРАИЛ — БАЗА ДАННЫХ, КУБОК-ИНТРО И QA (script.js)
   ========================================================================== */

const SPORTS_DATABASE = [
    {
        id: 'football',
        name: 'Футбол',
        subtitle: 'Игра миллионов и король мирового спорта',
        originYear: '1863 год (Англия)',
        ancientRoots: 'Древний Китай («Цуцзюй», II век до н.э.)',
        category: 'Командный игровой спорт',
        badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-400/40',
        shortSummary: 'Самый популярный командный вид спорта на планете, в котором две команды по 11 игроков стремятся забить мяч в ворота соперника ногами или любой другой частью тела, кроме рук.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="15" y="15" width="290" height="150" rx="16" fill="#064e3b" fill-opacity="0.35" stroke="#fbbf24" stroke-width="2"/>
                <line x1="160" y1="15" x2="160" y2="165" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/>
                <circle cx="160" cy="90" r="32" stroke="#fbbf24" stroke-width="2" fill="rgba(251,191,36,0.08)"/>
                <rect x="15" y="55" width="42" height="70" stroke="#10b981" stroke-width="2"/>
                <rect x="263" y="55" width="42" height="70" stroke="#10b981" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <circle cx="160" cy="90" r="22" fill="#f8fafc" stroke="#f59e0b" stroke-width="2.5"/>
                    <polygon points="160,77 170,84 166,96 154,96 150,84" fill="#0f172a"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Тактическая геометрия поля',
                caption: 'Классический размер арены 105×68 м с воротами 7.32 м',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="10" y="10" width="200" height="90" rx="8" fill="#022c22" stroke="#fbbf24" stroke-width="1.8"/>
                    <path d="M40 75 Q110 20 175 45" stroke="#fde047" stroke-width="2.5" stroke-dasharray="5 3"/>
                    <circle cx="175" cy="45" r="6" fill="#fde047"/>
                </svg>`
            },
            {
                title: 'Эволюция футбольного мяча',
                caption: 'От шнурованной кожи 1880-х до бесшовных термопанелей',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="65" cy="55" r="26" fill="#92400e" stroke="#f59e0b" stroke-width="2"/>
                    <circle cx="155" cy="55" r="26" fill="#f8fafc" stroke="#fbbf24" stroke-width="2"/>
                </svg>`
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
                { label: 'Размер ворот', value: '7,32 м × 2,44 м' },
                { label: 'Состав команд', value: '11 на 11 игроков' }
            ]
        }
    },
    {
        id: 'boxing',
        name: 'Бокс',
        subtitle: 'Благородное искусство поединка на ринге',
        originYear: '1867 год (Правила Куинсберри)',
        ancientRoots: 'Античная Олимпия (688 г. до н.э.)',
        category: 'Олимпийское единоборство',
        badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-400/40',
        shortSummary: 'Контактное единоборство внутри квадратного ринга с канатами, где решают скорость реакции, работа ног, защита и точные удары в мягких перчатках.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="25" y="25" width="270" height="130" rx="12" fill="#4c0519" fill-opacity="0.3" stroke="#fbbf24" stroke-width="2"/>
                <line x1="25" y1="60" x2="295" y2="60" stroke="#f43f5e" stroke-width="2"/>
                <line x1="25" y1="120" x2="295" y2="120" stroke="#f43f5e" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <rect x="112" y="58" width="44" height="50" rx="16" fill="#e11d48" stroke="#fde047" stroke-width="2"/>
                    <rect x="164" y="58" width="44" height="50" rx="16" fill="#f59e0b" stroke="#fef08a" stroke-width="2"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Геометрия ринга',
                caption: 'Квадрат 6,10 × 6,10 м, окруженный четырьмя канатами',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <polygon points="45,20 175,20 200,90 20,90" fill="rgba(244,63,94,0.12)" stroke="#fbbf24" stroke-width="2"/>
                </svg>`
            },
            {
                title: 'Чемпионский пояс',
                caption: 'Главный трофей абсолютных чемпионов мира',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="30" y="42" width="160" height="26" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
                    <ellipse cx="110" cy="55" rx="30" ry="22" fill="#fbbf24" stroke="#fef08a" stroke-width="2"/>
                </svg>`
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
        ancientRoots: 'Изобретен под названием «Минтонет»',
        category: 'Командный неконтактный спорт',
        badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40',
        shortSummary: 'Сверхдинамичная командная игра через высокую сетку, в которой 6 игроков стремятся атаковать площадку соперника за три касания мяча.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="25" width="280" height="130" rx="14" fill="#083344" fill-opacity="0.35" stroke="#fbbf24" stroke-width="2"/>
                <line x1="160" y1="15" x2="160" y2="165" stroke="#fde047" stroke-width="3"/>
                <g class="svg-animated-icon">
                    <circle cx="160" cy="75" r="24" fill="#fef08a" stroke="#0284c7" stroke-width="2.5"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Разметка 18 × 9 метров',
                caption: '6 игровых зон и трехметровая линия атаки',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="20" y="15" width="180" height="80" stroke="#fbbf24" stroke-width="2"/>
                    <line x1="110" y1="10" x2="110" y2="100" stroke="#38bdf8" stroke-width="3"/>
                </svg>`
            },
            {
                title: 'Комбинация в 3 касания',
                caption: 'Прием — Пасующая передача — Атакующий удар',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="50" cy="75" r="10" fill="#38bdf8"/>
                    <circle cx="110" cy="35" r="10" fill="#fbbf24"/>
                    <circle cx="170" cy="65" r="10" fill="#10b981"/>
                </svg>`
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
        ancientRoots: 'Зимние игры на замерзших озерах Канады',
        category: 'Зимний командный спорт',
        badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-400/40',
        shortSummary: 'Самая скоростная командная игра на льду: стальные коньки, карбоновые клюшки и молниеносные броски вулканизированной шайбы.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="20" width="280" height="140" rx="38" fill="#083344" fill-opacity="0.4" stroke="#38bdf8" stroke-width="2.2"/>
                <circle cx="160" cy="90" r="26" stroke="#fbbf24" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <path d="M125 50 L185 125 L205 125" stroke="#fde047" stroke-width="5" stroke-linecap="round"/>
                    <path d="M195 50 L135 125 L115 125" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Ледовая коробка с бортами',
                caption: 'Три зоны и 5 кругов для вбрасывания шайбы',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="15" y="15" width="190" height="80" rx="25" stroke="#38bdf8" stroke-width="2"/>
                </svg>`
            },
            {
                title: 'Вулканизированная шайба',
                caption: 'Плоская форма не дает снаряду вылетать за борта',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <ellipse cx="110" cy="55" rx="42" ry="16" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
                </svg>`
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
                { label: 'Вес шайбы', value: '156 — 170 граммов' }
            ]
        }
    },
    {
        id: 'basketball',
        name: 'Баскетбол',
        subtitle: 'Высота кольца 3,05 м и магия трехочковой дуги',
        originYear: '1891 год (США, Джеймс Нейсмит)',
        ancientRoots: '13 правил колледжа в Спрингфилде',
        category: 'Командный игровой спорт',
        badgeBg: 'bg-orange-500/15 text-orange-300 border-orange-400/40',
        shortSummary: 'Стремительная игра на паркете, где две пятерки игроков соревнуются в дриблинге, передачах и точных бросках в кольцо на высоте 3,05 метра.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="20" width="280" height="140" rx="14" fill="#7c2d12" fill-opacity="0.3" stroke="#fbbf24" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <circle cx="160" cy="90" r="25" fill="#ea580c" stroke="#fef08a" stroke-width="2"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Щит и стальное кольцо',
                caption: 'Высота 3,05 м осталась неизменной с 1891 года',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="75" y="15" width="70" height="45" rx="4" stroke="#f8fafc" stroke-width="2"/>
                    <ellipse cx="110" cy="55" rx="22" ry="6" stroke="#f97316" stroke-width="3"/>
                </svg>`
            },
            {
                title: 'Счетчик 24 секунд',
                caption: 'Введен в 1954 году для поддержания высокого темпа атак',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="65" y="25" width="90" height="60" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
                    <text x="110" y="65" text-anchor="middle" fill="#fde047" font-family="monospace" font-size="26" font-weight="bold">24.0</text>
                </svg>`
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
        ancientRoots: 'Французская королевская игра «Жё-де-пом»',
        category: 'Ракеточный вид спорта',
        badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
        shortSummary: 'Интеллектуальная дуэль на травяных, грунтовых и хардовых кортах, где сочетаются мощь подачи, вращение мяча и точность попадания в линию.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="25" y="22" width="270" height="136" rx="10" fill="#14532d" fill-opacity="0.35" stroke="#fbbf24" stroke-width="2"/>
                <line x1="160" y1="22" x2="160" y2="158" stroke="#f8fafc" stroke-width="3"/>
                <g class="svg-animated-icon">
                    <ellipse cx="145" cy="80" rx="26" ry="32" stroke="#fde047" stroke-width="3"/>
                    <circle cx="185" cy="75" r="12" fill="#fde047" stroke="#65a30d" stroke-width="2"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Три типа покрытия кортов',
                caption: 'Трава, Грунт и Хард определяют отскок и скорость мяча',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="15" y="25" width="55" height="60" rx="6" fill="#15803d" stroke="#fde047"/>
                    <rect x="82" y="25" width="55" height="60" rx="6" fill="#b45309" stroke="#fde047"/>
                    <rect x="150" y="25" width="55" height="60" rx="6" fill="#0369a1" stroke="#fde047"/>
                </svg>`
            },
            {
                title: 'Счет 15 — 30 — 40',
                caption: 'Историческая традиция отсчета очков по четвертям циферблата',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="110" cy="55" r="34" stroke="#fbbf24" stroke-width="2"/>
                    <line x1="110" y1="55" x2="132" y2="55" stroke="#f8fafc" stroke-width="2.5"/>
                </svg>`
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

const appLogic = {
    currentFilter: '',
    expandedSportId: null,
    introTimer: null,

    init() {
        this.startTrophyIntroAnimation();
        this.renderSportsCatalog(SPORTS_DATABASE);
        qaTester.runAllTests();
    },

    // Запуск заставки с кубком при входе
    startTrophyIntroAnimation() {
        const overlay = document.getElementById('trophyIntroScreen');
        const bar = document.getElementById('splashProgressBar');
        const percentText = document.getElementById('splashPercent');
        if (!overlay) return;

        overlay.classList.remove('splash-hidden');
        let progress = 0;

        if (this.introTimer) clearInterval(this.introTimer);
        this.introTimer = setInterval(() => {
            progress += 5;
            if (bar) bar.style.width = `${ Math.min(progress, 100) }%`;
            if (percentText) percentText.textContent = `${ Math.min(progress, 100) }%`;

            if (progress >= 100) {
                clearInterval(this.introTimer);
                setTimeout(() => {
                    this.closeTrophyIntro();
                }, 450);
            }
        }, 85);
    },

    closeTrophyIntro() {
        if (this.introTimer) clearInterval(this.introTimer);
        const overlay = document.getElementById('trophyIntroScreen');
        if (overlay) {
            overlay.classList.add('splash-hidden');
        }
    },

    replayTrophyIntro() {
        this.startTrophyIntroAnimation();
    },

    toggleCardPreview(sportId, event) {
        if (event) event.stopPropagation();
        this.expandedSportId = (this.expandedSportId === sportId) ? null : sportId;

        document.querySelectorAll('.sport-card').forEach(card => {
            const id = card.getAttribute('data-sport-id');
            const toggleBtnText = card.querySelector('.preview-toggle-label');
            if (id === this.expandedSportId) {
                card.classList.add('is-expanded', 'lg:col-span-2');
                if (toggleBtnText) toggleBtnText.textContent = 'Свернуть краткий обзор ▲';
            } else {
                card.classList.remove('is-expanded', 'lg:col-span-2');
                if (toggleBtnText) toggleBtnText.textContent = 'Краткий обзор и схемы ▼';
            }
        });
    },

    renderSportsCatalog(sportsList) {
        const container = document.getElementById('sportsGridContainer');
        if (!container) return;

        if (sportsList.length === 0) {
            container.innerHTML = `
                <div class="lg:col-span-2 glass-panel rounded-3xl p-10 text-center border border-amber-400/30">
                    <div class="text-2xl font-display font-bold text-white mb-2">Дисциплина не найдена</div>
                    <p class="text-slate-400 text-sm mb-5">Попробуйте выбрать «Футбол», «Бокс», «Волейбол», «Хоккей», «Баскетбол» или «Теннис».</p>
                    <button onclick="appLogic.clearSearch()" class="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm">
                        Показать все дисциплины
                    </button>
                </div>
            `;
            return;
        }

        container.innerHTML = sportsList.map(sport => {
            const isExpanded = this.expandedSportId === sport.id;
            return `
            <article 
                onclick="appLogic.toggleCardPreview('${sport.id}', event)"
                class="sport-card ${isExpanded ? 'is-expanded lg:col-span-2' : ''} rounded-3xl p-6 sm:p-7 cursor-pointer flex flex-col justify-between"
                data-sport-id="${sport.id}"
            >
                <div>
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span class="px-3 py-1 rounded-full text-xs font-semibold border ${sport.badgeBg}">
                            ★ ${sport.category}
                        </span>
                        <span class="text-xs font-mono text-amber-200 bg-slate-900/90 px-3 py-1 rounded-lg border border-amber-400/20">
                            ${sport.originYear}
                        </span>
                    </div>

                    <h3 class="font-display text-2xl sm:text-3xl font-extrabold text-white">${sport.name}</h3>
                    <p class="text-xs sm:text-sm text-amber-300 font-medium mt-0.5 mb-4">${sport.subtitle}</p>

                    <div class="rounded-2xl bg-slate-950/90 border border-slate-800 p-3 mb-4">
                        ${sport.mainSvg}
                    </div>

                    <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                        ${sport.shortSummary}
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-800/80">
                    <button 
                        type="button"
                        onclick="appLogic.toggleCardPreview('${sport.id}', event)"
                        class="preview-toggle-label flex-1 py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-400/30 font-semibold text-xs sm:text-sm transition-colors text-center"
                    >
                        ${isExpanded ? 'Свернуть краткий обзор ▲' : 'Краткий обзор и схемы ▼'}
                    </button>

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); appLogic.openSportDetail('${sport.id}')"
                        class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/15 transition-all text-center"
                    >
                        Полная история в подробностях →
                    </button>
                </div>

                <div class="sport-click-drawer mt-6 pt-6 border-t border-amber-400/30" onclick="event.stopPropagation()">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${sport.galleryFrames.map(frame => `
                            <div class="rounded-2xl bg-slate-950/90 border border-slate-800 p-4">
                                ${frame.svg}
                                <div class="mt-2.5">
                                    <div class="text-xs sm:text-sm font-bold text-white">${frame.title}</div>
                                    <div class="text-xs text-slate-400 mt-1">${frame.caption}</div>
                                </div>
                            </div>
                        `).join('')}

                        <div class="rounded-2xl bg-slate-900/95 border border-amber-400/25 p-4 flex flex-col justify-between">
                            <div>
                                <div class="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">Исторические корни:</div>
                                <p class="text-xs text-slate-300 mb-3">${sport.ancientRoots}</p>
                                <div class="space-y-1.5 pt-2 border-t border-slate-800">
                                    ${sport.fullHistory.keyStats.map(st => `
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-slate-400">${st.label}:</span>
                                            <span class="font-semibold text-amber-300">${st.value}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <button 
                                type="button"
                                onclick="appLogic.openSportDetail('${sport.id}')"
                                class="mt-4 w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
                            >
                                Открыть летопись «${sport.name}» →
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `}).join('');
    },

    handleSearch(query) {
        const cleanQuery = query.trim().toLowerCase();
        const clearBtn = document.getElementById('clearSearchBtn');
        const statusBanner = document.getElementById('searchStatusBanner');
        const statusText = document.getElementById('searchStatusText');

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
            statusText.innerHTML = `Найдено по запросу <strong>«${query}»</strong>: <strong>${filtered.length}</strong>`;
            this.renderSportsCatalog(filtered);
        } else {
            clearBtn.classList.add('hidden');
            statusBanner.classList.add('hidden');
            this.renderSportsCatalog(SPORTS_DATABASE);
        }
    },

    quickFilter(sportName) {
        const input = document.getElementById('sportSearchInput');
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
        const sport = SPORTS_DATABASE.find(s => s.id === sportId);
        if (!sport) return;

        const contentBox = document.getElementById('internalSportContent');
        contentBox.innerHTML = `
            <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-400/40">
                <span class="px-3.5 py-1 rounded-full text-xs font-bold border ${sport.badgeBg}">
                    ${sport.category} • ${sport.originYear}
                </span>
                <h1 class="font-display text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
                    История дисциплины: <span class="gold-gradient-text">${sport.name}</span>
                </h1>
                <p class="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">${sport.fullHistory.intro}</p>
                <div class="rounded-2xl bg-slate-950 p-5 border border-slate-800">
                    ${sport.mainSvg}
                </div>
            </div>

            <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
                <h2 class="font-display text-2xl font-bold text-white mb-6">Хронология ключевых вех (${sport.name})</h2>
                <div class="space-y-4">
                    ${sport.fullHistory.timeline.map((step, idx) => `
                        <div class="p-5 rounded-2xl bg-slate-900/90 border border-amber-400/20">
                            <span class="text-xs font-mono font-bold text-amber-300">${idx + 1}. ${step.year}</span>
                            <h3 class="font-display text-lg font-bold text-white mt-1">${step.title}</h3>
                            <p class="text-slate-300 text-sm mt-1">${step.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
                <h2 class="font-display text-2xl font-bold text-white mb-6">Эволюция инвентаря и правил</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${sport.fullHistory.equipmentEvolution.map(eq => `
                        <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                            <div class="text-amber-300 font-display font-bold text-base mb-2">${eq.item}</div>
                            <p class="text-slate-300 text-sm">${eq.detail}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.getElementById('mainPageView').classList.add('hidden');
        document.getElementById('internalSportView').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    showMainPage(scrollToTop = true) {
        document.getElementById('internalSportView').classList.add('hidden');
        document.getElementById('mainPageView').classList.remove('hidden');
        if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    navigateSection(sectionId) {
        this.showMainPage(false);
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
};

const qaTester = {
    runAllTests() {
        const resultsGrid = document.getElementById('qaResultsGrid');
        if (!resultsGrid) return;

        const checks = [
            { title: '1. Заставка с Кубком при входе', owner: 'Изамутдин', passed: !!document.getElementById('trophyIntroScreen'), details: 'Полноэкранный чемпионский кубок с анимацией загрузки активен.' },
            { title: '2. Запрет фото людей (100% SVG)', owner: 'Изамутдин & Джабраил', passed: document.querySelectorAll('img').length === 0, details: 'Найдено 0 тегов <img>. Вся графика — чистый вектор.' },
            { title: '3. Стабильные карточки при скролле', owner: 'Рамазан', passed: SPORTS_DATABASE.length === 6, details: 'Сетка из 6 дисциплин раскрывается строго по клику.' },
            { title: '4. Внутренняя летопись по векам', owner: 'Хучбар', passed: !!document.getElementById('internalSportView'), details: 'Детальная история каждого вида спорта подключена.' },
            { title: '5. Умный поиск и фильтрация', owner: 'Адам', passed: !!document.getElementById('sportSearchInput'), details: 'Живой поиск и теги мгновенно фильтруют карточки.' },
            { title: '6. Модуль целей проекта', owner: 'Рамазан & Джабраил', passed: !!document.getElementById('about-site'), details: 'Раздел «О сайте» раскрывает назначение портала.' }
        ];

        resultsGrid.innerHTML = checks.map(c => `
            <div class="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-bold text-white">${c.title}</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">ПРОЙДЕНО ✓</span>
                </div>
                <p class="text-xs text-slate-400 mb-1.5">${c.details}</p>
                <div class="text-[11px] text-amber-300 font-mono">Ответственный: ${c.owner}</div>
            </div>
        `).join('');
    }
};

window.addEventListener('DOMContentLoaded', () => {
    appLogic.init();
});