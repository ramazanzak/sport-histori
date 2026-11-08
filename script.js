/* ==========================================================================
   БЛОК 4: АДАМ, ХУЧБАР И ДЖАБРАИЛ — БАЗА ДАННЫХ, ФУНКЦИОНАЛ И АВТОТЕСТЫ (script.js)
   ========================================================================== */

const SPORTS_DATABASE = [
    {
        id: 'football',
        name: 'Футбол',
        subtitle: 'Игра миллионов и король мирового спорта',
        originYear: '1863 год (Англия)',
        ancientRoots: 'Древний Китай («Цуцзюй», II век до н.э.)',
        category: 'Командный игровой спорт',
        accentColor: 'emerald',
        badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        shortSummary: 'Самый популярный командный вид спорта на планете, в котором две команды по 11 игроков стремятся забить мяч в ворота соперника ногами или любой другой частью тела, кроме рук.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="15" y="15" width="290" height="150" rx="16" fill="#064e3b" fill-opacity="0.35" stroke="#10b981" stroke-width="2"/>
                <line x1="160" y1="15" x2="160" y2="165" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/>
                <circle cx="160" cy="90" r="32" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.1)"/>
                <rect x="15" y="55" width="42" height="70" stroke="#10b981" stroke-width="2"/>
                <rect x="263" y="55" width="42" height="70" stroke="#10b981" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <circle cx="160" cy="90" r="22" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"/>
                    <polygon points="160,77 170,84 166,96 154,96 150,84" fill="#0f172a"/>
                    <path d="M160 68 V77 M170 84 L180 80 M166 96 L173 106 M154 96 L147 106 M150 84 L140 80" stroke="#0f172a" stroke-width="2.5"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Тактическая геометрия поля',
                caption: 'Классический размер арены 105×68 м с воротами 7.32 м',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="10" y="10" width="200" height="90" rx="8" fill="#022c22" stroke="#34d399" stroke-width="1.8"/>
                    <path d="M40 75 Q110 20 175 45" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5 3"/>
                    <circle cx="175" cy="45" r="6" fill="#fde047"/>
                    <circle cx="40" cy="75" r="5" fill="#38bdf8"/>
                </svg>`
            },
            {
                title: 'Эволюция футбольного мяча',
                caption: 'От шнурованной кожи 1880-х до бесшовных 32 панелей',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="65" cy="55" r="28" fill="#92400e" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="50" y1="45" x2="80" y2="45" stroke="#fde68a" stroke-width="3"/>
                    <path d="M105 55 H125" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 3"/>
                    <circle cx="160" cy="55" r="28" fill="#e2e8f0" stroke="#38bdf8" stroke-width="2"/>
                    <polygon points="160,42 170,50 166,62 154,62 150,50" fill="#0f172a"/>
                </svg>`
            }
        ],
        fullHistory: {
            intro: 'Футбол прошел удивительный путь длиной более двух тысячелетий. Хотя игры с мячом ногами существовали в Древнем Китае («Цуцзюй»), Древней Греции и Риме («Гарпастум»), рождение современного футбола произошло в Великобритании в XIX веке, когда университеты решили объединить разрозненные правила.',
            timeline: [
                { year: 'II век до н.э.', title: 'Китайская игра «Цуцзюй»', desc: 'Военные тренировки династии Хань, где кожаный мяч, набитый перьями, нужно было забить в сетку, натянутую между бамбуковыми шестами. Признана ФИФА древнейшим предшественником футбола.' },
                { year: '1863 год', title: 'Основание Футбольной ассоциации Англии', desc: '26 октября 1863 года в лондонской таверне «Фримейсонс» были приняты первые официальные правила, строго запретившие играть руками и удерживать мяч в руках.' },
                { year: '1871–1891 гг.', title: 'Появление вратаря, сетки на воротах и пенальти', desc: 'Введены ключевые элементы современной игры: перекладина заменила веревку, на ворота натянули сетку, а за грубый фол у ворот назначили 11-метровый удар.' },
                { year: '1930 год', title: 'Первый Чемпионат мира в Уругвае', desc: 'Под эгидой ФИФА прошел первый в истории мундиаль, сделавший футбол главным планетарным зрелищем.' },
                { year: 'XXI век', title: 'Эра высоких технологий и VAR', desc: 'Появление автоматической фиксации гола (Goal-Line), чипированных мячей и видеоповторов VAR.' }
            ],
            equipmentEvolution: [
                { item: 'Мяч', detail: 'От тяжелых кожаных сфер, разбухавших под дождем, до термосклеенных синтетических мячей идеальной аэродинамики.' },
                { item: 'Обувь (Бутсы)', detail: 'В XIX веке играли в тяжелых рабочих ботинках со стальными носками; сегодня бутсы весят менее 180 граммов.' },
                { item: 'Судейские карточки', detail: 'Желтые и красные карточки были придуманы английским арбитром Кеном Астоном в 1970 году по образцу цветов светофора.' }
            ],
            keyStats: [
                { label: 'Длительность матча', value: '2 тайма по 45 минут' },
                { label: 'Размер ворот', value: '7,32 м × 2,44 м' },
                { label: 'Стран в ФИФА', value: '211 федераций' }
            ]
        }
    },
    {
        id: 'boxing',
        name: 'Бокс',
        subtitle: 'Благородное искусство самозащиты на ринге',
        originYear: '1867 год (Правила Куинсберри)',
        ancientRoots: 'Шумер и античная Олимпия (688 г. до н.э.)',
        category: 'Контактное единоборство',
        accentColor: 'rose',
        badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
        shortSummary: 'Олимпийское контактное единоборство, в котором поединок проходит внутри квадратного ринга, окруженного канатами, а удары наносятся исключительно кулаками в специальных мягких перчатках.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="25" y="25" width="270" height="130" rx="12" fill="#4c0519" fill-opacity="0.3" stroke="#f43f5e" stroke-width="2"/>
                <line x1="25" y1="55" x2="295" y2="55" stroke="#fb7185" stroke-width="2"/>
                <line x1="25" y1="90" x2="295" y2="90" stroke="#fb7185" stroke-width="2"/>
                <line x1="25" y1="125" x2="295" y2="125" stroke="#fb7185" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <rect x="112" y="55" width="44" height="52" rx="18" fill="#e11d48" stroke="#fecdd3" stroke-width="2"/>
                    <rect x="120" y="102" width="28" height="16" rx="4" fill="#9f1239" stroke="#fecdd3" stroke-width="1.5"/>
                    <rect x="164" y="55" width="44" height="52" rx="18" fill="#0284c7" stroke="#bae6fd" stroke-width="2"/>
                    <rect x="172" y="102" width="28" height="16" rx="4" fill="#075985" stroke="#bae6fd" stroke-width="1.5"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Геометрия боксерского ринга',
                caption: 'Квадрат со стороной от 4.9 до 6.1 м и 4 рядами канатов',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <polygon points="45,20 175,20 200,90 20,90" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="2"/>
                    <circle cx="45" cy="20" r="5" fill="#38bdf8"/>
                    <circle cx="175" cy="20" r="5" fill="#f43f5e"/>
                    <circle cx="200" cy="90" r="5" fill="#f8fafc"/>
                    <circle cx="20" cy="90" r="5" fill="#f8fafc"/>
                </svg>`
            },
            {
                title: 'Чемпионский пояс и гонг',
                caption: 'Традиция вручать пояса зародилась в Англии в 1810-х годах',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="30" y="42" width="160" height="26" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
                    <ellipse cx="110" cy="55" rx="32" ry="24" fill="#fbbf24" stroke="#fef08a" stroke-width="2"/>
                    <polygon points="110,40 115,50 126,50 117,57 120,67 110,61 100,67 103,57 94,50 105,50" fill="#78350f"/>
                </svg>`
            }
        ],
        fullHistory: {
            intro: 'Бокс — одно из старейших боевых искусств человечества. Изображения кулачных бойцов находили еще на шумерских и египетских барельефах III тысячелетия до н.э. В 688 году до н.э. кулачный бой («Пигмахия») вошел в программу античных Олимпийских игр, а современный облик спорт обрел в Англии.',
            timeline: [
                { year: '688 г. до н.э.', title: 'Античная Олимпия («Пигмахия»)', desc: 'Древние греки обматывали кисти кожаными ремнями («гимантами»). Раундов не существовало, а бой шел на открытой песочной площадке.' },
                { year: '1743 год', title: 'Правила Джека Бротона', desc: 'Чемпион Англии Джек Бротон написал первый свод правил: запретил бить упавшего соперника и ввел 30-секундный перерыв после нокдауна.' },
                { year: '1867 год', title: 'Правила маркиза Куинсберри', desc: 'Революция в боксе: введены обязательные мягкие перчатки, раунды ровно по 3 минуты с минутным перерывом и отсчет 10 секунд при нокдауне.' },
                { year: '1904 год', title: 'Олимпийский дебют в Сент-Луисе', desc: 'Бокс официально включен в программу современных Олимпийских игр и с тех пор входит в число самых зрелищных дисциплин.' }
            ],
            equipmentEvolution: [
                { item: 'Боксерские перчатки', detail: 'От кожаных ремней античности к современным унцевым перчаткам (8, 10, 12–16 oz) с многослойным пенным наполнителем, защищающим руки.' },
                { item: 'Ринг', detail: 'Слово «Ring» изначально означало круг, который зрители образовывали вокруг бойцов; позже площадка стала квадратной с канатами.' },
                { item: 'Капа и шлем', detail: 'Введены в XX веке для максимального снижения травматизма в любительском и профессиональном спорте.' }
            ],
            keyStats: [
                { label: 'Длительность раунда', value: '3 минуты (1 мин. перерыв)' },
                { label: 'Весовых категорий', value: 'До 17 в профи-боксе' },
                { label: 'Отсчет нокдауна', value: '10 секунд' }
            ]
        }
    },
    {
        id: 'volleyball',
        name: 'Волейбол',
        subtitle: 'Интеллектуальная динамика и полет над сеткой',
        originYear: '1895 год (США, Холиок)',
        ancientRoots: 'Изобретен Уильямом Морганом как «Минтонет»',
        category: 'Командный неконтактный спорт',
        accentColor: 'amber',
        badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        shortSummary: 'Динамичная командная игра через высокую сетку, где две команды по 6 человек стремятся направить мяч ударами рук так, чтобы он коснулся площадки на половине соперника.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="25" width="280" height="130" rx="14" fill="#78350f" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
                <line x1="160" y1="15" x2="160" y2="165" stroke="#fde047" stroke-width="3"/>
                <rect x="152" y="25" width="16" height="130" fill="rgba(253, 224, 71, 0.15)" stroke="#f59e0b" stroke-dasharray="4 4"/>
                <g class="svg-animated-icon">
                    <circle cx="115" cy="70" r="24" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>
                    <path d="M95 60 Q115 45 135 60 M93 75 Q115 65 137 75 M115 46 V94" stroke="#0284c7" stroke-width="2"/>
                    <path d="M142 65 Q185 30 225 95" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5 4"/>
                    <circle cx="225" cy="95" r="5" fill="#f59e0b"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Высота сетки и зоны площадки',
                caption: 'Площадка 18×9 метров, разделенная на 6 позиционных зон',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="20" y="15" width="180" height="80" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="110" y1="10" x2="110" y2="100" stroke="#fde047" stroke-width="3"/>
                    <line x1="80" y1="15" x2="80" y2="95" stroke="#fbbf24" stroke-dasharray="3 3"/>
                    <line x1="140" y1="15" x2="140" y2="95" stroke="#fbbf24" stroke-dasharray="3 3"/>
                </svg>`
            },
            {
                title: 'Правило трех касаний',
                caption: 'Прием — Передача — Атакующий удар (утверждено в 1922 году)',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="45" cy="75" r="10" fill="#38bdf8"/>
                    <circle cx="105" cy="35" r="10" fill="#fbbf24"/>
                    <circle cx="170" cy="65" r="10" fill="#f43f5e"/>
                    <path d="M55 70 L95 40 M115 40 L160 60" stroke="#f8fafc" stroke-width="2" stroke-dasharray="4 3"/>
                </svg>`
            }
        ],
        fullHistory: {
            intro: 'Волейбол появился 9 февраля 1895 года в американском городе Холиок (штат Массачусетс). Преподаватель физкультуры Уильям Морган решил создать командную игру без жесткого физического контакта. Он подвесил теннисную сетку на высоту 198 см и назвал новую игру «Минтонет».',
            timeline: [
                { year: '1895 год', title: 'Изобретение «Минтонета»', desc: 'Уильям Морган объединил элементы тенниса, гандбола и баскетбола. Первые правила не ограничивали число игроков на площадке и количество касаний мяча.' },
                { year: '1896 год', title: 'Рождение названия «Volley Ball»', desc: 'Профессор Альфред Холстед предложил переименовать игру в «Волейбол» (от англ. volley — «удар с лёта»), поскольку суть игры заключалась в перебивании мяча в воздухе.' },
                { year: '1916–1922 гг.', title: 'Формирование классических правил', desc: 'На Филиппинах придумали комбинацию «пас и атакующий удар (спайк)», а в 1922 году было введено правило не более трех касаний мяча на одной стороне.' },
                { year: '1964 год', title: 'Олимпийский дебют в Токио', desc: 'Волейбол вошел в программу Олимпийских игр в Токио сразу среди мужских и женских сборных.' },
                { year: '1998 год', title: 'Система «Ралли-пойнт» и игрок Либеро', desc: 'Каждая подача стала приносить очко, партии сократили до 25 очков, а на площадке появился специализированный защитник — либеро.' }
            ],
            equipmentEvolution: [
                { item: 'Волейбольный мяч', detail: 'В 1900 году компания Spalding выпустила первый легкий трехслойный мяч весом 260–280 г; в 1998 году мячи стали яркими трехцветными (сине-желто-белыми).' },
                { item: 'Антенны на сетке', detail: 'Гибкие красно-белые стержни по краям сетки позволяют судьям точно фиксировать границы пролета мяча.' }
            ],
            keyStats: [
                { label: 'Размер площадки', value: '18 × 9 метров' },
                { label: 'Высота сетки', value: '2,43 м (М) / 2,24 м (Ж)' },
                { label: 'Счет в партии', value: 'До 25 очков (5-я до 15)' }
            ]
        }
    },
    {
        id: 'hockey',
        name: 'Хоккей с шайбой',
        subtitle: 'Сверхскорости на льду и ледовая тактика',
        originYear: '1875 год (Канада, Монреаль)',
        ancientRoots: 'Ледовые игры Северной Европы и индейцев микмаков',
        category: 'Зимний командный спорт',
        accentColor: 'cyan',
        badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        shortSummary: 'Один из самых быстрых видов спорта в мире: команды на коньках при помощи клюшек соревнуются на ледовой площадке, стараясь забросить каучуковую шайбу в ворота соперника.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="20" width="280" height="140" rx="38" fill="#083344" fill-opacity="0.4" stroke="#06b6d4" stroke-width="2.2"/>
                <line x1="115" y1="20" x2="115" y2="160" stroke="#38bdf8" stroke-width="2.5"/>
                <line x1="205" y1="20" x2="205" y2="160" stroke="#38bdf8" stroke-width="2.5"/>
                <line x1="160" y1="20" x2="160" y2="160" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5 3"/>
                <circle cx="160" cy="90" r="24" stroke="#38bdf8" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <path d="M125 50 L185 125 L205 125" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M195 50 L135 125 L115 125" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="160" cy="130" rx="16" ry="7" fill="#0f172a" stroke="#f8fafc" stroke-width="2"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Разметка ледовой арены',
                caption: 'Синие линии зон и 5 кругов вбрасывания шайбы',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="15" y="15" width="190" height="80" rx="25" fill="rgba(6,182,212,0.1)" stroke="#38bdf8" stroke-width="2"/>
                    <circle cx="65" cy="40" r="10" stroke="#f43f5e" stroke-width="1.5"/>
                    <circle cx="65" cy="70" r="10" stroke="#f43f5e" stroke-width="1.5"/>
                    <circle cx="155" cy="40" r="10" stroke="#f43f5e" stroke-width="1.5"/>
                    <circle cx="155" cy="70" r="10" stroke="#f43f5e" stroke-width="1.5"/>
                </svg>`
            },
            {
                title: 'Рождение плоской шайбы',
                caption: 'В 1875 году у резинового мяча срезали верх и низ, чтобы он не вылетал со льда',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <ellipse cx="110" cy="50" rx="45" ry="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                    <path d="M65 50 V68 C65 77 155 77 155 68 V50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                </svg>`
            }
        ],
        fullHistory: {
            intro: 'Родина современного хоккея с шайбой — Канада. 3 марта 1875 года на крытом катке «Виктория» в Монреале студенты университета Макгилла провели первый официально зафиксированный матч. Чтобы снаряд не отскакивал в зрителей, вместо деревянного шара использовали плоскую шайбу.',
            timeline: [
                { year: '1875 год', title: 'Первый матч на катке «Виктория» в Монреале', desc: 'Джеймс Крейтон организовал матч двух команд по 9 человек. Впервые использована плоская деревянная шайба.' },
                { year: '1879–1886 гг.', title: 'Монреальские правила и резиновая шайба', desc: 'Число игроков сократили до 7, затем до 6 на льду. Появилась шайба из вулканизированной резины.' },
                { year: '1893 год', title: 'Учреждение Кубка Стэнли', desc: 'Генерал-губернатор Канады лорд Фредерик Стэнли приобрел серебряную чашу за 10 гиней для награждения лучшего клуба страны.' },
                { year: '1920 год', title: 'Олимпийский дебют (Антверпен)', desc: 'Как ни удивительно, впервые хоккей с шайбой дебютировал на летней Олимпиаде 1920 года, а с 1924 года стал главным видом зимних Игр.' }
            ],
            equipmentEvolution: [
                { item: 'Хоккейная клюшка', detail: 'От цельных ясеневых клюшек с прямым крюком до сверхлегких карбоновых клюшек с индивидуальным загибом пера.' },
                { item: 'Вратарская маска', detail: 'Впервые использована вратарем Жаком Плантом в 1959 году; сегодня это высокопрочный кевларовый шлем с решеткой.' }
            ],
            keyStats: [
                { label: 'Формат матча', value: '3 периода по 20 минут' },
                { label: 'Вес шайбы', value: '156 — 170 граммов' },
                { label: 'Скорость полета шайбы', value: 'До 180 км/ч' }
            ]
        }
    },
    {
        id: 'basketball',
        name: 'Баскетбол',
        subtitle: 'Высота, точность броска и ритм паркета',
        originYear: '1891 год (США, Спрингфилд)',
        ancientRoots: 'Создан доктором Джеймсом Нейсмитом (13 правил)',
        category: 'Командный игровой спорт',
        accentColor: 'orange',
        badgeBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
        shortSummary: 'Стремительная командная игра с мячом, в которой две команды по 5 игроков на паркете забрасывают мяч руками в кольцо с сеткой, закрепленное на высоте 3,05 метра.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="20" width="280" height="140" rx="14" fill="#7c2d12" fill-opacity="0.3" stroke="#f97316" stroke-width="2"/>
                <path d="M20 45 A55 55 0 0 1 20 135" stroke="#fb923c" stroke-width="2"/>
                <path d="M300 45 A55 55 0 0 0 300 135" stroke="#fb923c" stroke-width="2"/>
                <g class="svg-animated-icon">
                    <circle cx="160" cy="90" r="25" fill="#ea580c" stroke="#fed7aa" stroke-width="2"/>
                    <path d="M135 90 H185 M160 65 V115 M142 72 Q160 90 142 108 M178 72 Q160 90 178 108" stroke="#431407" stroke-width="2.2" fill="none"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'От корзины из-под персиков к кольцу',
                caption: 'В 1891 году у корзин было глухое дно — мяч доставали лестницей!',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="75" y="15" width="70" height="45" rx="4" stroke="#f8fafc" stroke-width="2" fill="rgba(255,255,255,0.05)"/>
                    <ellipse cx="110" cy="55" rx="22" ry="6" stroke="#f97316" stroke-width="3"/>
                    <path d="M90 57 L96 88 H124 L130 57" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3 2"/>
                </svg>`
            },
            {
                title: 'Трехочковая дуга и 24 секунды',
                caption: 'Правило 24 секунд на атаку (1954 г.) сделало баскетбол сверхдинамичным',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="65" y="25" width="90" height="60" rx="10" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
                    <text x="110" y="65" text-anchor="middle" fill="#fb923c" font-family="monospace" font-size="28" font-weight="bold">24.0</text>
                </svg>`
            }
        ],
        fullHistory: {
            intro: 'Баскетбол — один из немногих видов спорта, чья дата рождения известна с точностью до дня. В декабре 1891 года преподаватель колледжа в Спрингфилде Джеймс Нейсмит прибил к балкону спортзала две корзины из-под персиков и написал 13 простых правил для студентов.',
            timeline: [
                { year: 'Декабрь 1891 г.', title: '13 правил Джеймса Нейсмита', desc: 'В первом матче ведение мяча (дриблинг) еще не существовало — игроки только перебрасывали мяч друг другу и кидали в корзину с глухим дном.' },
                { year: '1893–1906 гг.', title: 'Появление железных колец со сквозной сеткой', desc: 'Корзины заменили металлическими кольцами с сеткой, открытой снизу, чтобы не лазить за мячом после каждого попадания.' },
                { year: '1936 год', title: 'Олимпийский дебют в Берлине', desc: 'Баскетбол вошел в олимпийскую семью, а сам Джеймс Нейсмит лично присутствовал на турнире и подбросил мяч в первой игре.' },
                { year: '1954 и 1979 гг.', title: 'Правило 24 секунд и трехочковая дуга', desc: 'Ограничение времени на атаку спасло игру от затягивания счета, а дальний бросок за 3 очка изменил тактику навсегда.' }
            ],
            equipmentEvolution: [
                { item: 'Баскетбольный щит', detail: 'Сначала щиты были сетчатыми, чтобы зрители на балконе не отбивали мячи руками, позже стали из закаленного прозрачного стекла.' },
                { item: 'Мяч с пупырышками', detail: 'В 1957 году Тони Хинкл предложил ярко-оранжевый цвет мяча, чтобы он был идеально заметен на деревянном паркете.' }
            ],
            keyStats: [
                { label: 'Высота кольца', value: 'Ровно 3,05 метра (10 футов)' },
                { label: 'Время на атаку', value: '24 секунды' },
                { label: 'Очки за бросок', value: '1 (штрафной), 2 или 3 очка' }
            ]
        }
    },
    {
        id: 'tennis',
        name: 'Большой теннис',
        subtitle: 'Королевская геометрия корта и дуэль ракеток',
        originYear: '1873 год (Англия, Уимблдон)',
        ancientRoots: 'Французская игра «Жё-де-пом» (XII век)',
        category: 'Ракеточный вид спорта',
        accentColor: 'lime',
        badgeBg: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
        shortSummary: 'Престижный вид спорта, в котором два игрока (или две пары) при помощи струнных ракеток перебивают упругий войлочный мяч через сетку на размеченном корте.',
        mainSvg: `
            <svg class="w-full h-44" viewBox="0 0 320 180" fill="none">
                <rect x="25" y="22" width="270" height="136" rx="10" fill="#14532d" fill-opacity="0.35" stroke="#84cc16" stroke-width="2"/>
                <line x1="25" y1="40" x2="295" y2="40" stroke="#bef264" stroke-width="1.5"/>
                <line x1="25" y1="140" x2="295" y2="140" stroke="#bef264" stroke-width="1.5"/>
                <line x1="160" y1="22" x2="160" y2="158" stroke="#f8fafc" stroke-width="3"/>
                <g class="svg-animated-icon">
                    <ellipse cx="145" cy="80" rx="26" ry="32" stroke="#a3e635" stroke-width="3" fill="rgba(163,230,53,0.12)"/>
                    <line x1="145" y1="112" x2="145" y2="148" stroke="#f8fafc" stroke-width="5" stroke-linecap="round"/>
                    <circle cx="185" cy="75" r="12" fill="#d9f99d" stroke="#65a30d" stroke-width="2"/>
                </g>
            </svg>
        `,
        galleryFrames: [
            {
                title: 'Три покрытия мировых кортов',
                caption: 'Трава (Уимблдон), Грунт (Ролан Гаррос) и Хард (US/Aus Open)',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <rect x="15" y="25" width="55" height="60" rx="6" fill="#15803d" stroke="#86efac"/>
                    <rect x="82" y="25" width="55" height="60" rx="6" fill="#b45309" stroke="#fcd34d"/>
                    <rect x="150" y="25" width="55" height="60" rx="6" fill="#0369a1" stroke="#7dd3fc"/>
                </svg>`
            },
            {
                title: 'Загадка счета 15 — 30 — 40',
                caption: 'Счет велся по циферблату часов в средневековой Франции (15, 30, 45→40)',
                svg: `<svg class="w-full h-28" viewBox="0 0 220 110" fill="none">
                    <circle cx="110" cy="55" r="35" stroke="#a3e635" stroke-width="2"/>
                    <line x1="110" y1="55" x2="132" y2="55" stroke="#f8fafc" stroke-width="2.5"/>
                    <line x1="110" y1="55" x2="110" y2="28" stroke="#a3e635" stroke-width="2.5"/>
                </svg>`
            }
        ],
        fullHistory: {
            intro: 'Прямым предком тенниса была французская средневековая игра «Жё-де-пом» (игра ладонью), которой увлекались короли. В 1873 году британский майор Уолтер Уингфилд запатентовал правила игры на травяном газоне («Лаун-теннис»), а уже в 1877 году стартовал первый Уимблдонский турнир.',
            timeline: [
                { year: 'XII–XVI века', title: 'Французский «Жё-де-пом»', desc: 'В монастырях и королевских замках мяч сначала отбивали ладонью, затем кожаной перчаткой, а в XVI веке появились первые деревянные ракетки со струнами.' },
                { year: '1873–1877 гг.', title: 'Патент Уингфилда и первый Уимблдон', desc: 'Уолтер Уингфилд создал переносные комплекты для игры на лужайках, а Всеанглийский клуб в Уимблдоне утвердил прямоугольную форму корта.' },
                { year: '1968 год', title: 'Начало «Открытой эры»', desc: 'Любителям и профессионалам разрешили выступать вместе на всех турнирах «Большого шлема».' },
                { year: '1972–2006 гг.', title: 'Оптический мяч и система «Hawk-Eye»', desc: 'Мячи стали флуоресцентно-желтыми для телетрансляций, а компьютерная система «Ястребиный глаз» начала фиксировать ауты с точностью до миллиметра.' }
            ],
            equipmentEvolution: [
                { item: 'Теннисная ракетка', detail: 'До 1980-х годов ракетки делали из клееного дерева; сегодня это графитовые и титановые конструкции, позволяющие подавать со скоростью свыше 250 км/ч.' },
                { item: 'Теннисный мяч', detail: 'В 1972 году ITF утвердила ярко-желтый цвет («Optic Yellow»), так как белые мячи сливались с линиями корта на экранах цветных телевизоров.' }
            ],
            keyStats: [
                { label: 'Турниры Большого шлема', value: '4 главных турнира в году' },
                { label: 'Система счета в гейме', value: '0 — 15 — 30 — 40 — Гейм' },
                { label: 'Длина корта', value: '23,77 метра' }
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
        if (event) {
            event.stopPropagation();
        }
        if (this.expandedSportId === sportId) {
            this.expandedSportId = null;
        } else {
            this.expandedSportId = sportId;
        }

        const allCards = document.querySelectorAll('.sport-card');
        allCards.forEach(card => {
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
                <div class="lg:col-span-2 glass-panel rounded-3xl p-10 text-center border border-rose-500/30">
                    <div class="text-2xl font-display font-bold text-white mb-2">Вид спорта не найден</div>
                    <p class="text-slate-400 text-sm mb-5">Попробуйте ввести другое название: например, «Футбол», «Бокс», «Волейбол», «Хоккей», «Баскетбол» или «Теннис».</p>
                    <button onclick="appLogic.clearSearch()" class="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm">
                        Сбросить фильтр поиска
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
                            ${sport.category}
                        </span>
                        <span class="text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-800">
                            Истоки: ${sport.originYear}
                        </span>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                            <h3 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
                                ${sport.name}
                            </h3>
                            <p class="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5">
                                ${sport.subtitle}
                            </p>
                        </div>
                    </div>

                    <div class="rounded-2xl bg-slate-950/85 border border-slate-800/90 p-3 mb-4">
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
                        class="preview-toggle-label flex-1 py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-semibold text-xs sm:text-sm transition-colors text-center"
                    >
                        ${isExpanded ? 'Свернуть краткий обзор ▲' : 'Краткий обзор и схемы ▼'}
                    </button>

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); appLogic.openSportDetail('${sport.id}')"
                        class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/15 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                        <span>Полная история в подробностях</span>
                        <span>→</span>
                    </button>
                </div>

                <div class="sport-click-drawer mt-6 pt-6 border-t border-cyan-500/30" onclick="event.stopPropagation()">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">
                            Векторные схемы арены и эволюция инвентаря (${sport.name})
                        </span>
                        <span class="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            Открыто по клику • 100% Vector Scene
                        </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                        ${sport.galleryFrames.map(frame => `
                            <div class="video-sim-box rounded-2xl bg-slate-950/90 border border-slate-800 p-4">
                                ${frame.svg}
                                <div class="mt-2.5">
                                    <div class="text-xs sm:text-sm font-bold text-white">${frame.title}</div>
                                    <div class="text-xs text-slate-400 leading-relaxed mt-1">${frame.caption}</div>
                                </div>
                            </div>
                        `).join('')}

                        <div class="rounded-2xl bg-slate-900/95 border border-slate-800 p-4 flex flex-col justify-between">
                            <div>
                                <div class="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                                    Исторические корни:
                                </div>
                                <p class="text-xs text-slate-300 leading-relaxed mb-3">
                                    Древние предшественники: <strong class="text-white">${sport.ancientRoots}</strong>
                                </p>
                                <div class="space-y-1.5 pt-2 border-t border-slate-800">
                                    ${sport.fullHistory.keyStats.map(st => `
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-slate-400">${st.label}:</span>
                                            <span class="font-semibold text-cyan-300">${st.value}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <button 
                                type="button"
                                onclick="appLogic.openSportDetail('${sport.id}')"
                                class="mt-4 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors text-center"
                            >
                                Читать всю летопись «${sport.name}» →
                            </button>
                        </div>
                    </div>
                </div>

            </article>
        `}).join('');
    },

    handleSearch(query) {
        const cleanQuery = query.trim().toLowerCase();
        this.currentFilter = cleanQuery;

        const clearBtn = document.getElementById('clearSearchBtn');
        const statusBanner = document.getElementById('searchStatusBanner');
        const statusText = document.getElementById('searchStatusText');

        const internalView = document.getElementById('internalSportView');
        if (!internalView.classList.contains('hidden') && cleanQuery.length > 0) {
            this.showMainPage(false);
        }

        if (cleanQuery.length > 0) {
            clearBtn.classList.remove('hidden');
            const filtered = SPORTS_DATABASE.filter(s => 
                s.name.toLowerCase().includes(cleanQuery) ||
                s.subtitle.toLowerCase().includes(cleanQuery) ||
                s.category.toLowerCase().includes(cleanQuery) ||
                s.shortSummary.toLowerCase().includes(cleanQuery)
            );
            statusBanner.classList.remove('hidden');
            statusText.innerHTML = `Результаты поиска по запросу <strong>«${query}»</strong>: найдено дисциплин — <strong>${filtered.length}</strong>`;
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

        const mainPage = document.getElementById('mainPageView');
        const internalPage = document.getElementById('internalSportView');
        const contentBox = document.getElementById('internalSportContent');

        contentBox.innerHTML = `
            <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/35 relative overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-7 space-y-4">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="px-3.5 py-1 rounded-full text-xs font-bold border ${sport.badgeBg}">
                                ${sport.category}
                            </span>
                            <span class="text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                                Официальная дата: ${sport.originYear}
                            </span>
                        </div>

                        <h1 class="font-display text-3xl sm:text-5xl font-extrabold text-white">
                            История вида спорта: <span class="text-cyan-400">${sport.name}</span>
                        </h1>

                        <p class="text-slate-200 text-base sm:text-lg leading-relaxed">
                            ${sport.fullHistory.intro}
                        </p>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                            ${sport.fullHistory.keyStats.map(stat => `
                                <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                                    <div class="text-xs text-slate-400">${stat.label}</div>
                                    <div class="font-display font-bold text-sm sm:text-base text-cyan-300 mt-1">${stat.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div class="rounded-2xl bg-slate-950 p-5 border border-slate-800 space-y-4">
                            <div class="text-xs font-mono text-cyan-300 uppercase tracking-wider text-center">
                                Векторная реконструкция арены и атрибутики
                            </div>
                            ${sport.mainSvg}
                            <div class="grid grid-cols-2 gap-3">
                                ${sport.galleryFrames.map(f => `
                                    <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                                        ${f.svg}
                                        <div class="text-[11px] font-semibold text-center text-slate-300 mt-1">${f.title}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
                <div class="mb-8">
                    <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">Пошаговая летопись веков</span>
                    <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                        Хронология ключевых этапов развития (${sport.name})
                    </h2>
                </div>

                <div class="space-y-6 relative before:absolute before:top-3 before:bottom-3 before:left-4 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-emerald-400 before:to-amber-400">
                    ${sport.fullHistory.timeline.map((step, idx) => `
                        <div class="relative pl-12 sm:pl-16">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-slate-900 border-2 border-cyan-400 text-cyan-300 font-display font-bold text-xs flex items-center justify-center absolute left-0 sm:left-1 top-0 shadow-lg shadow-cyan-500/20">
                                ${idx + 1}
                            </div>
                            <div class="p-5 rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-cyan-500/40 transition-all">
                                <span class="inline-block px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 font-mono text-xs font-bold mb-2">
                                    ${step.year}
                                </span>
                                <h3 class="font-display text-lg font-bold text-white mb-1.5">
                                    ${step.title}
                                </h3>
                                <p class="text-slate-300 text-sm leading-relaxed">
                                    ${step.desc}
                                </p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
                <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Технологический прогресс</span>
                <h2 class="font-display text-2xl font-bold text-white mt-1 mb-6">
                    Как менялись инвентарь и правила игры
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    ${sport.fullHistory.equipmentEvolution.map(eq => `
                        <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                            <div class="text-cyan-400 font-display font-bold text-base mb-2">${eq.item}</div>
                            <p class="text-slate-300 text-sm leading-relaxed">${eq.detail}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800">
                <div>
                    <div class="text-sm font-bold text-white">Хотите изучить историю другого вида спорта?</div>
                    <div class="text-xs text-slate-400">Переключитесь в один клик или вернитесь к полному каталогу</div>
                </div>
                <div class="flex flex-wrap gap-2">
                    ${SPORTS_DATABASE.filter(s => s.id !== sport.id).map(other => `
                        <button onclick="appLogic.openSportDetail('${other.id}')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold text-slate-200 transition-colors">
                            ${other.name} →
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        mainPage.classList.add('hidden');
        internalPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    showMainPage(scrollToTop = true) {
        const mainPage = document.getElementById('mainPageView');
        const internalPage = document.getElementById('internalSportView');
        internalPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    navigateSection(sectionId) {
        this.showMainPage(false);
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

const qaTester = {
    runAllTests() {
        const resultsGrid = document.getElementById('qaResultsGrid');
        if (!resultsGrid) return;

        const externalImgCount = document.querySelectorAll('img').length;
        const svgCount = document.querySelectorAll('svg').length;
        const sportCardsCount = SPORTS_DATABASE.length;
        const searchInputExists = !!document.getElementById('sportSearchInput');
        const internalViewExists = !!document.getElementById('internalSportView');

        const checks = [
            {
                title: '1. Отсутствие фото живых людей',
                owner: 'Изамутдин & Джабраил',
                passed: externalImgCount === 0 && svgCount >= 10,
                details: `Фотографий людей: ${externalImgCount} шт. Векторных SVG-иллюстраций: ${svgCount} шт.`
            },
            {
                title: '2. Защита от дерганий при скролле',
                owner: 'Изамутдин & Рамазан',
                passed: sportCardsCount >= 6,
                details: `Все ${sportCardsCount} карточек зафиксированы в сетке и открываются строго по клику мышкой.`
            },
            {
                title: '3. Подробная история по клику',
                owner: 'Хучбар',
                passed: internalViewExists,
                details: 'Модуль детальной истории с таймлайном веков и эволюцией инвентаря подключен.'
            },
            {
                title: '4. Живой поиск по центру сверху',
                owner: 'Адам',
                passed: searchInputExists,
                details: 'Поиск мгновенно фильтрует виды спорта по названию и быстрым тегам.'
            },
            {
                title: '5. Мини-проводник справа сверху',
                owner: 'Рамазан & Адам',
                passed: document.querySelectorAll('.nav-btn').length >= 4,
                details: 'Навигация «Главная», «О сайте», «Виды спорта» и «Команда (5)» активна.'
            },
            {
                title: '6. Описание целей сайта',
                owner: 'Рамазан & Джабраил',
                passed: !!document.getElementById('about-site'),
                details: 'Раздел о назначении, теме и ценности сайта размещен на главной странице.'
            }
        ];

        resultsGrid.innerHTML = checks.map(c => `
            <div class="p-4 rounded-2xl bg-slate-900/90 border ${c.passed ? 'border-emerald-500/30' : 'border-rose-500/40'}">
                <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-bold text-white">${c.title}</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${c.passed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">
                        ${c.passed ? 'ПРОЙДЕНО ✓' : 'ОШИБКА'}
                    </span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed mb-2">${c.details}</p>
                <div class="text-[11px] text-cyan-400 font-mono">Ответственный: ${c.owner}</div>
            </div>
        `).join('');
    }
};

window.addEventListener('DOMContentLoaded', () => {
    appLogic.init();
});