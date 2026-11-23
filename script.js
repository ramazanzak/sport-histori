/* Хроники Спорта — логика (unslop by @heydamir, CC BY 4.0) */

const SPORTS_DATABASE = [
    {
        id: 'football',
        name: 'Футбол',
        subtitle: 'Игра миллионов и король мирового спорта',
        originYear: '1863 год (Англия)',
        ancientRoots: 'Древний Китай («Цуцзюй», II век до н.э.)',
        category: 'Командный игровой спорт',
        badgeBg: 'bg-[#262421] text-[#7aab8a] border-[rgba(239,233,222,0.08)]',
        shortSummary: 'Самый популярный командный вид спорта на планете, в котором две команды по 11 игроков стремятся забить мяч в ворота соперника ногами или любой другой частью тела, кроме рук.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="15" y="15" width="290" height="150" rx="4" fill="none" stroke="#5a7a68" stroke-width="1.5"/>
                <line x1="160" y1="15" x2="160" y2="165" stroke="#5a7a68" stroke-width="1.5" stroke-dasharray="4 4"/>
                <circle cx="160" cy="90" r="32" stroke="#5a7a68" stroke-width="1.5" fill="none"/>
                <rect x="15" y="55" width="42" height="70" fill="none" stroke="#5a7a68" stroke-width="1.5"/>
                <rect x="263" y="55" width="42" height="70" fill="none" stroke="#5a7a68" stroke-width="1.5"/>
                <circle cx="160" cy="90" r="18" fill="#efe9de" stroke="#d97706" stroke-width="2"/>
                <polygon points="160,80 168,86 165,95 155,95 152,86" fill="#161513"/>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Тактическая геометрия поля',
                caption: 'Классический размер арены 105 × 68 м с воротами 7,32 м',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="10" y="10" width="200" height="90" rx="4" fill="none" stroke="#5a7a68" stroke-width="1.5"/>
                    <path d="M40 75 Q110 20 175 45" stroke="#d97706" stroke-width="2" stroke-dasharray="5 3" fill="none"/>
                    <circle cx="175" cy="45" r="4" fill="#d97706"/>
                </svg>`
            },
            {
                title: 'Эволюция футбольного мяча',
                caption: 'От шнурованной кожи 1880-х до бесшовных термопанелей',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="65" cy="55" r="22" fill="none" stroke="#8a847a" stroke-width="1.5"/>
                    <circle cx="155" cy="55" r="22" fill="#efe9de" stroke="#d97706" stroke-width="1.5"/>
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
        ancientRoots: 'Античная Олимпия (688 г. до н.э.)',
        category: 'Олимпийское единоборство',
        badgeBg: 'bg-[#262421] text-[#b87a7a] border-[rgba(239,233,222,0.08)]',
        shortSummary: 'Контактное единоборство внутри квадратного ринга с канатами, где решают скорость реакции, работа ног, защита и точные удары в мягких перчатках.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="25" y="25" width="270" height="130" rx="4" fill="none" stroke="#8a6a6e" stroke-width="1.5"/>
                <line x1="25" y1="60" x2="295" y2="60" stroke="#8a6a6e" stroke-width="1"/>
                <line x1="25" y1="120" x2="295" y2="120" stroke="#8a6a6e" stroke-width="1"/>
                <rect x="118" y="60" width="36" height="44" rx="12" fill="#6a4248" stroke="#8a6a6e" stroke-width="1.5"/>
                <rect x="166" y="60" width="36" height="44" rx="12" fill="#d97706" stroke="#efe9de" stroke-width="1.5"/>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Геометрия ринга',
                caption: 'Квадрат 6,10 × 6,10 м, окруженный четырьмя канатами',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <polygon points="45,20 175,20 195,90 25,90" fill="none" stroke="#8a6a6e" stroke-width="1.5"/>
                </svg>`
            },
            {
                title: 'Чемпионский пояс',
                caption: 'Главный трофей абсолютных чемпионов мира',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="30" y="42" width="160" height="26" rx="6" fill="none" stroke="#8a847a" stroke-width="1.5"/>
                    <ellipse cx="110" cy="55" rx="26" ry="18" fill="#d97706" stroke="#efe9de" stroke-width="1.5"/>
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
        badgeBg: 'bg-[#262421] text-[#7a9fb8] border-[rgba(239,233,222,0.08)]',
        shortSummary: 'Сверхдинамичная командная игра через высокую сетку, в которой 6 игроков стремятся атаковать площадку соперника за три касания мяча.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="25" width="280" height="130" rx="4" fill="none" stroke="#5a8aaa" stroke-width="1.5"/>
                <line x1="160" y1="15" x2="160" y2="165" stroke="#d97706" stroke-width="2"/>
                <circle cx="160" cy="70" r="18" fill="#efe9de" stroke="#5a8aaa" stroke-width="2"/>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Разметка 18 × 9 метров',
                caption: '6 игровых зон и трехметровая линия атаки',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="20" y="15" width="180" height="80" fill="none" stroke="#5a8aaa" stroke-width="1.5"/>
                    <line x1="110" y1="10" x2="110" y2="100" stroke="#d97706" stroke-width="2"/>
                </svg>`
            },
            {
                title: 'Комбинация в 3 касания',
                caption: 'Прием — Пасующая передача — Атакующий удар',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="50" cy="70" r="8" fill="#5a8aaa"/>
                    <circle cx="110" cy="35" r="8" fill="#d97706"/>
                    <circle cx="170" cy="60" r="8" fill="#4cc38a"/>
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
        badgeBg: 'bg-[#262421] text-[#7aabc4] border-[rgba(239,233,222,0.08)]',
        shortSummary: 'Самая скоростная командная игра на льду: стальные коньки, карбоновые клюшки и молниеносные броски вулканизированной шайбы.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="20" width="280" height="140" rx="38" fill="none" stroke="#5a8ab8" stroke-width="1.5"/>
                <circle cx="160" cy="90" r="24" stroke="#d97706" stroke-width="1.5" fill="none"/>
                <path d="M125 50 L185 125 L205 125" stroke="#d97706" stroke-width="4" stroke-linecap="round" fill="none"/>
                <path d="M195 50 L135 125 L115 125" stroke="#5a8ab8" stroke-width="4" stroke-linecap="round" fill="none"/>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Ледовая коробка с бортами',
                caption: 'Три зоны и 5 кругов для вбрасывания шайбы',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="15" y="15" width="190" height="80" rx="20" fill="none" stroke="#5a8ab8" stroke-width="1.5"/>
                </svg>`
            },
            {
                title: 'Вулканизированная шайба',
                caption: 'Плоская форма не дает снаряду вылетать за борта',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <ellipse cx="110" cy="55" rx="36" ry="14" fill="#262421" stroke="#d97706" stroke-width="1.5"/>
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
                { label: 'Вес шайбы', value: '156–170 граммов' }
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
        badgeBg: 'bg-[#262421] text-[#c8943a] border-[rgba(239,233,222,0.08)]',
        shortSummary: 'Стремительная игра на паркете, где две пятерки игроков соревнуются в дриблинге, передачах и точных бросках в кольцо на высоте 3,05 метра.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="20" width="280" height="140" rx="4" fill="none" stroke="#8a7a5a" stroke-width="1.5"/>
                <circle cx="160" cy="90" r="22" fill="#d97706" stroke="#efe9de" stroke-width="2"/>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Щит и стальное кольцо',
                caption: 'Высота 3,05 м осталась неизменной с 1891 года',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="75" y="15" width="70" height="40" rx="4" fill="none" stroke="#8a847a" stroke-width="1.5"/>
                    <ellipse cx="110" cy="52" rx="18" ry="5" stroke="#d97706" stroke-width="2" fill="none"/>
                </svg>`
            },
            {
                title: 'Счетчик 24 секунд',
                caption: 'Введен в 1954 году для поддержания высокого темпа атак',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="65" y="25" width="90" height="60" rx="8" fill="#12110f" stroke="#d97706" stroke-width="1.5"/>
                    <text x="110" y="65" text-anchor="middle" fill="#d97706" font-family="monospace" font-size="24" font-weight="500">24.0</text>
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
        badgeBg: 'bg-[#262421] text-[#8aab72] border-[rgba(239,233,222,0.08)]',
        shortSummary: 'Интеллектуальная дуэль на травяных, грунтовых и хардовых кортах, где сочетаются мощь подачи, вращение мяча и точность попадания в линию.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="25" y="22" width="270" height="136" rx="4" fill="none" stroke="#5a8a5a" stroke-width="1.5"/>
                <line x1="160" y1="22" x2="160" y2="158" stroke="#efe9de" stroke-width="2"/>
                <ellipse cx="145" cy="80" rx="22" ry="28" stroke="#d97706" stroke-width="2" fill="none"/>
                <circle cx="185" cy="75" r="10" fill="#d97706" stroke="#5a8a5a" stroke-width="1.5"/>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Три типа покрытия кортов',
                caption: 'Трава, грунт и хард определяют отскок и скорость мяча',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="15" y="25" width="55" height="60" rx="4" fill="#2a3a2e" stroke="#5a8a5a" stroke-width="1"/>
                    <rect x="82" y="25" width="55" height="60" rx="4" fill="#3a2a1e" stroke="#8a7a5a" stroke-width="1"/>
                    <rect x="150" y="25" width="55" height="60" rx="4" fill="#1e2a3a" stroke="#5a7a9a" stroke-width="1"/>
                </svg>`
            },
            {
                title: 'Счет 15 — 30 — 40',
                caption: 'Историческая традиция отсчета очков по четвертям циферблата',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="110" cy="55" r="30" stroke="#d97706" stroke-width="1.5" fill="none"/>
                    <line x1="110" y1="55" x2="128" y2="55" stroke="#efe9de" stroke-width="2"/>
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

    init() {
        this.renderSportsCatalog(SPORTS_DATABASE);
        qaTester.runAllTests();
    },

    toggleCardPreview(sportId, event) {
        if (event) event.stopPropagation();
        this.expandedSportId = (this.expandedSportId === sportId) ? null : sportId;

        document.querySelectorAll('.sport-card').forEach(card => {
            const id = card.getAttribute('data-sport-id');
            const toggleBtnText = card.querySelector('.preview-toggle-label');
            if (id === this.expandedSportId) {
                card.classList.add('is-expanded', 'lg:col-span-2');
                if (toggleBtnText) toggleBtnText.textContent = 'Свернуть';
            } else {
                card.classList.remove('is-expanded', 'lg:col-span-2');
                if (toggleBtnText) toggleBtnText.textContent = 'Краткий обзор';
            }
        });
    },

    renderSportsCatalog(sportsList) {
        const container = document.getElementById('sportsGridContainer');
        if (!container) return;

        if (sportsList.length === 0) {
            container.innerHTML = `
                <div class="lg:col-span-2 glass-panel rounded-xl p-8 text-center border border-[rgba(239,233,222,0.08)]">
                    <div class="text-sm font-medium text-[#efe9de] mb-2">Дисциплина не найдена</div>
                    <p class="text-xs text-[#8a847a] mb-4">Попробуйте другой запрос или выберите из списка</p>
                    <button onclick="appLogic.clearSearch()" class="px-4 py-2 rounded-lg bg-[#efe9de] text-[#161513] text-xs font-medium transition-colors hover:bg-[#d9d4c8]">
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
                class="sport-card ${isExpanded ? 'is-expanded lg:col-span-2' : ''} rounded-xl p-5 cursor-pointer flex flex-col justify-between"
                data-sport-id="${sport.id}"
            >
                <div>
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span class="px-2 py-1 rounded-lg text-xs font-medium border ${sport.badgeBg}">
                            ${sport.category}
                        </span>
                        <span class="text-xs font-mono text-[#8a847a] tabular-nums">
                            ${sport.originYear}
                        </span>
                    </div>

                    <h3 class="font-display text-xl font-medium text-[#efe9de]">${sport.name}</h3>
                    <p class="text-xs text-[#aaa398] mt-1 mb-4">${sport.subtitle}</p>

                    <div class="rounded-lg bg-[#12110f] border border-[rgba(239,233,222,0.08)] p-3 mb-4">
                        ${sport.mainSvg}
                    </div>

                    <p class="text-[#aaa398] text-xs leading-relaxed mb-4">
                        ${sport.shortSummary}
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-4 border-t border-[rgba(239,233,222,0.08)]">
                    <button
                        type="button"
                        onclick="appLogic.toggleCardPreview('${sport.id}', event)"
                        class="preview-toggle-label flex-1 py-2.5 px-4 rounded-lg bg-[#262421] text-[#aaa398] border border-[rgba(239,233,222,0.08)] text-xs font-medium transition-colors text-center hover:text-[#efe9de]"
                    >
                        ${isExpanded ? 'Свернуть' : 'Краткий обзор'}
                    </button>

                    <button
                        type="button"
                        onclick="event.stopPropagation(); appLogic.openSportDetail('${sport.id}')"
                        class="flex-1 py-2.5 px-4 rounded-lg bg-[#efe9de] text-[#161513] text-xs font-medium transition-colors text-center hover:bg-[#d9d4c8]"
                    >
                        Полная история
                    </button>
                </div>

                <div class="sport-click-drawer mt-5 pt-5 border-t border-[rgba(239,233,222,0.08)]" onclick="event.stopPropagation()">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        ${sport.galleryFrames.map(frame => `
                            <div class="rounded-lg bg-[#12110f] border border-[rgba(239,233,222,0.08)] p-3">
                                ${frame.svg}
                                <div class="mt-2">
                                    <div class="text-xs font-medium text-[#efe9de]">${frame.title}</div>
                                    <div class="text-xs text-[#8a847a] mt-0.5">${frame.caption}</div>
                                </div>
                            </div>
                        `).join('')}

                        <div class="rounded-lg bg-[#1c1a18] border border-[rgba(239,233,222,0.08)] p-3 flex flex-col justify-between">
                            <div>
                                <div class="text-xs font-medium text-[#8a847a] mb-2">Исторические корни</div>
                                <p class="text-xs text-[#aaa398] mb-3">${sport.ancientRoots}</p>
                                <div class="space-y-1.5 pt-2 border-t border-[rgba(239,233,222,0.08)]">
                                    ${sport.fullHistory.keyStats.map(st => `
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-[#8a847a]">${st.label}</span>
                                            <span class="font-mono text-[#aaa398] tabular-nums">${st.value}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <button
                                type="button"
                                onclick="appLogic.openSportDetail('${sport.id}')"
                                class="mt-3 w-full py-2 px-3 rounded-lg bg-[#efe9de] text-[#161513] text-xs font-medium transition-colors hover:bg-[#d9d4c8]"
                            >
                                Летопись: ${sport.name}
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
            <div class="glass-panel rounded-xl p-6 sm:p-8 border border-[rgba(239,233,222,0.08)]">
                <span class="text-xs font-mono text-[#d97706]">
                    ${sport.category} · ${sport.originYear}
                </span>
                <h1 class="font-display text-2xl sm:text-4xl font-medium text-[#efe9de] mt-3 mb-4">
                    ${sport.name}
                </h1>
                <p class="text-[#aaa398] text-sm leading-relaxed mb-6">${sport.fullHistory.intro}</p>
                <div class="rounded-lg bg-[#12110f] p-4 border border-[rgba(239,233,222,0.08)]">
                    ${sport.mainSvg}
                </div>
            </div>

            <div class="glass-panel rounded-xl p-6 sm:p-8 border border-[rgba(239,233,222,0.08)]">
                <h2 class="font-display text-xl font-medium text-[#efe9de] mb-6">Хронология</h2>
                <div class="space-y-3">
                    ${sport.fullHistory.timeline.map(step => `
                        <div class="p-4 rounded-lg bg-[#12110f] border border-[rgba(239,233,222,0.08)]">
                            <span class="text-xs font-mono text-[#d97706]">${step.year}</span>
                            <h3 class="text-sm font-medium text-[#efe9de] mt-1">${step.title}</h3>
                            <p class="text-[#aaa398] text-xs mt-1">${step.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="glass-panel rounded-xl p-6 sm:p-8 border border-[rgba(239,233,222,0.08)]">
                <h2 class="font-display text-xl font-medium text-[#efe9de] mb-6">Эволюция инвентаря</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    ${sport.fullHistory.equipmentEvolution.map(eq => `
                        <div class="p-4 rounded-lg bg-[#12110f] border border-[rgba(239,233,222,0.08)]">
                            <div class="text-sm font-medium text-[#d97706] mb-2">${eq.item}</div>
                            <p class="text-[#aaa398] text-xs">${eq.detail}</p>
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
            { title: 'Запрет фотографий', owner: 'Изамутдин', passed: document.querySelectorAll('img').length === 0, details: 'Вся графика — чистый SVG' },
            { title: 'Стабильные карточки', owner: 'Рамазан', passed: SPORTS_DATABASE.length === 6, details: '6 дисциплин, открытие по клику' },
            { title: 'Внутренняя летопись', owner: 'Хучбар', passed: !!document.getElementById('internalSportView'), details: 'Детальная история подключена' },
            { title: 'Поиск и фильтрация', owner: 'Адам', passed: !!document.getElementById('sportSearchInput'), details: 'Живой поиск по дисциплинам' },
            { title: 'Раздел «О сайте»', owner: 'Рамазан', passed: !!document.getElementById('about-site'), details: 'Описание назначения портала' }
        ];

        resultsGrid.innerHTML = checks.map(c => `
            <div class="p-3 rounded-lg bg-[#12110f] border border-[rgba(239,233,222,0.08)]">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-medium text-[#efe9de]">${c.title}</span>
                    <span class="text-xs font-mono ${c.passed ? 'text-[#4cc38a]' : 'text-[#e5484d]'}">${c.passed ? 'OK' : 'Ошибка'}</span>
                </div>
                <p class="text-xs text-[#8a847a] mb-1">${c.details}</p>
                <div class="text-xs text-[#8a847a] font-mono">${c.owner}</div>
            </div>
        `).join('');
    }
};

window.addEventListener('DOMContentLoaded', () => {
    appLogic.init();
});